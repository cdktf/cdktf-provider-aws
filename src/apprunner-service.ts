// https://www.terraform.io/docs/providers/aws/r/apprunner_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApprunnerServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}
  */
  readonly autoScalingConfigurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#service_name ApprunnerService#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#tags ApprunnerService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#tags_all ApprunnerService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#encryption_configuration ApprunnerService#encryption_configuration}
  */
  readonly encryptionConfiguration?: ApprunnerServiceEncryptionConfiguration[];
  /**
  * health_check_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#health_check_configuration ApprunnerService#health_check_configuration}
  */
  readonly healthCheckConfiguration?: ApprunnerServiceHealthCheckConfiguration[];
  /**
  * instance_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#instance_configuration ApprunnerService#instance_configuration}
  */
  readonly instanceConfiguration?: ApprunnerServiceInstanceConfiguration[];
  /**
  * source_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#source_configuration ApprunnerService#source_configuration}
  */
  readonly sourceConfiguration: ApprunnerServiceSourceConfiguration[];
}
export interface ApprunnerServiceEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#kms_key ApprunnerService#kms_key}
  */
  readonly kmsKey: string;
}

function apprunnerServiceEncryptionConfigurationToTerraform(struct?: ApprunnerServiceEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export interface ApprunnerServiceHealthCheckConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#healthy_threshold ApprunnerService#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#interval ApprunnerService#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#path ApprunnerService#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#protocol ApprunnerService#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#timeout ApprunnerService#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#unhealthy_threshold ApprunnerService#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

function apprunnerServiceHealthCheckConfigurationToTerraform(struct?: ApprunnerServiceHealthCheckConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}

export interface ApprunnerServiceInstanceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#cpu ApprunnerService#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#instance_role_arn ApprunnerService#instance_role_arn}
  */
  readonly instanceRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#memory ApprunnerService#memory}
  */
  readonly memory?: string;
}

function apprunnerServiceInstanceConfigurationToTerraform(struct?: ApprunnerServiceInstanceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    instance_role_arn: cdktf.stringToTerraform(struct!.instanceRoleArn),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ApprunnerServiceSourceConfigurationAuthenticationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#access_role_arn ApprunnerService#access_role_arn}
  */
  readonly accessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#connection_arn ApprunnerService#connection_arn}
  */
  readonly connectionArn?: string;
}

function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_role_arn: cdktf.stringToTerraform(struct!.accessRoleArn),
    connection_arn: cdktf.stringToTerraform(struct!.connectionArn),
  }
}

export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#build_command ApprunnerService#build_command}
  */
  readonly buildCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#port ApprunnerService#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#runtime ApprunnerService#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#runtime_environment_variables ApprunnerService#runtime_environment_variables}
  */
  readonly runtimeEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#start_command ApprunnerService#start_command}
  */
  readonly startCommand?: string;
}

function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    port: cdktf.stringToTerraform(struct!.port),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    runtime_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktf.stringToTerraform(struct!.startCommand),
  }
}

export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#configuration_source ApprunnerService#configuration_source}
  */
  readonly configurationSource: string;
  /**
  * code_configuration_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#code_configuration_values ApprunnerService#code_configuration_values}
  */
  readonly codeConfigurationValues?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues[];
}

function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    configuration_source: cdktf.stringToTerraform(struct!.configurationSource),
    code_configuration_values: cdktf.listMapper(apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform)(struct!.codeConfigurationValues),
  }
}

export interface ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#type ApprunnerService#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#value ApprunnerService#value}
  */
  readonly value: string;
}

function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApprunnerServiceSourceConfigurationCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#repository_url ApprunnerService#repository_url}
  */
  readonly repositoryUrl: string;
  /**
  * code_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#code_configuration ApprunnerService#code_configuration}
  */
  readonly codeConfiguration?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration[];
  /**
  * source_code_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#source_code_version ApprunnerService#source_code_version}
  */
  readonly sourceCodeVersion: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion[];
}

function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    code_configuration: cdktf.listMapper(apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform)(struct!.codeConfiguration),
    source_code_version: cdktf.listMapper(apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform)(struct!.sourceCodeVersion),
  }
}

export interface ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#port ApprunnerService#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#runtime_environment_variables ApprunnerService#runtime_environment_variables}
  */
  readonly runtimeEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#start_command ApprunnerService#start_command}
  */
  readonly startCommand?: string;
}

function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    runtime_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktf.stringToTerraform(struct!.startCommand),
  }
}

export interface ApprunnerServiceSourceConfigurationImageRepository {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_identifier ApprunnerService#image_identifier}
  */
  readonly imageIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_repository_type ApprunnerService#image_repository_type}
  */
  readonly imageRepositoryType: string;
  /**
  * image_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_configuration ApprunnerService#image_configuration}
  */
  readonly imageConfiguration?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration[];
}

