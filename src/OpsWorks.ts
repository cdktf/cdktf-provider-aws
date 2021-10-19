// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS OpsWorks
*/
export namespace OpsWorks {
  export interface OpsworksApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}
    */
    readonly autoBundleOnDeploy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}
    */
    readonly awsFlowRubySettings?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#data_source_arn OpsworksApplication#data_source_arn}
    */
    readonly dataSourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#data_source_database_name OpsworksApplication#data_source_database_name}
    */
    readonly dataSourceDatabaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#data_source_type OpsworksApplication#data_source_type}
    */
    readonly dataSourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#description OpsworksApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#document_root OpsworksApplication#document_root}
    */
    readonly documentRoot?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#domains OpsworksApplication#domains}
    */
    readonly domains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#enable_ssl OpsworksApplication#enable_ssl}
    */
    readonly enableSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#name OpsworksApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#rails_env OpsworksApplication#rails_env}
    */
    readonly railsEnv?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#short_name OpsworksApplication#short_name}
    */
    readonly shortName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#stack_id OpsworksApplication#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#type OpsworksApplication#type}
    */
    readonly type: string;
    /**
    * app_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#app_source OpsworksApplication#app_source}
    */
    readonly appSource?: OpsworksApplicationAppSource[];
    /**
    * environment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#environment OpsworksApplication#environment}
    */
    readonly environment?: OpsworksApplicationEnvironment[];
    /**
    * ssl_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#ssl_configuration OpsworksApplication#ssl_configuration}
    */
    readonly sslConfiguration?: OpsworksApplicationSslConfiguration[];
  }
  export interface OpsworksApplicationAppSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#password OpsworksApplication#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#revision OpsworksApplication#revision}
    */
    readonly revision?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#ssh_key OpsworksApplication#ssh_key}
    */
    readonly sshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#type OpsworksApplication#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#url OpsworksApplication#url}
    */
    readonly url?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#username OpsworksApplication#username}
    */
    readonly username?: string;
  }

  function opsworksApplicationAppSourceToTerraform(struct?: OpsworksApplicationAppSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      password: cdktf.stringToTerraform(struct!.password),
      revision: cdktf.stringToTerraform(struct!.revision),
      ssh_key: cdktf.stringToTerraform(struct!.sshKey),
      type: cdktf.stringToTerraform(struct!.type),
      url: cdktf.stringToTerraform(struct!.url),
      username: cdktf.stringToTerraform(struct!.username),
    }
  }

  export interface OpsworksApplicationEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#key OpsworksApplication#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#secure OpsworksApplication#secure}
    */
    readonly secure?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#value OpsworksApplication#value}
    */
    readonly value: string;
  }

  function opsworksApplicationEnvironmentToTerraform(struct?: OpsworksApplicationEnvironment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      secure: cdktf.booleanToTerraform(struct!.secure),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface OpsworksApplicationSslConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#certificate OpsworksApplication#certificate}
    */
    readonly certificate: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#chain OpsworksApplication#chain}
    */
    readonly chain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#private_key OpsworksApplication#private_key}
    */
    readonly privateKey: string;
  }

  function opsworksApplicationSslConfigurationToTerraform(struct?: OpsworksApplicationSslConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate: cdktf.stringToTerraform(struct!.certificate),
      chain: cdktf.stringToTerraform(struct!.chain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html aws_opsworks_application}
  */
  export class OpsworksApplication extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_application";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html aws_opsworks_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksApplicationConfig
    */
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
    private _autoBundleOnDeploy?: string | undefined; 
    public get autoBundleOnDeploy() {
      return this.getStringAttribute('auto_bundle_on_deploy');
    }
    public set autoBundleOnDeploy(value: string | undefined) {
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
    private _awsFlowRubySettings?: string | undefined; 
    public get awsFlowRubySettings() {
      return this.getStringAttribute('aws_flow_ruby_settings');
    }
    public set awsFlowRubySettings(value: string | undefined) {
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
    private _dataSourceArn?: string | undefined; 
    public get dataSourceArn() {
      return this.getStringAttribute('data_source_arn');
    }
    public set dataSourceArn(value: string | undefined) {
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
    private _dataSourceDatabaseName?: string | undefined; 
    public get dataSourceDatabaseName() {
      return this.getStringAttribute('data_source_database_name');
    }
    public set dataSourceDatabaseName(value: string | undefined) {
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
    private _dataSourceType?: string | undefined; 
    public get dataSourceType() {
      return this.getStringAttribute('data_source_type');
    }
    public set dataSourceType(value: string | undefined) {
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

    // document_root - computed: false, optional: true, required: false
    private _documentRoot?: string | undefined; 
    public get documentRoot() {
      return this.getStringAttribute('document_root');
    }
    public set documentRoot(value: string | undefined) {
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
    private _domains?: string[] | undefined; 
    public get domains() {
      return this.getListAttribute('domains');
    }
    public set domains(value: string[] | undefined) {
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
    private _enableSsl?: boolean | cdktf.IResolvable | undefined; 
    public get enableSsl() {
      return this.getBooleanAttribute('enable_ssl') as any;
    }
    public set enableSsl(value: boolean | cdktf.IResolvable | undefined) {
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

    // rails_env - computed: false, optional: true, required: false
    private _railsEnv?: string | undefined; 
    public get railsEnv() {
      return this.getStringAttribute('rails_env');
    }
    public set railsEnv(value: string | undefined) {
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
    private _shortName?: string | undefined; 
    public get shortName() {
      return this.getStringAttribute('short_name');
    }
    public set shortName(value: string | undefined) {
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
    private _stackId?: string; 
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

    // app_source - computed: false, optional: true, required: false
    private _appSource?: OpsworksApplicationAppSource[] | undefined; 
    public get appSource() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('app_source') as any;
    }
    public set appSource(value: OpsworksApplicationAppSource[] | undefined) {
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
    private _environment?: OpsworksApplicationEnvironment[] | undefined; 
    public get environment() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('environment') as any;
    }
    public set environment(value: OpsworksApplicationEnvironment[] | undefined) {
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
    private _sslConfiguration?: OpsworksApplicationSslConfiguration[] | undefined; 
    public get sslConfiguration() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ssl_configuration') as any;
    }
    public set sslConfiguration(value: OpsworksApplicationSslConfiguration[] | undefined) {
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
        auto_bundle_on_deploy: cdktf.stringToTerraform(this._autoBundleOnDeploy),
        aws_flow_ruby_settings: cdktf.stringToTerraform(this._awsFlowRubySettings),
        data_source_arn: cdktf.stringToTerraform(this._dataSourceArn),
        data_source_database_name: cdktf.stringToTerraform(this._dataSourceDatabaseName),
        data_source_type: cdktf.stringToTerraform(this._dataSourceType),
        description: cdktf.stringToTerraform(this._description),
        document_root: cdktf.stringToTerraform(this._documentRoot),
        domains: cdktf.listMapper(cdktf.stringToTerraform)(this._domains),
        enable_ssl: cdktf.booleanToTerraform(this._enableSsl),
        name: cdktf.stringToTerraform(this._name),
        rails_env: cdktf.stringToTerraform(this._railsEnv),
        short_name: cdktf.stringToTerraform(this._shortName),
        stack_id: cdktf.stringToTerraform(this._stackId),
        type: cdktf.stringToTerraform(this._type),
        app_source: cdktf.listMapper(opsworksApplicationAppSourceToTerraform)(this._appSource),
        environment: cdktf.listMapper(opsworksApplicationEnvironmentToTerraform)(this._environment),
        ssl_configuration: cdktf.listMapper(opsworksApplicationSslConfigurationToTerraform)(this._sslConfiguration),
      };
    }
  }
  export interface OpsworksCustomLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#auto_assign_elastic_ips OpsworksCustomLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#auto_assign_public_ips OpsworksCustomLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#auto_healing OpsworksCustomLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#custom_configure_recipes OpsworksCustomLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#custom_deploy_recipes OpsworksCustomLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#custom_instance_profile_arn OpsworksCustomLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#custom_json OpsworksCustomLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#custom_security_group_ids OpsworksCustomLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#custom_setup_recipes OpsworksCustomLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#custom_shutdown_recipes OpsworksCustomLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#custom_undeploy_recipes OpsworksCustomLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#drain_elb_on_shutdown OpsworksCustomLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#elastic_load_balancer OpsworksCustomLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#install_updates_on_boot OpsworksCustomLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#instance_shutdown_timeout OpsworksCustomLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#name OpsworksCustomLayer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#short_name OpsworksCustomLayer#short_name}
    */
    readonly shortName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#stack_id OpsworksCustomLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#system_packages OpsworksCustomLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#tags OpsworksCustomLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#tags_all OpsworksCustomLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#use_ebs_optimized_instances OpsworksCustomLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#ebs_volume OpsworksCustomLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksCustomLayerEbsVolume[];
  }
  export interface OpsworksCustomLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#encrypted OpsworksCustomLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#iops OpsworksCustomLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#mount_point OpsworksCustomLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#number_of_disks OpsworksCustomLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#raid_level OpsworksCustomLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#size OpsworksCustomLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html#type OpsworksCustomLayer#type}
    */
    readonly type?: string;
  }

  function opsworksCustomLayerEbsVolumeToTerraform(struct?: OpsworksCustomLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html aws_opsworks_custom_layer}
  */
  export class OpsworksCustomLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_custom_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html aws_opsworks_custom_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksCustomLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksCustomLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_custom_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._name = config.name;
      this._shortName = config.shortName;
      this._stackId = config.stackId;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
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

    // short_name - computed: false, optional: false, required: true
    private _shortName?: string; 
    public get shortName() {
      return this.getStringAttribute('short_name');
    }
    public set shortName(value: string) {
      this._shortName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get shortNameInput() {
      return this._shortName
    }

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksCustomLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksCustomLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        name: cdktf.stringToTerraform(this._name),
        short_name: cdktf.stringToTerraform(this._shortName),
        stack_id: cdktf.stringToTerraform(this._stackId),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        ebs_volume: cdktf.listMapper(opsworksCustomLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksGangliaLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#auto_assign_elastic_ips OpsworksGangliaLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#auto_assign_public_ips OpsworksGangliaLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#auto_healing OpsworksGangliaLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_configure_recipes OpsworksGangliaLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_deploy_recipes OpsworksGangliaLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_instance_profile_arn OpsworksGangliaLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_json OpsworksGangliaLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_security_group_ids OpsworksGangliaLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_setup_recipes OpsworksGangliaLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_shutdown_recipes OpsworksGangliaLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_undeploy_recipes OpsworksGangliaLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#drain_elb_on_shutdown OpsworksGangliaLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#elastic_load_balancer OpsworksGangliaLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#install_updates_on_boot OpsworksGangliaLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#instance_shutdown_timeout OpsworksGangliaLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#name OpsworksGangliaLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#password OpsworksGangliaLayer#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#stack_id OpsworksGangliaLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#system_packages OpsworksGangliaLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#tags OpsworksGangliaLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#tags_all OpsworksGangliaLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#url OpsworksGangliaLayer#url}
    */
    readonly url?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#use_ebs_optimized_instances OpsworksGangliaLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#username OpsworksGangliaLayer#username}
    */
    readonly username?: string;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#ebs_volume OpsworksGangliaLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksGangliaLayerEbsVolume[];
  }
  export interface OpsworksGangliaLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#encrypted OpsworksGangliaLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#iops OpsworksGangliaLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#mount_point OpsworksGangliaLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#number_of_disks OpsworksGangliaLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#raid_level OpsworksGangliaLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#size OpsworksGangliaLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#type OpsworksGangliaLayer#type}
    */
    readonly type?: string;
  }

  function opsworksGangliaLayerEbsVolumeToTerraform(struct?: OpsworksGangliaLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html aws_opsworks_ganglia_layer}
  */
  export class OpsworksGangliaLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_ganglia_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html aws_opsworks_ganglia_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksGangliaLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksGangliaLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_ganglia_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._name = config.name;
      this._password = config.password;
      this._stackId = config.stackId;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._url = config.url;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._username = config.username;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
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

    // password - computed: false, optional: false, required: true
    private _password?: string; 
    public get password() {
      return this.getStringAttribute('password');
    }
    public set password(value: string) {
      this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
      return this._password
    }

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // url - computed: false, optional: true, required: false
    private _url?: string | undefined; 
    public get url() {
      return this.getStringAttribute('url');
    }
    public set url(value: string | undefined) {
      this._url = value;
    }
    public resetUrl() {
      this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
      return this._url
    }

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // username - computed: false, optional: true, required: false
    private _username?: string | undefined; 
    public get username() {
      return this.getStringAttribute('username');
    }
    public set username(value: string | undefined) {
      this._username = value;
    }
    public resetUsername() {
      this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
      return this._username
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksGangliaLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksGangliaLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        name: cdktf.stringToTerraform(this._name),
        password: cdktf.stringToTerraform(this._password),
        stack_id: cdktf.stringToTerraform(this._stackId),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        url: cdktf.stringToTerraform(this._url),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        username: cdktf.stringToTerraform(this._username),
        ebs_volume: cdktf.listMapper(opsworksGangliaLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksHaproxyLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#auto_healing OpsworksHaproxyLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#custom_json OpsworksHaproxyLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}
    */
    readonly healthcheckMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}
    */
    readonly healthcheckUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#name OpsworksHaproxyLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#stack_id OpsworksHaproxyLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#stats_enabled OpsworksHaproxyLayer#stats_enabled}
    */
    readonly statsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#stats_password OpsworksHaproxyLayer#stats_password}
    */
    readonly statsPassword: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#stats_url OpsworksHaproxyLayer#stats_url}
    */
    readonly statsUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#stats_user OpsworksHaproxyLayer#stats_user}
    */
    readonly statsUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#system_packages OpsworksHaproxyLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#tags OpsworksHaproxyLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#tags_all OpsworksHaproxyLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#ebs_volume OpsworksHaproxyLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksHaproxyLayerEbsVolume[];
  }
  export interface OpsworksHaproxyLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#encrypted OpsworksHaproxyLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#iops OpsworksHaproxyLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#mount_point OpsworksHaproxyLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#number_of_disks OpsworksHaproxyLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#raid_level OpsworksHaproxyLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#size OpsworksHaproxyLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html#type OpsworksHaproxyLayer#type}
    */
    readonly type?: string;
  }

  function opsworksHaproxyLayerEbsVolumeToTerraform(struct?: OpsworksHaproxyLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html aws_opsworks_haproxy_layer}
  */
  export class OpsworksHaproxyLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_haproxy_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html aws_opsworks_haproxy_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksHaproxyLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksHaproxyLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_haproxy_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._healthcheckMethod = config.healthcheckMethod;
      this._healthcheckUrl = config.healthcheckUrl;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._name = config.name;
      this._stackId = config.stackId;
      this._statsEnabled = config.statsEnabled;
      this._statsPassword = config.statsPassword;
      this._statsUrl = config.statsUrl;
      this._statsUser = config.statsUser;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // healthcheck_method - computed: false, optional: true, required: false
    private _healthcheckMethod?: string | undefined; 
    public get healthcheckMethod() {
      return this.getStringAttribute('healthcheck_method');
    }
    public set healthcheckMethod(value: string | undefined) {
      this._healthcheckMethod = value;
    }
    public resetHealthcheckMethod() {
      this._healthcheckMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthcheckMethodInput() {
      return this._healthcheckMethod
    }

    // healthcheck_url - computed: false, optional: true, required: false
    private _healthcheckUrl?: string | undefined; 
    public get healthcheckUrl() {
      return this.getStringAttribute('healthcheck_url');
    }
    public set healthcheckUrl(value: string | undefined) {
      this._healthcheckUrl = value;
    }
    public resetHealthcheckUrl() {
      this._healthcheckUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthcheckUrlInput() {
      return this._healthcheckUrl
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
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

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // stats_enabled - computed: false, optional: true, required: false
    private _statsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get statsEnabled() {
      return this.getBooleanAttribute('stats_enabled') as any;
    }
    public set statsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._statsEnabled = value;
    }
    public resetStatsEnabled() {
      this._statsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statsEnabledInput() {
      return this._statsEnabled
    }

    // stats_password - computed: false, optional: false, required: true
    private _statsPassword?: string; 
    public get statsPassword() {
      return this.getStringAttribute('stats_password');
    }
    public set statsPassword(value: string) {
      this._statsPassword = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statsPasswordInput() {
      return this._statsPassword
    }

    // stats_url - computed: false, optional: true, required: false
    private _statsUrl?: string | undefined; 
    public get statsUrl() {
      return this.getStringAttribute('stats_url');
    }
    public set statsUrl(value: string | undefined) {
      this._statsUrl = value;
    }
    public resetStatsUrl() {
      this._statsUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statsUrlInput() {
      return this._statsUrl
    }

    // stats_user - computed: false, optional: true, required: false
    private _statsUser?: string | undefined; 
    public get statsUser() {
      return this.getStringAttribute('stats_user');
    }
    public set statsUser(value: string | undefined) {
      this._statsUser = value;
    }
    public resetStatsUser() {
      this._statsUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statsUserInput() {
      return this._statsUser
    }

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksHaproxyLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksHaproxyLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        healthcheck_method: cdktf.stringToTerraform(this._healthcheckMethod),
        healthcheck_url: cdktf.stringToTerraform(this._healthcheckUrl),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        name: cdktf.stringToTerraform(this._name),
        stack_id: cdktf.stringToTerraform(this._stackId),
        stats_enabled: cdktf.booleanToTerraform(this._statsEnabled),
        stats_password: cdktf.stringToTerraform(this._statsPassword),
        stats_url: cdktf.stringToTerraform(this._statsUrl),
        stats_user: cdktf.stringToTerraform(this._statsUser),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        ebs_volume: cdktf.listMapper(opsworksHaproxyLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#agent_version OpsworksInstance#agent_version}
    */
    readonly agentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ami_id OpsworksInstance#ami_id}
    */
    readonly amiId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#architecture OpsworksInstance#architecture}
    */
    readonly architecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#auto_scaling_type OpsworksInstance#auto_scaling_type}
    */
    readonly autoScalingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#availability_zone OpsworksInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#created_at OpsworksInstance#created_at}
    */
    readonly createdAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_ebs OpsworksInstance#delete_ebs}
    */
    readonly deleteEbs?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_eip OpsworksInstance#delete_eip}
    */
    readonly deleteEip?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ebs_optimized OpsworksInstance#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}
    */
    readonly ecsClusterArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#elastic_ip OpsworksInstance#elastic_ip}
    */
    readonly elasticIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#hostname OpsworksInstance#hostname}
    */
    readonly hostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#infrastructure_class OpsworksInstance#infrastructure_class}
    */
    readonly infrastructureClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#install_updates_on_boot OpsworksInstance#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#instance_profile_arn OpsworksInstance#instance_profile_arn}
    */
    readonly instanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#instance_type OpsworksInstance#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#last_service_error_id OpsworksInstance#last_service_error_id}
    */
    readonly lastServiceErrorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#layer_ids OpsworksInstance#layer_ids}
    */
    readonly layerIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#os OpsworksInstance#os}
    */
    readonly os?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#platform OpsworksInstance#platform}
    */
    readonly platform?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#private_dns OpsworksInstance#private_dns}
    */
    readonly privateDns?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#private_ip OpsworksInstance#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#public_dns OpsworksInstance#public_dns}
    */
    readonly publicDns?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#public_ip OpsworksInstance#public_ip}
    */
    readonly publicIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#registered_by OpsworksInstance#registered_by}
    */
    readonly registeredBy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_agent_version OpsworksInstance#reported_agent_version}
    */
    readonly reportedAgentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_os_family OpsworksInstance#reported_os_family}
    */
    readonly reportedOsFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_os_name OpsworksInstance#reported_os_name}
    */
    readonly reportedOsName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_os_version OpsworksInstance#reported_os_version}
    */
    readonly reportedOsVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#root_device_type OpsworksInstance#root_device_type}
    */
    readonly rootDeviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#root_device_volume_id OpsworksInstance#root_device_volume_id}
    */
    readonly rootDeviceVolumeId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#security_group_ids OpsworksInstance#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ssh_host_dsa_key_fingerprint OpsworksInstance#ssh_host_dsa_key_fingerprint}
    */
    readonly sshHostDsaKeyFingerprint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ssh_host_rsa_key_fingerprint OpsworksInstance#ssh_host_rsa_key_fingerprint}
    */
    readonly sshHostRsaKeyFingerprint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ssh_key_name OpsworksInstance#ssh_key_name}
    */
    readonly sshKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#stack_id OpsworksInstance#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#state OpsworksInstance#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#status OpsworksInstance#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#subnet_id OpsworksInstance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#tenancy OpsworksInstance#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#virtualization_type OpsworksInstance#virtualization_type}
    */
    readonly virtualizationType?: string;
    /**
    * ebs_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ebs_block_device OpsworksInstance#ebs_block_device}
    */
    readonly ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ephemeral_block_device OpsworksInstance#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[];
    /**
    * root_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#root_block_device OpsworksInstance#root_block_device}
    */
    readonly rootBlockDevice?: OpsworksInstanceRootBlockDevice[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#timeouts OpsworksInstance#timeouts}
    */
    readonly timeouts?: OpsworksInstanceTimeouts;
  }
  export interface OpsworksInstanceEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_on_termination OpsworksInstance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#device_name OpsworksInstance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#iops OpsworksInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#snapshot_id OpsworksInstance#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_size OpsworksInstance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_type OpsworksInstance#volume_type}
    */
    readonly volumeType?: string;
  }

  function opsworksInstanceEbsBlockDeviceToTerraform(struct?: OpsworksInstanceEbsBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      iops: cdktf.numberToTerraform(struct!.iops),
      snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export interface OpsworksInstanceEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#device_name OpsworksInstance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#virtual_name OpsworksInstance#virtual_name}
    */
    readonly virtualName: string;
  }

  function opsworksInstanceEphemeralBlockDeviceToTerraform(struct?: OpsworksInstanceEphemeralBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    }
  }

  export interface OpsworksInstanceRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_on_termination OpsworksInstance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#iops OpsworksInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_size OpsworksInstance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_type OpsworksInstance#volume_type}
    */
    readonly volumeType?: string;
  }

  function opsworksInstanceRootBlockDeviceToTerraform(struct?: OpsworksInstanceRootBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      iops: cdktf.numberToTerraform(struct!.iops),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export interface OpsworksInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#create OpsworksInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete OpsworksInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#update OpsworksInstance#update}
    */
    readonly update?: string;
  }

  function opsworksInstanceTimeoutsToTerraform(struct?: OpsworksInstanceTimeoutsOutputReference | OpsworksInstanceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class OpsworksInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
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

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance}
  */
  export class OpsworksInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._agentVersion = config.agentVersion;
      this._amiId = config.amiId;
      this._architecture = config.architecture;
      this._autoScalingType = config.autoScalingType;
      this._availabilityZone = config.availabilityZone;
      this._createdAt = config.createdAt;
      this._deleteEbs = config.deleteEbs;
      this._deleteEip = config.deleteEip;
      this._ebsOptimized = config.ebsOptimized;
      this._ecsClusterArn = config.ecsClusterArn;
      this._elasticIp = config.elasticIp;
      this._hostname = config.hostname;
      this._infrastructureClass = config.infrastructureClass;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceProfileArn = config.instanceProfileArn;
      this._instanceType = config.instanceType;
      this._lastServiceErrorId = config.lastServiceErrorId;
      this._layerIds = config.layerIds;
      this._os = config.os;
      this._platform = config.platform;
      this._privateDns = config.privateDns;
      this._privateIp = config.privateIp;
      this._publicDns = config.publicDns;
      this._publicIp = config.publicIp;
      this._registeredBy = config.registeredBy;
      this._reportedAgentVersion = config.reportedAgentVersion;
      this._reportedOsFamily = config.reportedOsFamily;
      this._reportedOsName = config.reportedOsName;
      this._reportedOsVersion = config.reportedOsVersion;
      this._rootDeviceType = config.rootDeviceType;
      this._rootDeviceVolumeId = config.rootDeviceVolumeId;
      this._securityGroupIds = config.securityGroupIds;
      this._sshHostDsaKeyFingerprint = config.sshHostDsaKeyFingerprint;
      this._sshHostRsaKeyFingerprint = config.sshHostRsaKeyFingerprint;
      this._sshKeyName = config.sshKeyName;
      this._stackId = config.stackId;
      this._state = config.state;
      this._status = config.status;
      this._subnetId = config.subnetId;
      this._tenancy = config.tenancy;
      this._virtualizationType = config.virtualizationType;
      this._ebsBlockDevice = config.ebsBlockDevice;
      this._ephemeralBlockDevice = config.ephemeralBlockDevice;
      this._rootBlockDevice = config.rootBlockDevice;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_version - computed: false, optional: true, required: false
    private _agentVersion?: string | undefined; 
    public get agentVersion() {
      return this.getStringAttribute('agent_version');
    }
    public set agentVersion(value: string | undefined) {
      this._agentVersion = value;
    }
    public resetAgentVersion() {
      this._agentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentVersionInput() {
      return this._agentVersion
    }

    // ami_id - computed: true, optional: true, required: false
    private _amiId?: string | undefined; 
    public get amiId() {
      return this.getStringAttribute('ami_id');
    }
    public set amiId(value: string | undefined) {
      this._amiId = value;
    }
    public resetAmiId() {
      this._amiId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiIdInput() {
      return this._amiId
    }

    // architecture - computed: false, optional: true, required: false
    private _architecture?: string | undefined; 
    public get architecture() {
      return this.getStringAttribute('architecture');
    }
    public set architecture(value: string | undefined) {
      this._architecture = value;
    }
    public resetArchitecture() {
      this._architecture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get architectureInput() {
      return this._architecture
    }

    // auto_scaling_type - computed: false, optional: true, required: false
    private _autoScalingType?: string | undefined; 
    public get autoScalingType() {
      return this.getStringAttribute('auto_scaling_type');
    }
    public set autoScalingType(value: string | undefined) {
      this._autoScalingType = value;
    }
    public resetAutoScalingType() {
      this._autoScalingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingTypeInput() {
      return this._autoScalingType
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // created_at - computed: true, optional: true, required: false
    private _createdAt?: string | undefined; 
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }
    public set createdAt(value: string | undefined) {
      this._createdAt = value;
    }
    public resetCreatedAt() {
      this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdAtInput() {
      return this._createdAt
    }

    // delete_ebs - computed: false, optional: true, required: false
    private _deleteEbs?: boolean | cdktf.IResolvable | undefined; 
    public get deleteEbs() {
      return this.getBooleanAttribute('delete_ebs') as any;
    }
    public set deleteEbs(value: boolean | cdktf.IResolvable | undefined) {
      this._deleteEbs = value;
    }
    public resetDeleteEbs() {
      this._deleteEbs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteEbsInput() {
      return this._deleteEbs
    }

    // delete_eip - computed: false, optional: true, required: false
    private _deleteEip?: boolean | cdktf.IResolvable | undefined; 
    public get deleteEip() {
      return this.getBooleanAttribute('delete_eip') as any;
    }
    public set deleteEip(value: boolean | cdktf.IResolvable | undefined) {
      this._deleteEip = value;
    }
    public resetDeleteEip() {
      this._deleteEip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteEipInput() {
      return this._deleteEip
    }

    // ebs_optimized - computed: false, optional: true, required: false
    private _ebsOptimized?: boolean | cdktf.IResolvable | undefined; 
    public get ebsOptimized() {
      return this.getBooleanAttribute('ebs_optimized') as any;
    }
    public set ebsOptimized(value: boolean | cdktf.IResolvable | undefined) {
      this._ebsOptimized = value;
    }
    public resetEbsOptimized() {
      this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptimizedInput() {
      return this._ebsOptimized
    }

    // ec2_instance_id - computed: true, optional: false, required: false
    public get ec2InstanceId() {
      return this.getStringAttribute('ec2_instance_id');
    }

    // ecs_cluster_arn - computed: true, optional: true, required: false
    private _ecsClusterArn?: string | undefined; 
    public get ecsClusterArn() {
      return this.getStringAttribute('ecs_cluster_arn');
    }
    public set ecsClusterArn(value: string | undefined) {
      this._ecsClusterArn = value;
    }
    public resetEcsClusterArn() {
      this._ecsClusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecsClusterArnInput() {
      return this._ecsClusterArn
    }

    // elastic_ip - computed: true, optional: true, required: false
    private _elasticIp?: string | undefined; 
    public get elasticIp() {
      return this.getStringAttribute('elastic_ip');
    }
    public set elasticIp(value: string | undefined) {
      this._elasticIp = value;
    }
    public resetElasticIp() {
      this._elasticIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticIpInput() {
      return this._elasticIp
    }

    // hostname - computed: true, optional: true, required: false
    private _hostname?: string | undefined; 
    public get hostname() {
      return this.getStringAttribute('hostname');
    }
    public set hostname(value: string | undefined) {
      this._hostname = value;
    }
    public resetHostname() {
      this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameInput() {
      return this._hostname
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // infrastructure_class - computed: true, optional: true, required: false
    private _infrastructureClass?: string | undefined; 
    public get infrastructureClass() {
      return this.getStringAttribute('infrastructure_class');
    }
    public set infrastructureClass(value: string | undefined) {
      this._infrastructureClass = value;
    }
    public resetInfrastructureClass() {
      this._infrastructureClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureClassInput() {
      return this._infrastructureClass
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_profile_arn - computed: true, optional: true, required: false
    private _instanceProfileArn?: string | undefined; 
    public get instanceProfileArn() {
      return this.getStringAttribute('instance_profile_arn');
    }
    public set instanceProfileArn(value: string | undefined) {
      this._instanceProfileArn = value;
    }
    public resetInstanceProfileArn() {
      this._instanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProfileArnInput() {
      return this._instanceProfileArn
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // last_service_error_id - computed: true, optional: true, required: false
    private _lastServiceErrorId?: string | undefined; 
    public get lastServiceErrorId() {
      return this.getStringAttribute('last_service_error_id');
    }
    public set lastServiceErrorId(value: string | undefined) {
      this._lastServiceErrorId = value;
    }
    public resetLastServiceErrorId() {
      this._lastServiceErrorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastServiceErrorIdInput() {
      return this._lastServiceErrorId
    }

    // layer_ids - computed: false, optional: false, required: true
    private _layerIds?: string[]; 
    public get layerIds() {
      return this.getListAttribute('layer_ids');
    }
    public set layerIds(value: string[]) {
      this._layerIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get layerIdsInput() {
      return this._layerIds
    }

    // os - computed: true, optional: true, required: false
    private _os?: string | undefined; 
    public get os() {
      return this.getStringAttribute('os');
    }
    public set os(value: string | undefined) {
      this._os = value;
    }
    public resetOs() {
      this._os = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get osInput() {
      return this._os
    }

    // platform - computed: true, optional: true, required: false
    private _platform?: string | undefined; 
    public get platform() {
      return this.getStringAttribute('platform');
    }
    public set platform(value: string | undefined) {
      this._platform = value;
    }
    public resetPlatform() {
      this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformInput() {
      return this._platform
    }

    // private_dns - computed: true, optional: true, required: false
    private _privateDns?: string | undefined; 
    public get privateDns() {
      return this.getStringAttribute('private_dns');
    }
    public set privateDns(value: string | undefined) {
      this._privateDns = value;
    }
    public resetPrivateDns() {
      this._privateDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsInput() {
      return this._privateDns
    }

    // private_ip - computed: true, optional: true, required: false
    private _privateIp?: string | undefined; 
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }
    public set privateIp(value: string | undefined) {
      this._privateIp = value;
    }
    public resetPrivateIp() {
      this._privateIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpInput() {
      return this._privateIp
    }

    // public_dns - computed: true, optional: true, required: false
    private _publicDns?: string | undefined; 
    public get publicDns() {
      return this.getStringAttribute('public_dns');
    }
    public set publicDns(value: string | undefined) {
      this._publicDns = value;
    }
    public resetPublicDns() {
      this._publicDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicDnsInput() {
      return this._publicDns
    }

    // public_ip - computed: true, optional: true, required: false
    private _publicIp?: string | undefined; 
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }
    public set publicIp(value: string | undefined) {
      this._publicIp = value;
    }
    public resetPublicIp() {
      this._publicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicIpInput() {
      return this._publicIp
    }

    // registered_by - computed: true, optional: true, required: false
    private _registeredBy?: string | undefined; 
    public get registeredBy() {
      return this.getStringAttribute('registered_by');
    }
    public set registeredBy(value: string | undefined) {
      this._registeredBy = value;
    }
    public resetRegisteredBy() {
      this._registeredBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registeredByInput() {
      return this._registeredBy
    }

    // reported_agent_version - computed: true, optional: true, required: false
    private _reportedAgentVersion?: string | undefined; 
    public get reportedAgentVersion() {
      return this.getStringAttribute('reported_agent_version');
    }
    public set reportedAgentVersion(value: string | undefined) {
      this._reportedAgentVersion = value;
    }
    public resetReportedAgentVersion() {
      this._reportedAgentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportedAgentVersionInput() {
      return this._reportedAgentVersion
    }

    // reported_os_family - computed: true, optional: true, required: false
    private _reportedOsFamily?: string | undefined; 
    public get reportedOsFamily() {
      return this.getStringAttribute('reported_os_family');
    }
    public set reportedOsFamily(value: string | undefined) {
      this._reportedOsFamily = value;
    }
    public resetReportedOsFamily() {
      this._reportedOsFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportedOsFamilyInput() {
      return this._reportedOsFamily
    }

    // reported_os_name - computed: true, optional: true, required: false
    private _reportedOsName?: string | undefined; 
    public get reportedOsName() {
      return this.getStringAttribute('reported_os_name');
    }
    public set reportedOsName(value: string | undefined) {
      this._reportedOsName = value;
    }
    public resetReportedOsName() {
      this._reportedOsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportedOsNameInput() {
      return this._reportedOsName
    }

    // reported_os_version - computed: true, optional: true, required: false
    private _reportedOsVersion?: string | undefined; 
    public get reportedOsVersion() {
      return this.getStringAttribute('reported_os_version');
    }
    public set reportedOsVersion(value: string | undefined) {
      this._reportedOsVersion = value;
    }
    public resetReportedOsVersion() {
      this._reportedOsVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportedOsVersionInput() {
      return this._reportedOsVersion
    }

    // root_device_type - computed: true, optional: true, required: false
    private _rootDeviceType?: string | undefined; 
    public get rootDeviceType() {
      return this.getStringAttribute('root_device_type');
    }
    public set rootDeviceType(value: string | undefined) {
      this._rootDeviceType = value;
    }
    public resetRootDeviceType() {
      this._rootDeviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDeviceTypeInput() {
      return this._rootDeviceType
    }

    // root_device_volume_id - computed: true, optional: true, required: false
    private _rootDeviceVolumeId?: string | undefined; 
    public get rootDeviceVolumeId() {
      return this.getStringAttribute('root_device_volume_id');
    }
    public set rootDeviceVolumeId(value: string | undefined) {
      this._rootDeviceVolumeId = value;
    }
    public resetRootDeviceVolumeId() {
      this._rootDeviceVolumeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDeviceVolumeIdInput() {
      return this._rootDeviceVolumeId
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // ssh_host_dsa_key_fingerprint - computed: true, optional: true, required: false
    private _sshHostDsaKeyFingerprint?: string | undefined; 
    public get sshHostDsaKeyFingerprint() {
      return this.getStringAttribute('ssh_host_dsa_key_fingerprint');
    }
    public set sshHostDsaKeyFingerprint(value: string | undefined) {
      this._sshHostDsaKeyFingerprint = value;
    }
    public resetSshHostDsaKeyFingerprint() {
      this._sshHostDsaKeyFingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sshHostDsaKeyFingerprintInput() {
      return this._sshHostDsaKeyFingerprint
    }

    // ssh_host_rsa_key_fingerprint - computed: true, optional: true, required: false
    private _sshHostRsaKeyFingerprint?: string | undefined; 
    public get sshHostRsaKeyFingerprint() {
      return this.getStringAttribute('ssh_host_rsa_key_fingerprint');
    }
    public set sshHostRsaKeyFingerprint(value: string | undefined) {
      this._sshHostRsaKeyFingerprint = value;
    }
    public resetSshHostRsaKeyFingerprint() {
      this._sshHostRsaKeyFingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sshHostRsaKeyFingerprintInput() {
      return this._sshHostRsaKeyFingerprint
    }

    // ssh_key_name - computed: true, optional: true, required: false
    private _sshKeyName?: string | undefined; 
    public get sshKeyName() {
      return this.getStringAttribute('ssh_key_name');
    }
    public set sshKeyName(value: string | undefined) {
      this._sshKeyName = value;
    }
    public resetSshKeyName() {
      this._sshKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sshKeyNameInput() {
      return this._sshKeyName
    }

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // state - computed: false, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
    }

    // status - computed: true, optional: true, required: false
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // tenancy - computed: true, optional: true, required: false
    private _tenancy?: string | undefined; 
    public get tenancy() {
      return this.getStringAttribute('tenancy');
    }
    public set tenancy(value: string | undefined) {
      this._tenancy = value;
    }
    public resetTenancy() {
      this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyInput() {
      return this._tenancy
    }

    // virtualization_type - computed: true, optional: true, required: false
    private _virtualizationType?: string | undefined; 
    public get virtualizationType() {
      return this.getStringAttribute('virtualization_type');
    }
    public set virtualizationType(value: string | undefined) {
      this._virtualizationType = value;
    }
    public resetVirtualizationType() {
      this._virtualizationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualizationTypeInput() {
      return this._virtualizationType
    }

    // ebs_block_device - computed: false, optional: true, required: false
    private _ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[] | undefined; 
    public get ebsBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_block_device') as any;
    }
    public set ebsBlockDevice(value: OpsworksInstanceEbsBlockDevice[] | undefined) {
      this._ebsBlockDevice = value;
    }
    public resetEbsBlockDevice() {
      this._ebsBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsBlockDeviceInput() {
      return this._ebsBlockDevice
    }

    // ephemeral_block_device - computed: false, optional: true, required: false
    private _ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[] | undefined; 
    public get ephemeralBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ephemeral_block_device') as any;
    }
    public set ephemeralBlockDevice(value: OpsworksInstanceEphemeralBlockDevice[] | undefined) {
      this._ephemeralBlockDevice = value;
    }
    public resetEphemeralBlockDevice() {
      this._ephemeralBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralBlockDeviceInput() {
      return this._ephemeralBlockDevice
    }

    // root_block_device - computed: false, optional: true, required: false
    private _rootBlockDevice?: OpsworksInstanceRootBlockDevice[] | undefined; 
    public get rootBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('root_block_device') as any;
    }
    public set rootBlockDevice(value: OpsworksInstanceRootBlockDevice[] | undefined) {
      this._rootBlockDevice = value;
    }
    public resetRootBlockDevice() {
      this._rootBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootBlockDeviceInput() {
      return this._rootBlockDevice
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: OpsworksInstanceTimeouts | undefined; 
    private __timeoutsOutput = new OpsworksInstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: OpsworksInstanceTimeouts | undefined) {
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
        agent_version: cdktf.stringToTerraform(this._agentVersion),
        ami_id: cdktf.stringToTerraform(this._amiId),
        architecture: cdktf.stringToTerraform(this._architecture),
        auto_scaling_type: cdktf.stringToTerraform(this._autoScalingType),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        created_at: cdktf.stringToTerraform(this._createdAt),
        delete_ebs: cdktf.booleanToTerraform(this._deleteEbs),
        delete_eip: cdktf.booleanToTerraform(this._deleteEip),
        ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
        ecs_cluster_arn: cdktf.stringToTerraform(this._ecsClusterArn),
        elastic_ip: cdktf.stringToTerraform(this._elasticIp),
        hostname: cdktf.stringToTerraform(this._hostname),
        infrastructure_class: cdktf.stringToTerraform(this._infrastructureClass),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        last_service_error_id: cdktf.stringToTerraform(this._lastServiceErrorId),
        layer_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._layerIds),
        os: cdktf.stringToTerraform(this._os),
        platform: cdktf.stringToTerraform(this._platform),
        private_dns: cdktf.stringToTerraform(this._privateDns),
        private_ip: cdktf.stringToTerraform(this._privateIp),
        public_dns: cdktf.stringToTerraform(this._publicDns),
        public_ip: cdktf.stringToTerraform(this._publicIp),
        registered_by: cdktf.stringToTerraform(this._registeredBy),
        reported_agent_version: cdktf.stringToTerraform(this._reportedAgentVersion),
        reported_os_family: cdktf.stringToTerraform(this._reportedOsFamily),
        reported_os_name: cdktf.stringToTerraform(this._reportedOsName),
        reported_os_version: cdktf.stringToTerraform(this._reportedOsVersion),
        root_device_type: cdktf.stringToTerraform(this._rootDeviceType),
        root_device_volume_id: cdktf.stringToTerraform(this._rootDeviceVolumeId),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        ssh_host_dsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostDsaKeyFingerprint),
        ssh_host_rsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostRsaKeyFingerprint),
        ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
        stack_id: cdktf.stringToTerraform(this._stackId),
        state: cdktf.stringToTerraform(this._state),
        status: cdktf.stringToTerraform(this._status),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tenancy: cdktf.stringToTerraform(this._tenancy),
        virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
        ebs_block_device: cdktf.listMapper(opsworksInstanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
        ephemeral_block_device: cdktf.listMapper(opsworksInstanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
        root_block_device: cdktf.listMapper(opsworksInstanceRootBlockDeviceToTerraform)(this._rootBlockDevice),
        timeouts: opsworksInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface OpsworksJavaAppLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#app_server OpsworksJavaAppLayer#app_server}
    */
    readonly appServer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#app_server_version OpsworksJavaAppLayer#app_server_version}
    */
    readonly appServerVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#auto_assign_elastic_ips OpsworksJavaAppLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#auto_assign_public_ips OpsworksJavaAppLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#auto_healing OpsworksJavaAppLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#custom_configure_recipes OpsworksJavaAppLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#custom_deploy_recipes OpsworksJavaAppLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#custom_instance_profile_arn OpsworksJavaAppLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#custom_json OpsworksJavaAppLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#custom_security_group_ids OpsworksJavaAppLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#custom_setup_recipes OpsworksJavaAppLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#custom_shutdown_recipes OpsworksJavaAppLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#custom_undeploy_recipes OpsworksJavaAppLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#drain_elb_on_shutdown OpsworksJavaAppLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#elastic_load_balancer OpsworksJavaAppLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#install_updates_on_boot OpsworksJavaAppLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#instance_shutdown_timeout OpsworksJavaAppLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#jvm_options OpsworksJavaAppLayer#jvm_options}
    */
    readonly jvmOptions?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#jvm_type OpsworksJavaAppLayer#jvm_type}
    */
    readonly jvmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#jvm_version OpsworksJavaAppLayer#jvm_version}
    */
    readonly jvmVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#name OpsworksJavaAppLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#stack_id OpsworksJavaAppLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#system_packages OpsworksJavaAppLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#tags OpsworksJavaAppLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#tags_all OpsworksJavaAppLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#use_ebs_optimized_instances OpsworksJavaAppLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#ebs_volume OpsworksJavaAppLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksJavaAppLayerEbsVolume[];
  }
  export interface OpsworksJavaAppLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#encrypted OpsworksJavaAppLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#iops OpsworksJavaAppLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#mount_point OpsworksJavaAppLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#number_of_disks OpsworksJavaAppLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#raid_level OpsworksJavaAppLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#size OpsworksJavaAppLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html#type OpsworksJavaAppLayer#type}
    */
    readonly type?: string;
  }

  function opsworksJavaAppLayerEbsVolumeToTerraform(struct?: OpsworksJavaAppLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html aws_opsworks_java_app_layer}
  */
  export class OpsworksJavaAppLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_java_app_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html aws_opsworks_java_app_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksJavaAppLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksJavaAppLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_java_app_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._appServer = config.appServer;
      this._appServerVersion = config.appServerVersion;
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._jvmOptions = config.jvmOptions;
      this._jvmType = config.jvmType;
      this._jvmVersion = config.jvmVersion;
      this._name = config.name;
      this._stackId = config.stackId;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_server - computed: false, optional: true, required: false
    private _appServer?: string | undefined; 
    public get appServer() {
      return this.getStringAttribute('app_server');
    }
    public set appServer(value: string | undefined) {
      this._appServer = value;
    }
    public resetAppServer() {
      this._appServer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appServerInput() {
      return this._appServer
    }

    // app_server_version - computed: false, optional: true, required: false
    private _appServerVersion?: string | undefined; 
    public get appServerVersion() {
      return this.getStringAttribute('app_server_version');
    }
    public set appServerVersion(value: string | undefined) {
      this._appServerVersion = value;
    }
    public resetAppServerVersion() {
      this._appServerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appServerVersionInput() {
      return this._appServerVersion
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
    }

    // jvm_options - computed: false, optional: true, required: false
    private _jvmOptions?: string | undefined; 
    public get jvmOptions() {
      return this.getStringAttribute('jvm_options');
    }
    public set jvmOptions(value: string | undefined) {
      this._jvmOptions = value;
    }
    public resetJvmOptions() {
      this._jvmOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jvmOptionsInput() {
      return this._jvmOptions
    }

    // jvm_type - computed: false, optional: true, required: false
    private _jvmType?: string | undefined; 
    public get jvmType() {
      return this.getStringAttribute('jvm_type');
    }
    public set jvmType(value: string | undefined) {
      this._jvmType = value;
    }
    public resetJvmType() {
      this._jvmType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jvmTypeInput() {
      return this._jvmType
    }

    // jvm_version - computed: false, optional: true, required: false
    private _jvmVersion?: string | undefined; 
    public get jvmVersion() {
      return this.getStringAttribute('jvm_version');
    }
    public set jvmVersion(value: string | undefined) {
      this._jvmVersion = value;
    }
    public resetJvmVersion() {
      this._jvmVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jvmVersionInput() {
      return this._jvmVersion
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

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksJavaAppLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksJavaAppLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        app_server: cdktf.stringToTerraform(this._appServer),
        app_server_version: cdktf.stringToTerraform(this._appServerVersion),
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        jvm_options: cdktf.stringToTerraform(this._jvmOptions),
        jvm_type: cdktf.stringToTerraform(this._jvmType),
        jvm_version: cdktf.stringToTerraform(this._jvmVersion),
        name: cdktf.stringToTerraform(this._name),
        stack_id: cdktf.stringToTerraform(this._stackId),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        ebs_volume: cdktf.listMapper(opsworksJavaAppLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksMemcachedLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#allocated_memory OpsworksMemcachedLayer#allocated_memory}
    */
    readonly allocatedMemory?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#auto_healing OpsworksMemcachedLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_json OpsworksMemcachedLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#name OpsworksMemcachedLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#stack_id OpsworksMemcachedLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#system_packages OpsworksMemcachedLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#tags OpsworksMemcachedLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#tags_all OpsworksMemcachedLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#ebs_volume OpsworksMemcachedLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksMemcachedLayerEbsVolume[];
  }
  export interface OpsworksMemcachedLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#encrypted OpsworksMemcachedLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#iops OpsworksMemcachedLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#mount_point OpsworksMemcachedLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#number_of_disks OpsworksMemcachedLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#raid_level OpsworksMemcachedLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#size OpsworksMemcachedLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#type OpsworksMemcachedLayer#type}
    */
    readonly type?: string;
  }

  function opsworksMemcachedLayerEbsVolumeToTerraform(struct?: OpsworksMemcachedLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html aws_opsworks_memcached_layer}
  */
  export class OpsworksMemcachedLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_memcached_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html aws_opsworks_memcached_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksMemcachedLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksMemcachedLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_memcached_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allocatedMemory = config.allocatedMemory;
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._name = config.name;
      this._stackId = config.stackId;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_memory - computed: false, optional: true, required: false
    private _allocatedMemory?: number | undefined; 
    public get allocatedMemory() {
      return this.getNumberAttribute('allocated_memory');
    }
    public set allocatedMemory(value: number | undefined) {
      this._allocatedMemory = value;
    }
    public resetAllocatedMemory() {
      this._allocatedMemory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocatedMemoryInput() {
      return this._allocatedMemory
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
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

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksMemcachedLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksMemcachedLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allocated_memory: cdktf.numberToTerraform(this._allocatedMemory),
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        name: cdktf.stringToTerraform(this._name),
        stack_id: cdktf.stringToTerraform(this._stackId),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        ebs_volume: cdktf.listMapper(opsworksMemcachedLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksMysqlLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#auto_healing OpsworksMysqlLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#custom_json OpsworksMysqlLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#name OpsworksMysqlLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#root_password OpsworksMysqlLayer#root_password}
    */
    readonly rootPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}
    */
    readonly rootPasswordOnAllInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#stack_id OpsworksMysqlLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#system_packages OpsworksMysqlLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#tags OpsworksMysqlLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#tags_all OpsworksMysqlLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#ebs_volume OpsworksMysqlLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksMysqlLayerEbsVolume[];
  }
  export interface OpsworksMysqlLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#encrypted OpsworksMysqlLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#iops OpsworksMysqlLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#mount_point OpsworksMysqlLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#number_of_disks OpsworksMysqlLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#raid_level OpsworksMysqlLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#size OpsworksMysqlLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html#type OpsworksMysqlLayer#type}
    */
    readonly type?: string;
  }

  function opsworksMysqlLayerEbsVolumeToTerraform(struct?: OpsworksMysqlLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html aws_opsworks_mysql_layer}
  */
  export class OpsworksMysqlLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_mysql_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html aws_opsworks_mysql_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksMysqlLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksMysqlLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_mysql_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._name = config.name;
      this._rootPassword = config.rootPassword;
      this._rootPasswordOnAllInstances = config.rootPasswordOnAllInstances;
      this._stackId = config.stackId;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
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

    // root_password - computed: false, optional: true, required: false
    private _rootPassword?: string | undefined; 
    public get rootPassword() {
      return this.getStringAttribute('root_password');
    }
    public set rootPassword(value: string | undefined) {
      this._rootPassword = value;
    }
    public resetRootPassword() {
      this._rootPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootPasswordInput() {
      return this._rootPassword
    }

    // root_password_on_all_instances - computed: false, optional: true, required: false
    private _rootPasswordOnAllInstances?: boolean | cdktf.IResolvable | undefined; 
    public get rootPasswordOnAllInstances() {
      return this.getBooleanAttribute('root_password_on_all_instances') as any;
    }
    public set rootPasswordOnAllInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._rootPasswordOnAllInstances = value;
    }
    public resetRootPasswordOnAllInstances() {
      this._rootPasswordOnAllInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootPasswordOnAllInstancesInput() {
      return this._rootPasswordOnAllInstances
    }

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksMysqlLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksMysqlLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        name: cdktf.stringToTerraform(this._name),
        root_password: cdktf.stringToTerraform(this._rootPassword),
        root_password_on_all_instances: cdktf.booleanToTerraform(this._rootPasswordOnAllInstances),
        stack_id: cdktf.stringToTerraform(this._stackId),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        ebs_volume: cdktf.listMapper(opsworksMysqlLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksNodejsAppLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#auto_assign_elastic_ips OpsworksNodejsAppLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#auto_assign_public_ips OpsworksNodejsAppLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#auto_healing OpsworksNodejsAppLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_configure_recipes OpsworksNodejsAppLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_deploy_recipes OpsworksNodejsAppLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_instance_profile_arn OpsworksNodejsAppLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_json OpsworksNodejsAppLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_security_group_ids OpsworksNodejsAppLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_setup_recipes OpsworksNodejsAppLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_shutdown_recipes OpsworksNodejsAppLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#custom_undeploy_recipes OpsworksNodejsAppLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#drain_elb_on_shutdown OpsworksNodejsAppLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#elastic_load_balancer OpsworksNodejsAppLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#install_updates_on_boot OpsworksNodejsAppLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#instance_shutdown_timeout OpsworksNodejsAppLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#name OpsworksNodejsAppLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#nodejs_version OpsworksNodejsAppLayer#nodejs_version}
    */
    readonly nodejsVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#stack_id OpsworksNodejsAppLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#system_packages OpsworksNodejsAppLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#tags OpsworksNodejsAppLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#tags_all OpsworksNodejsAppLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#use_ebs_optimized_instances OpsworksNodejsAppLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#ebs_volume OpsworksNodejsAppLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksNodejsAppLayerEbsVolume[];
  }
  export interface OpsworksNodejsAppLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#encrypted OpsworksNodejsAppLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#iops OpsworksNodejsAppLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#mount_point OpsworksNodejsAppLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#number_of_disks OpsworksNodejsAppLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#raid_level OpsworksNodejsAppLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#size OpsworksNodejsAppLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html#type OpsworksNodejsAppLayer#type}
    */
    readonly type?: string;
  }

  function opsworksNodejsAppLayerEbsVolumeToTerraform(struct?: OpsworksNodejsAppLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html aws_opsworks_nodejs_app_layer}
  */
  export class OpsworksNodejsAppLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_nodejs_app_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html aws_opsworks_nodejs_app_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksNodejsAppLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksNodejsAppLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_nodejs_app_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._name = config.name;
      this._nodejsVersion = config.nodejsVersion;
      this._stackId = config.stackId;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
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

    // nodejs_version - computed: false, optional: true, required: false
    private _nodejsVersion?: string | undefined; 
    public get nodejsVersion() {
      return this.getStringAttribute('nodejs_version');
    }
    public set nodejsVersion(value: string | undefined) {
      this._nodejsVersion = value;
    }
    public resetNodejsVersion() {
      this._nodejsVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodejsVersionInput() {
      return this._nodejsVersion
    }

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksNodejsAppLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksNodejsAppLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        name: cdktf.stringToTerraform(this._name),
        nodejs_version: cdktf.stringToTerraform(this._nodejsVersion),
        stack_id: cdktf.stringToTerraform(this._stackId),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        ebs_volume: cdktf.listMapper(opsworksNodejsAppLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#allow_ssh OpsworksPermission#allow_ssh}
    */
    readonly allowSsh?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#allow_sudo OpsworksPermission#allow_sudo}
    */
    readonly allowSudo?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#level OpsworksPermission#level}
    */
    readonly level?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#stack_id OpsworksPermission#stack_id}
    */
    readonly stackId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#user_arn OpsworksPermission#user_arn}
    */
    readonly userArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html aws_opsworks_permission}
  */
  export class OpsworksPermission extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_permission";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html aws_opsworks_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksPermissionConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksPermissionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_permission',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowSsh = config.allowSsh;
      this._allowSudo = config.allowSudo;
      this._level = config.level;
      this._stackId = config.stackId;
      this._userArn = config.userArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_ssh - computed: true, optional: true, required: false
    private _allowSsh?: boolean | cdktf.IResolvable | undefined; 
    public get allowSsh() {
      return this.getBooleanAttribute('allow_ssh') as any;
    }
    public set allowSsh(value: boolean | cdktf.IResolvable | undefined) {
      this._allowSsh = value;
    }
    public resetAllowSsh() {
      this._allowSsh = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowSshInput() {
      return this._allowSsh
    }

    // allow_sudo - computed: true, optional: true, required: false
    private _allowSudo?: boolean | cdktf.IResolvable | undefined; 
    public get allowSudo() {
      return this.getBooleanAttribute('allow_sudo') as any;
    }
    public set allowSudo(value: boolean | cdktf.IResolvable | undefined) {
      this._allowSudo = value;
    }
    public resetAllowSudo() {
      this._allowSudo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowSudoInput() {
      return this._allowSudo
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // level - computed: true, optional: true, required: false
    private _level?: string | undefined; 
    public get level() {
      return this.getStringAttribute('level');
    }
    public set level(value: string | undefined) {
      this._level = value;
    }
    public resetLevel() {
      this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
      return this._level
    }

    // stack_id - computed: true, optional: true, required: false
    private _stackId?: string | undefined; 
    public get stackId() {
      return this.getStringAttribute('stack_id');
    }
    public set stackId(value: string | undefined) {
      this._stackId = value;
    }
    public resetStackId() {
      this._stackId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackIdInput() {
      return this._stackId
    }

    // user_arn - computed: false, optional: false, required: true
    private _userArn?: string; 
    public get userArn() {
      return this.getStringAttribute('user_arn');
    }
    public set userArn(value: string) {
      this._userArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userArnInput() {
      return this._userArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allow_ssh: cdktf.booleanToTerraform(this._allowSsh),
        allow_sudo: cdktf.booleanToTerraform(this._allowSudo),
        level: cdktf.stringToTerraform(this._level),
        stack_id: cdktf.stringToTerraform(this._stackId),
        user_arn: cdktf.stringToTerraform(this._userArn),
      };
    }
  }
  export interface OpsworksPhpAppLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#auto_assign_elastic_ips OpsworksPhpAppLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#auto_assign_public_ips OpsworksPhpAppLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#auto_healing OpsworksPhpAppLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_configure_recipes OpsworksPhpAppLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_deploy_recipes OpsworksPhpAppLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_instance_profile_arn OpsworksPhpAppLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_json OpsworksPhpAppLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_security_group_ids OpsworksPhpAppLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_setup_recipes OpsworksPhpAppLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_shutdown_recipes OpsworksPhpAppLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_undeploy_recipes OpsworksPhpAppLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#drain_elb_on_shutdown OpsworksPhpAppLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#elastic_load_balancer OpsworksPhpAppLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#install_updates_on_boot OpsworksPhpAppLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#instance_shutdown_timeout OpsworksPhpAppLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#name OpsworksPhpAppLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#stack_id OpsworksPhpAppLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#system_packages OpsworksPhpAppLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#tags OpsworksPhpAppLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#tags_all OpsworksPhpAppLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#use_ebs_optimized_instances OpsworksPhpAppLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#ebs_volume OpsworksPhpAppLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksPhpAppLayerEbsVolume[];
  }
  export interface OpsworksPhpAppLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#encrypted OpsworksPhpAppLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#iops OpsworksPhpAppLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#mount_point OpsworksPhpAppLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#number_of_disks OpsworksPhpAppLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#raid_level OpsworksPhpAppLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#size OpsworksPhpAppLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#type OpsworksPhpAppLayer#type}
    */
    readonly type?: string;
  }

  function opsworksPhpAppLayerEbsVolumeToTerraform(struct?: OpsworksPhpAppLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html aws_opsworks_php_app_layer}
  */
  export class OpsworksPhpAppLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_php_app_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html aws_opsworks_php_app_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksPhpAppLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksPhpAppLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_php_app_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._name = config.name;
      this._stackId = config.stackId;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
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

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksPhpAppLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksPhpAppLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        name: cdktf.stringToTerraform(this._name),
        stack_id: cdktf.stringToTerraform(this._stackId),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        ebs_volume: cdktf.listMapper(opsworksPhpAppLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksRailsAppLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#app_server OpsworksRailsAppLayer#app_server}
    */
    readonly appServer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#auto_healing OpsworksRailsAppLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#bundler_version OpsworksRailsAppLayer#bundler_version}
    */
    readonly bundlerVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#custom_json OpsworksRailsAppLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#manage_bundler OpsworksRailsAppLayer#manage_bundler}
    */
    readonly manageBundler?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#name OpsworksRailsAppLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#passenger_version OpsworksRailsAppLayer#passenger_version}
    */
    readonly passengerVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#ruby_version OpsworksRailsAppLayer#ruby_version}
    */
    readonly rubyVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#rubygems_version OpsworksRailsAppLayer#rubygems_version}
    */
    readonly rubygemsVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#stack_id OpsworksRailsAppLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#system_packages OpsworksRailsAppLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#tags OpsworksRailsAppLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#tags_all OpsworksRailsAppLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#ebs_volume OpsworksRailsAppLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksRailsAppLayerEbsVolume[];
  }
  export interface OpsworksRailsAppLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#encrypted OpsworksRailsAppLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#iops OpsworksRailsAppLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#mount_point OpsworksRailsAppLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#number_of_disks OpsworksRailsAppLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#raid_level OpsworksRailsAppLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#size OpsworksRailsAppLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html#type OpsworksRailsAppLayer#type}
    */
    readonly type?: string;
  }

  function opsworksRailsAppLayerEbsVolumeToTerraform(struct?: OpsworksRailsAppLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html aws_opsworks_rails_app_layer}
  */
  export class OpsworksRailsAppLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_rails_app_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html aws_opsworks_rails_app_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksRailsAppLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksRailsAppLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_rails_app_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._appServer = config.appServer;
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._bundlerVersion = config.bundlerVersion;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._manageBundler = config.manageBundler;
      this._name = config.name;
      this._passengerVersion = config.passengerVersion;
      this._rubyVersion = config.rubyVersion;
      this._rubygemsVersion = config.rubygemsVersion;
      this._stackId = config.stackId;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_server - computed: false, optional: true, required: false
    private _appServer?: string | undefined; 
    public get appServer() {
      return this.getStringAttribute('app_server');
    }
    public set appServer(value: string | undefined) {
      this._appServer = value;
    }
    public resetAppServer() {
      this._appServer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appServerInput() {
      return this._appServer
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // bundler_version - computed: false, optional: true, required: false
    private _bundlerVersion?: string | undefined; 
    public get bundlerVersion() {
      return this.getStringAttribute('bundler_version');
    }
    public set bundlerVersion(value: string | undefined) {
      this._bundlerVersion = value;
    }
    public resetBundlerVersion() {
      this._bundlerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bundlerVersionInput() {
      return this._bundlerVersion
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
    }

    // manage_bundler - computed: false, optional: true, required: false
    private _manageBundler?: boolean | cdktf.IResolvable | undefined; 
    public get manageBundler() {
      return this.getBooleanAttribute('manage_bundler') as any;
    }
    public set manageBundler(value: boolean | cdktf.IResolvable | undefined) {
      this._manageBundler = value;
    }
    public resetManageBundler() {
      this._manageBundler = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manageBundlerInput() {
      return this._manageBundler
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

    // passenger_version - computed: false, optional: true, required: false
    private _passengerVersion?: string | undefined; 
    public get passengerVersion() {
      return this.getStringAttribute('passenger_version');
    }
    public set passengerVersion(value: string | undefined) {
      this._passengerVersion = value;
    }
    public resetPassengerVersion() {
      this._passengerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passengerVersionInput() {
      return this._passengerVersion
    }

    // ruby_version - computed: false, optional: true, required: false
    private _rubyVersion?: string | undefined; 
    public get rubyVersion() {
      return this.getStringAttribute('ruby_version');
    }
    public set rubyVersion(value: string | undefined) {
      this._rubyVersion = value;
    }
    public resetRubyVersion() {
      this._rubyVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rubyVersionInput() {
      return this._rubyVersion
    }

    // rubygems_version - computed: false, optional: true, required: false
    private _rubygemsVersion?: string | undefined; 
    public get rubygemsVersion() {
      return this.getStringAttribute('rubygems_version');
    }
    public set rubygemsVersion(value: string | undefined) {
      this._rubygemsVersion = value;
    }
    public resetRubygemsVersion() {
      this._rubygemsVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rubygemsVersionInput() {
      return this._rubygemsVersion
    }

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksRailsAppLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksRailsAppLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        app_server: cdktf.stringToTerraform(this._appServer),
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        bundler_version: cdktf.stringToTerraform(this._bundlerVersion),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        manage_bundler: cdktf.booleanToTerraform(this._manageBundler),
        name: cdktf.stringToTerraform(this._name),
        passenger_version: cdktf.stringToTerraform(this._passengerVersion),
        ruby_version: cdktf.stringToTerraform(this._rubyVersion),
        rubygems_version: cdktf.stringToTerraform(this._rubygemsVersion),
        stack_id: cdktf.stringToTerraform(this._stackId),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        ebs_volume: cdktf.listMapper(opsworksRailsAppLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksRdsDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html#db_password OpsworksRdsDbInstance#db_password}
    */
    readonly dbPassword: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html#db_user OpsworksRdsDbInstance#db_user}
    */
    readonly dbUser: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html#rds_db_instance_arn OpsworksRdsDbInstance#rds_db_instance_arn}
    */
    readonly rdsDbInstanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html#stack_id OpsworksRdsDbInstance#stack_id}
    */
    readonly stackId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html aws_opsworks_rds_db_instance}
  */
  export class OpsworksRdsDbInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_rds_db_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html aws_opsworks_rds_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksRdsDbInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksRdsDbInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_rds_db_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dbPassword = config.dbPassword;
      this._dbUser = config.dbUser;
      this._rdsDbInstanceArn = config.rdsDbInstanceArn;
      this._stackId = config.stackId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // db_password - computed: false, optional: false, required: true
    private _dbPassword?: string; 
    public get dbPassword() {
      return this.getStringAttribute('db_password');
    }
    public set dbPassword(value: string) {
      this._dbPassword = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbPasswordInput() {
      return this._dbPassword
    }

    // db_user - computed: false, optional: false, required: true
    private _dbUser?: string; 
    public get dbUser() {
      return this.getStringAttribute('db_user');
    }
    public set dbUser(value: string) {
      this._dbUser = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbUserInput() {
      return this._dbUser
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // rds_db_instance_arn - computed: false, optional: false, required: true
    private _rdsDbInstanceArn?: string; 
    public get rdsDbInstanceArn() {
      return this.getStringAttribute('rds_db_instance_arn');
    }
    public set rdsDbInstanceArn(value: string) {
      this._rdsDbInstanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsDbInstanceArnInput() {
      return this._rdsDbInstanceArn
    }

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        db_password: cdktf.stringToTerraform(this._dbPassword),
        db_user: cdktf.stringToTerraform(this._dbUser),
        rds_db_instance_arn: cdktf.stringToTerraform(this._rdsDbInstanceArn),
        stack_id: cdktf.stringToTerraform(this._stackId),
      };
    }
  }
  export interface OpsworksStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#agent_version OpsworksStack#agent_version}
    */
    readonly agentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#berkshelf_version OpsworksStack#berkshelf_version}
    */
    readonly berkshelfVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#color OpsworksStack#color}
    */
    readonly color?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#configuration_manager_name OpsworksStack#configuration_manager_name}
    */
    readonly configurationManagerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#configuration_manager_version OpsworksStack#configuration_manager_version}
    */
    readonly configurationManagerVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#custom_json OpsworksStack#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_availability_zone OpsworksStack#default_availability_zone}
    */
    readonly defaultAvailabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}
    */
    readonly defaultInstanceProfileArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_os OpsworksStack#default_os}
    */
    readonly defaultOs?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_root_device_type OpsworksStack#default_root_device_type}
    */
    readonly defaultRootDeviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_ssh_key_name OpsworksStack#default_ssh_key_name}
    */
    readonly defaultSshKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_subnet_id OpsworksStack#default_subnet_id}
    */
    readonly defaultSubnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#hostname_theme OpsworksStack#hostname_theme}
    */
    readonly hostnameTheme?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#manage_berkshelf OpsworksStack#manage_berkshelf}
    */
    readonly manageBerkshelf?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#name OpsworksStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#region OpsworksStack#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#service_role_arn OpsworksStack#service_role_arn}
    */
    readonly serviceRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#tags OpsworksStack#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#tags_all OpsworksStack#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}
    */
    readonly useCustomCookbooks?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}
    */
    readonly useOpsworksSecurityGroups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#vpc_id OpsworksStack#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * custom_cookbooks_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}
    */
    readonly customCookbooksSource?: OpsworksStackCustomCookbooksSource[];
  }
  export interface OpsworksStackCustomCookbooksSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#password OpsworksStack#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#revision OpsworksStack#revision}
    */
    readonly revision?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#ssh_key OpsworksStack#ssh_key}
    */
    readonly sshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#type OpsworksStack#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#url OpsworksStack#url}
    */
    readonly url: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#username OpsworksStack#username}
    */
    readonly username?: string;
  }

  function opsworksStackCustomCookbooksSourceToTerraform(struct?: OpsworksStackCustomCookbooksSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      password: cdktf.stringToTerraform(struct!.password),
      revision: cdktf.stringToTerraform(struct!.revision),
      ssh_key: cdktf.stringToTerraform(struct!.sshKey),
      type: cdktf.stringToTerraform(struct!.type),
      url: cdktf.stringToTerraform(struct!.url),
      username: cdktf.stringToTerraform(struct!.username),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack}
  */
  export class OpsworksStack extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_stack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksStackConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksStackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_stack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._agentVersion = config.agentVersion;
      this._berkshelfVersion = config.berkshelfVersion;
      this._color = config.color;
      this._configurationManagerName = config.configurationManagerName;
      this._configurationManagerVersion = config.configurationManagerVersion;
      this._customJson = config.customJson;
      this._defaultAvailabilityZone = config.defaultAvailabilityZone;
      this._defaultInstanceProfileArn = config.defaultInstanceProfileArn;
      this._defaultOs = config.defaultOs;
      this._defaultRootDeviceType = config.defaultRootDeviceType;
      this._defaultSshKeyName = config.defaultSshKeyName;
      this._defaultSubnetId = config.defaultSubnetId;
      this._hostnameTheme = config.hostnameTheme;
      this._manageBerkshelf = config.manageBerkshelf;
      this._name = config.name;
      this._region = config.region;
      this._serviceRoleArn = config.serviceRoleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useCustomCookbooks = config.useCustomCookbooks;
      this._useOpsworksSecurityGroups = config.useOpsworksSecurityGroups;
      this._vpcId = config.vpcId;
      this._customCookbooksSource = config.customCookbooksSource;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_version - computed: true, optional: true, required: false
    private _agentVersion?: string | undefined; 
    public get agentVersion() {
      return this.getStringAttribute('agent_version');
    }
    public set agentVersion(value: string | undefined) {
      this._agentVersion = value;
    }
    public resetAgentVersion() {
      this._agentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentVersionInput() {
      return this._agentVersion
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // berkshelf_version - computed: false, optional: true, required: false
    private _berkshelfVersion?: string | undefined; 
    public get berkshelfVersion() {
      return this.getStringAttribute('berkshelf_version');
    }
    public set berkshelfVersion(value: string | undefined) {
      this._berkshelfVersion = value;
    }
    public resetBerkshelfVersion() {
      this._berkshelfVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get berkshelfVersionInput() {
      return this._berkshelfVersion
    }

    // color - computed: false, optional: true, required: false
    private _color?: string | undefined; 
    public get color() {
      return this.getStringAttribute('color');
    }
    public set color(value: string | undefined) {
      this._color = value;
    }
    public resetColor() {
      this._color = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get colorInput() {
      return this._color
    }

    // configuration_manager_name - computed: false, optional: true, required: false
    private _configurationManagerName?: string | undefined; 
    public get configurationManagerName() {
      return this.getStringAttribute('configuration_manager_name');
    }
    public set configurationManagerName(value: string | undefined) {
      this._configurationManagerName = value;
    }
    public resetConfigurationManagerName() {
      this._configurationManagerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationManagerNameInput() {
      return this._configurationManagerName
    }

    // configuration_manager_version - computed: false, optional: true, required: false
    private _configurationManagerVersion?: string | undefined; 
    public get configurationManagerVersion() {
      return this.getStringAttribute('configuration_manager_version');
    }
    public set configurationManagerVersion(value: string | undefined) {
      this._configurationManagerVersion = value;
    }
    public resetConfigurationManagerVersion() {
      this._configurationManagerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationManagerVersionInput() {
      return this._configurationManagerVersion
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // default_availability_zone - computed: true, optional: true, required: false
    private _defaultAvailabilityZone?: string | undefined; 
    public get defaultAvailabilityZone() {
      return this.getStringAttribute('default_availability_zone');
    }
    public set defaultAvailabilityZone(value: string | undefined) {
      this._defaultAvailabilityZone = value;
    }
    public resetDefaultAvailabilityZone() {
      this._defaultAvailabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultAvailabilityZoneInput() {
      return this._defaultAvailabilityZone
    }

    // default_instance_profile_arn - computed: false, optional: false, required: true
    private _defaultInstanceProfileArn?: string; 
    public get defaultInstanceProfileArn() {
      return this.getStringAttribute('default_instance_profile_arn');
    }
    public set defaultInstanceProfileArn(value: string) {
      this._defaultInstanceProfileArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInstanceProfileArnInput() {
      return this._defaultInstanceProfileArn
    }

    // default_os - computed: false, optional: true, required: false
    private _defaultOs?: string | undefined; 
    public get defaultOs() {
      return this.getStringAttribute('default_os');
    }
    public set defaultOs(value: string | undefined) {
      this._defaultOs = value;
    }
    public resetDefaultOs() {
      this._defaultOs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultOsInput() {
      return this._defaultOs
    }

    // default_root_device_type - computed: false, optional: true, required: false
    private _defaultRootDeviceType?: string | undefined; 
    public get defaultRootDeviceType() {
      return this.getStringAttribute('default_root_device_type');
    }
    public set defaultRootDeviceType(value: string | undefined) {
      this._defaultRootDeviceType = value;
    }
    public resetDefaultRootDeviceType() {
      this._defaultRootDeviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRootDeviceTypeInput() {
      return this._defaultRootDeviceType
    }

    // default_ssh_key_name - computed: false, optional: true, required: false
    private _defaultSshKeyName?: string | undefined; 
    public get defaultSshKeyName() {
      return this.getStringAttribute('default_ssh_key_name');
    }
    public set defaultSshKeyName(value: string | undefined) {
      this._defaultSshKeyName = value;
    }
    public resetDefaultSshKeyName() {
      this._defaultSshKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultSshKeyNameInput() {
      return this._defaultSshKeyName
    }

    // default_subnet_id - computed: true, optional: true, required: false
    private _defaultSubnetId?: string | undefined; 
    public get defaultSubnetId() {
      return this.getStringAttribute('default_subnet_id');
    }
    public set defaultSubnetId(value: string | undefined) {
      this._defaultSubnetId = value;
    }
    public resetDefaultSubnetId() {
      this._defaultSubnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultSubnetIdInput() {
      return this._defaultSubnetId
    }

    // hostname_theme - computed: false, optional: true, required: false
    private _hostnameTheme?: string | undefined; 
    public get hostnameTheme() {
      return this.getStringAttribute('hostname_theme');
    }
    public set hostnameTheme(value: string | undefined) {
      this._hostnameTheme = value;
    }
    public resetHostnameTheme() {
      this._hostnameTheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameThemeInput() {
      return this._hostnameTheme
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // manage_berkshelf - computed: false, optional: true, required: false
    private _manageBerkshelf?: boolean | cdktf.IResolvable | undefined; 
    public get manageBerkshelf() {
      return this.getBooleanAttribute('manage_berkshelf') as any;
    }
    public set manageBerkshelf(value: boolean | cdktf.IResolvable | undefined) {
      this._manageBerkshelf = value;
    }
    public resetManageBerkshelf() {
      this._manageBerkshelf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manageBerkshelfInput() {
      return this._manageBerkshelf
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

    // region - computed: false, optional: false, required: true
    private _region?: string; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string) {
      this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // service_role_arn - computed: false, optional: false, required: true
    private _serviceRoleArn?: string; 
    public get serviceRoleArn() {
      return this.getStringAttribute('service_role_arn');
    }
    public set serviceRoleArn(value: string) {
      this._serviceRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleArnInput() {
      return this._serviceRoleArn
    }

    // stack_endpoint - computed: true, optional: false, required: false
    public get stackEndpoint() {
      return this.getStringAttribute('stack_endpoint');
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

    // use_custom_cookbooks - computed: false, optional: true, required: false
    private _useCustomCookbooks?: boolean | cdktf.IResolvable | undefined; 
    public get useCustomCookbooks() {
      return this.getBooleanAttribute('use_custom_cookbooks') as any;
    }
    public set useCustomCookbooks(value: boolean | cdktf.IResolvable | undefined) {
      this._useCustomCookbooks = value;
    }
    public resetUseCustomCookbooks() {
      this._useCustomCookbooks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useCustomCookbooksInput() {
      return this._useCustomCookbooks
    }

    // use_opsworks_security_groups - computed: false, optional: true, required: false
    private _useOpsworksSecurityGroups?: boolean | cdktf.IResolvable | undefined; 
    public get useOpsworksSecurityGroups() {
      return this.getBooleanAttribute('use_opsworks_security_groups') as any;
    }
    public set useOpsworksSecurityGroups(value: boolean | cdktf.IResolvable | undefined) {
      this._useOpsworksSecurityGroups = value;
    }
    public resetUseOpsworksSecurityGroups() {
      this._useOpsworksSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useOpsworksSecurityGroupsInput() {
      return this._useOpsworksSecurityGroups
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
      this._vpcId = value;
    }
    public resetVpcId() {
      this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // custom_cookbooks_source - computed: false, optional: true, required: false
    private _customCookbooksSource?: OpsworksStackCustomCookbooksSource[] | undefined; 
    public get customCookbooksSource() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('custom_cookbooks_source') as any;
    }
    public set customCookbooksSource(value: OpsworksStackCustomCookbooksSource[] | undefined) {
      this._customCookbooksSource = value;
    }
    public resetCustomCookbooksSource() {
      this._customCookbooksSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customCookbooksSourceInput() {
      return this._customCookbooksSource
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        agent_version: cdktf.stringToTerraform(this._agentVersion),
        berkshelf_version: cdktf.stringToTerraform(this._berkshelfVersion),
        color: cdktf.stringToTerraform(this._color),
        configuration_manager_name: cdktf.stringToTerraform(this._configurationManagerName),
        configuration_manager_version: cdktf.stringToTerraform(this._configurationManagerVersion),
        custom_json: cdktf.stringToTerraform(this._customJson),
        default_availability_zone: cdktf.stringToTerraform(this._defaultAvailabilityZone),
        default_instance_profile_arn: cdktf.stringToTerraform(this._defaultInstanceProfileArn),
        default_os: cdktf.stringToTerraform(this._defaultOs),
        default_root_device_type: cdktf.stringToTerraform(this._defaultRootDeviceType),
        default_ssh_key_name: cdktf.stringToTerraform(this._defaultSshKeyName),
        default_subnet_id: cdktf.stringToTerraform(this._defaultSubnetId),
        hostname_theme: cdktf.stringToTerraform(this._hostnameTheme),
        manage_berkshelf: cdktf.booleanToTerraform(this._manageBerkshelf),
        name: cdktf.stringToTerraform(this._name),
        region: cdktf.stringToTerraform(this._region),
        service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_custom_cookbooks: cdktf.booleanToTerraform(this._useCustomCookbooks),
        use_opsworks_security_groups: cdktf.booleanToTerraform(this._useOpsworksSecurityGroups),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        custom_cookbooks_source: cdktf.listMapper(opsworksStackCustomCookbooksSourceToTerraform)(this._customCookbooksSource),
      };
    }
  }
  export interface OpsworksStaticWebLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#auto_assign_elastic_ips OpsworksStaticWebLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#auto_assign_public_ips OpsworksStaticWebLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#auto_healing OpsworksStaticWebLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#custom_configure_recipes OpsworksStaticWebLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#custom_deploy_recipes OpsworksStaticWebLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#custom_instance_profile_arn OpsworksStaticWebLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#custom_json OpsworksStaticWebLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#custom_security_group_ids OpsworksStaticWebLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#custom_setup_recipes OpsworksStaticWebLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#custom_shutdown_recipes OpsworksStaticWebLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#custom_undeploy_recipes OpsworksStaticWebLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#drain_elb_on_shutdown OpsworksStaticWebLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#elastic_load_balancer OpsworksStaticWebLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#install_updates_on_boot OpsworksStaticWebLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#instance_shutdown_timeout OpsworksStaticWebLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#name OpsworksStaticWebLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#stack_id OpsworksStaticWebLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#system_packages OpsworksStaticWebLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#tags OpsworksStaticWebLayer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#tags_all OpsworksStaticWebLayer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#use_ebs_optimized_instances OpsworksStaticWebLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * ebs_volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#ebs_volume OpsworksStaticWebLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksStaticWebLayerEbsVolume[];
  }
  export interface OpsworksStaticWebLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#encrypted OpsworksStaticWebLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#iops OpsworksStaticWebLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#mount_point OpsworksStaticWebLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#number_of_disks OpsworksStaticWebLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#raid_level OpsworksStaticWebLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#size OpsworksStaticWebLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html#type OpsworksStaticWebLayer#type}
    */
    readonly type?: string;
  }

  function opsworksStaticWebLayerEbsVolumeToTerraform(struct?: OpsworksStaticWebLayerEbsVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
      raid_level: cdktf.stringToTerraform(struct!.raidLevel),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html aws_opsworks_static_web_layer}
  */
  export class OpsworksStaticWebLayer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_static_web_layer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html aws_opsworks_static_web_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksStaticWebLayerConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksStaticWebLayerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_static_web_layer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoAssignElasticIps = config.autoAssignElasticIps;
      this._autoAssignPublicIps = config.autoAssignPublicIps;
      this._autoHealing = config.autoHealing;
      this._customConfigureRecipes = config.customConfigureRecipes;
      this._customDeployRecipes = config.customDeployRecipes;
      this._customInstanceProfileArn = config.customInstanceProfileArn;
      this._customJson = config.customJson;
      this._customSecurityGroupIds = config.customSecurityGroupIds;
      this._customSetupRecipes = config.customSetupRecipes;
      this._customShutdownRecipes = config.customShutdownRecipes;
      this._customUndeployRecipes = config.customUndeployRecipes;
      this._drainElbOnShutdown = config.drainElbOnShutdown;
      this._elasticLoadBalancer = config.elasticLoadBalancer;
      this._installUpdatesOnBoot = config.installUpdatesOnBoot;
      this._instanceShutdownTimeout = config.instanceShutdownTimeout;
      this._name = config.name;
      this._stackId = config.stackId;
      this._systemPackages = config.systemPackages;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
      this._ebsVolume = config.ebsVolume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_assign_elastic_ips - computed: false, optional: true, required: false
    private _autoAssignElasticIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignElasticIps() {
      return this.getBooleanAttribute('auto_assign_elastic_ips') as any;
    }
    public set autoAssignElasticIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignElasticIps = value;
    }
    public resetAutoAssignElasticIps() {
      this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignElasticIpsInput() {
      return this._autoAssignElasticIps
    }

    // auto_assign_public_ips - computed: false, optional: true, required: false
    private _autoAssignPublicIps?: boolean | cdktf.IResolvable | undefined; 
    public get autoAssignPublicIps() {
      return this.getBooleanAttribute('auto_assign_public_ips') as any;
    }
    public set autoAssignPublicIps(value: boolean | cdktf.IResolvable | undefined) {
      this._autoAssignPublicIps = value;
    }
    public resetAutoAssignPublicIps() {
      this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAssignPublicIpsInput() {
      return this._autoAssignPublicIps
    }

    // auto_healing - computed: false, optional: true, required: false
    private _autoHealing?: boolean | cdktf.IResolvable | undefined; 
    public get autoHealing() {
      return this.getBooleanAttribute('auto_healing') as any;
    }
    public set autoHealing(value: boolean | cdktf.IResolvable | undefined) {
      this._autoHealing = value;
    }
    public resetAutoHealing() {
      this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoHealingInput() {
      return this._autoHealing
    }

    // custom_configure_recipes - computed: false, optional: true, required: false
    private _customConfigureRecipes?: string[] | undefined; 
    public get customConfigureRecipes() {
      return this.getListAttribute('custom_configure_recipes');
    }
    public set customConfigureRecipes(value: string[] | undefined) {
      this._customConfigureRecipes = value;
    }
    public resetCustomConfigureRecipes() {
      this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigureRecipesInput() {
      return this._customConfigureRecipes
    }

    // custom_deploy_recipes - computed: false, optional: true, required: false
    private _customDeployRecipes?: string[] | undefined; 
    public get customDeployRecipes() {
      return this.getListAttribute('custom_deploy_recipes');
    }
    public set customDeployRecipes(value: string[] | undefined) {
      this._customDeployRecipes = value;
    }
    public resetCustomDeployRecipes() {
      this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDeployRecipesInput() {
      return this._customDeployRecipes
    }

    // custom_instance_profile_arn - computed: false, optional: true, required: false
    private _customInstanceProfileArn?: string | undefined; 
    public get customInstanceProfileArn() {
      return this.getStringAttribute('custom_instance_profile_arn');
    }
    public set customInstanceProfileArn(value: string | undefined) {
      this._customInstanceProfileArn = value;
    }
    public resetCustomInstanceProfileArn() {
      this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInstanceProfileArnInput() {
      return this._customInstanceProfileArn
    }

    // custom_json - computed: false, optional: true, required: false
    private _customJson?: string | undefined; 
    public get customJson() {
      return this.getStringAttribute('custom_json');
    }
    public set customJson(value: string | undefined) {
      this._customJson = value;
    }
    public resetCustomJson() {
      this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJsonInput() {
      return this._customJson
    }

    // custom_security_group_ids - computed: false, optional: true, required: false
    private _customSecurityGroupIds?: string[] | undefined; 
    public get customSecurityGroupIds() {
      return this.getListAttribute('custom_security_group_ids');
    }
    public set customSecurityGroupIds(value: string[] | undefined) {
      this._customSecurityGroupIds = value;
    }
    public resetCustomSecurityGroupIds() {
      this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecurityGroupIdsInput() {
      return this._customSecurityGroupIds
    }

    // custom_setup_recipes - computed: false, optional: true, required: false
    private _customSetupRecipes?: string[] | undefined; 
    public get customSetupRecipes() {
      return this.getListAttribute('custom_setup_recipes');
    }
    public set customSetupRecipes(value: string[] | undefined) {
      this._customSetupRecipes = value;
    }
    public resetCustomSetupRecipes() {
      this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSetupRecipesInput() {
      return this._customSetupRecipes
    }

    // custom_shutdown_recipes - computed: false, optional: true, required: false
    private _customShutdownRecipes?: string[] | undefined; 
    public get customShutdownRecipes() {
      return this.getListAttribute('custom_shutdown_recipes');
    }
    public set customShutdownRecipes(value: string[] | undefined) {
      this._customShutdownRecipes = value;
    }
    public resetCustomShutdownRecipes() {
      this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customShutdownRecipesInput() {
      return this._customShutdownRecipes
    }

    // custom_undeploy_recipes - computed: false, optional: true, required: false
    private _customUndeployRecipes?: string[] | undefined; 
    public get customUndeployRecipes() {
      return this.getListAttribute('custom_undeploy_recipes');
    }
    public set customUndeployRecipes(value: string[] | undefined) {
      this._customUndeployRecipes = value;
    }
    public resetCustomUndeployRecipes() {
      this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customUndeployRecipesInput() {
      return this._customUndeployRecipes
    }

    // drain_elb_on_shutdown - computed: false, optional: true, required: false
    private _drainElbOnShutdown?: boolean | cdktf.IResolvable | undefined; 
    public get drainElbOnShutdown() {
      return this.getBooleanAttribute('drain_elb_on_shutdown') as any;
    }
    public set drainElbOnShutdown(value: boolean | cdktf.IResolvable | undefined) {
      this._drainElbOnShutdown = value;
    }
    public resetDrainElbOnShutdown() {
      this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainElbOnShutdownInput() {
      return this._drainElbOnShutdown
    }

    // elastic_load_balancer - computed: false, optional: true, required: false
    private _elasticLoadBalancer?: string | undefined; 
    public get elasticLoadBalancer() {
      return this.getStringAttribute('elastic_load_balancer');
    }
    public set elasticLoadBalancer(value: string | undefined) {
      this._elasticLoadBalancer = value;
    }
    public resetElasticLoadBalancer() {
      this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancerInput() {
      return this._elasticLoadBalancer
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // install_updates_on_boot - computed: false, optional: true, required: false
    private _installUpdatesOnBoot?: boolean | cdktf.IResolvable | undefined; 
    public get installUpdatesOnBoot() {
      return this.getBooleanAttribute('install_updates_on_boot') as any;
    }
    public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable | undefined) {
      this._installUpdatesOnBoot = value;
    }
    public resetInstallUpdatesOnBoot() {
      this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installUpdatesOnBootInput() {
      return this._installUpdatesOnBoot
    }

    // instance_shutdown_timeout - computed: false, optional: true, required: false
    private _instanceShutdownTimeout?: number | undefined; 
    public get instanceShutdownTimeout() {
      return this.getNumberAttribute('instance_shutdown_timeout');
    }
    public set instanceShutdownTimeout(value: number | undefined) {
      this._instanceShutdownTimeout = value;
    }
    public resetInstanceShutdownTimeout() {
      this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceShutdownTimeoutInput() {
      return this._instanceShutdownTimeout
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

    // stack_id - computed: false, optional: false, required: true
    private _stackId?: string; 
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

    // system_packages - computed: false, optional: true, required: false
    private _systemPackages?: string[] | undefined; 
    public get systemPackages() {
      return this.getListAttribute('system_packages');
    }
    public set systemPackages(value: string[] | undefined) {
      this._systemPackages = value;
    }
    public resetSystemPackages() {
      this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemPackagesInput() {
      return this._systemPackages
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

    // use_ebs_optimized_instances - computed: false, optional: true, required: false
    private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable | undefined; 
    public get useEbsOptimizedInstances() {
      return this.getBooleanAttribute('use_ebs_optimized_instances') as any;
    }
    public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._useEbsOptimizedInstances = value;
    }
    public resetUseEbsOptimizedInstances() {
      this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useEbsOptimizedInstancesInput() {
      return this._useEbsOptimizedInstances
    }

    // ebs_volume - computed: false, optional: true, required: false
    private _ebsVolume?: OpsworksStaticWebLayerEbsVolume[] | undefined; 
    public get ebsVolume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_volume') as any;
    }
    public set ebsVolume(value: OpsworksStaticWebLayerEbsVolume[] | undefined) {
      this._ebsVolume = value;
    }
    public resetEbsVolume() {
      this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeInput() {
      return this._ebsVolume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
        auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
        auto_healing: cdktf.booleanToTerraform(this._autoHealing),
        custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
        custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
        custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
        custom_json: cdktf.stringToTerraform(this._customJson),
        custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
        custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
        custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
        custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
        drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
        elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
        install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
        instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
        name: cdktf.stringToTerraform(this._name),
        stack_id: cdktf.stringToTerraform(this._stackId),
        system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
        ebs_volume: cdktf.listMapper(opsworksStaticWebLayerEbsVolumeToTerraform)(this._ebsVolume),
      };
    }
  }
  export interface OpsworksUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html#allow_self_management OpsworksUserProfile#allow_self_management}
    */
    readonly allowSelfManagement?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html#ssh_public_key OpsworksUserProfile#ssh_public_key}
    */
    readonly sshPublicKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html#ssh_username OpsworksUserProfile#ssh_username}
    */
    readonly sshUsername: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html#user_arn OpsworksUserProfile#user_arn}
    */
    readonly userArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html aws_opsworks_user_profile}
  */
  export class OpsworksUserProfile extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_opsworks_user_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html aws_opsworks_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksUserProfileConfig
    */
    public constructor(scope: Construct, id: string, config: OpsworksUserProfileConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_opsworks_user_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowSelfManagement = config.allowSelfManagement;
      this._sshPublicKey = config.sshPublicKey;
      this._sshUsername = config.sshUsername;
      this._userArn = config.userArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_self_management - computed: false, optional: true, required: false
    private _allowSelfManagement?: boolean | cdktf.IResolvable | undefined; 
    public get allowSelfManagement() {
      return this.getBooleanAttribute('allow_self_management') as any;
    }
    public set allowSelfManagement(value: boolean | cdktf.IResolvable | undefined) {
      this._allowSelfManagement = value;
    }
    public resetAllowSelfManagement() {
      this._allowSelfManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowSelfManagementInput() {
      return this._allowSelfManagement
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ssh_public_key - computed: false, optional: true, required: false
    private _sshPublicKey?: string | undefined; 
    public get sshPublicKey() {
      return this.getStringAttribute('ssh_public_key');
    }
    public set sshPublicKey(value: string | undefined) {
      this._sshPublicKey = value;
    }
    public resetSshPublicKey() {
      this._sshPublicKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sshPublicKeyInput() {
      return this._sshPublicKey
    }

    // ssh_username - computed: false, optional: false, required: true
    private _sshUsername?: string; 
    public get sshUsername() {
      return this.getStringAttribute('ssh_username');
    }
    public set sshUsername(value: string) {
      this._sshUsername = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sshUsernameInput() {
      return this._sshUsername
    }

    // user_arn - computed: false, optional: false, required: true
    private _userArn?: string; 
    public get userArn() {
      return this.getStringAttribute('user_arn');
    }
    public set userArn(value: string) {
      this._userArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userArnInput() {
      return this._userArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allow_self_management: cdktf.booleanToTerraform(this._allowSelfManagement),
        ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
        ssh_username: cdktf.stringToTerraform(this._sshUsername),
        user_arn: cdktf.stringToTerraform(this._userArn),
      };
    }
  }
}