function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_identifier: cdktf.stringToTerraform(struct!.imageIdentifier),
    image_repository_type: cdktf.stringToTerraform(struct!.imageRepositoryType),
    image_configuration: cdktf.listMapper(apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform)(struct!.imageConfiguration),
  }
}

export interface ApprunnerServiceSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}
  */
  readonly autoDeploymentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * authentication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#authentication_configuration ApprunnerService#authentication_configuration}
  */
  readonly authenticationConfiguration?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration[];
  /**
  * code_repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#code_repository ApprunnerService#code_repository}
  */
  readonly codeRepository?: ApprunnerServiceSourceConfigurationCodeRepository[];
  /**
  * image_repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_repository ApprunnerService#image_repository}
  */
  readonly imageRepository?: ApprunnerServiceSourceConfigurationImageRepository[];
}

function apprunnerServiceSourceConfigurationToTerraform(struct?: ApprunnerServiceSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_deployments_enabled: cdktf.booleanToTerraform(struct!.autoDeploymentsEnabled),
    authentication_configuration: cdktf.listMapper(apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform)(struct!.authenticationConfiguration),
    code_repository: cdktf.listMapper(apprunnerServiceSourceConfigurationCodeRepositoryToTerraform)(struct!.codeRepository),
    image_repository: cdktf.listMapper(apprunnerServiceSourceConfigurationImageRepositoryToTerraform)(struct!.imageRepository),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service}
*/
export class ApprunnerService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_apprunner_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_service',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
    this._serviceName = config.serviceName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._encryptionConfiguration = config.encryptionConfiguration;
    this._healthCheckConfiguration = config.healthCheckConfiguration;
    this._instanceConfiguration = config.instanceConfiguration;
    this._sourceConfiguration = config.sourceConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_scaling_configuration_arn - computed: true, optional: true, required: false
  private _autoScalingConfigurationArn?: string;
  public get autoScalingConfigurationArn() {
    return this.getStringAttribute('auto_scaling_configuration_arn');
  }
  public set autoScalingConfigurationArn(value: string) {
    this._autoScalingConfigurationArn = value;
  }
  public resetAutoScalingConfigurationArn() {
    this._autoScalingConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigurationArnInput() {
    return this._autoScalingConfigurationArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration?: ApprunnerServiceEncryptionConfiguration[];
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }
  public set encryptionConfiguration(value: ApprunnerServiceEncryptionConfiguration[] ) {
    this._encryptionConfiguration = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration
  }

  // health_check_configuration - computed: false, optional: true, required: false
  private _healthCheckConfiguration?: ApprunnerServiceHealthCheckConfiguration[];
  public get healthCheckConfiguration() {
    return this.interpolationForAttribute('health_check_configuration') as any;
  }
  public set healthCheckConfiguration(value: ApprunnerServiceHealthCheckConfiguration[] ) {
    this._healthCheckConfiguration = value;
  }
  public resetHealthCheckConfiguration() {
    this._healthCheckConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigurationInput() {
    return this._healthCheckConfiguration
  }

  // instance_configuration - computed: false, optional: true, required: false
  private _instanceConfiguration?: ApprunnerServiceInstanceConfiguration[];
  public get instanceConfiguration() {
    return this.interpolationForAttribute('instance_configuration') as any;
  }
  public set instanceConfiguration(value: ApprunnerServiceInstanceConfiguration[] ) {
    this._instanceConfiguration = value;
  }
  public resetInstanceConfiguration() {
    this._instanceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationInput() {
    return this._instanceConfiguration
  }

  // source_configuration - computed: false, optional: false, required: true
  private _sourceConfiguration: ApprunnerServiceSourceConfiguration[];
  public get sourceConfiguration() {
    return this.interpolationForAttribute('source_configuration') as any;
  }
  public set sourceConfiguration(value: ApprunnerServiceSourceConfiguration[]) {
    this._sourceConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_configuration_arn: cdktf.stringToTerraform(this._autoScalingConfigurationArn),
      service_name: cdktf.stringToTerraform(this._serviceName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      encryption_configuration: cdktf.listMapper(apprunnerServiceEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
      health_check_configuration: cdktf.listMapper(apprunnerServiceHealthCheckConfigurationToTerraform)(this._healthCheckConfiguration),
      instance_configuration: cdktf.listMapper(apprunnerServiceInstanceConfigurationToTerraform)(this._instanceConfiguration),
      source_configuration: cdktf.listMapper(apprunnerServiceSourceConfigurationToTerraform)(this._sourceConfiguration),
    };
  }
}
