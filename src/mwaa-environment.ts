// https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwaaEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}
  */
  readonly airflowConfigurationOptions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#airflow_version MwaaEnvironment#airflow_version}
  */
  readonly airflowVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#dag_s3_path MwaaEnvironment#dag_s3_path}
  */
  readonly dagS3Path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#environment_class MwaaEnvironment#environment_class}
  */
  readonly environmentClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#execution_role_arn MwaaEnvironment#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#kms_key MwaaEnvironment#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#max_workers MwaaEnvironment#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#min_workers MwaaEnvironment#min_workers}
  */
  readonly minWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#name MwaaEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}
  */
  readonly pluginsS3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#plugins_s3_path MwaaEnvironment#plugins_s3_path}
  */
  readonly pluginsS3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}
  */
  readonly requirementsS3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#requirements_s3_path MwaaEnvironment#requirements_s3_path}
  */
  readonly requirementsS3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#source_bucket_arn MwaaEnvironment#source_bucket_arn}
  */
  readonly sourceBucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#tags MwaaEnvironment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#tags_all MwaaEnvironment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#webserver_access_mode MwaaEnvironment#webserver_access_mode}
  */
  readonly webserverAccessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}
  */
  readonly weeklyMaintenanceWindowStart?: string;
  /**
  * logging_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#logging_configuration MwaaEnvironment#logging_configuration}
  */
  readonly loggingConfiguration?: MwaaEnvironmentLoggingConfiguration[];
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#network_configuration MwaaEnvironment#network_configuration}
  */
  readonly networkConfiguration: MwaaEnvironmentNetworkConfiguration[];
}
export class MwaaEnvironmentLastUpdatedError extends cdktf.ComplexComputedList {

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}
export class MwaaEnvironmentLastUpdated extends cdktf.ComplexComputedList {

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.interpolationForAttribute('error') as any;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface MwaaEnvironmentLoggingConfigurationDagProcessingLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfigurationSchedulerLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationSchedulerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfigurationTaskLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationTaskLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfigurationWebserverLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWebserverLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfigurationWorkerLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWorkerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfiguration {
  /**
  * dag_processing_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#dag_processing_logs MwaaEnvironment#dag_processing_logs}
  */
  readonly dagProcessingLogs?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs[];
  /**
  * scheduler_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#scheduler_logs MwaaEnvironment#scheduler_logs}
  */
  readonly schedulerLogs?: MwaaEnvironmentLoggingConfigurationSchedulerLogs[];
  /**
  * task_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#task_logs MwaaEnvironment#task_logs}
  */
  readonly taskLogs?: MwaaEnvironmentLoggingConfigurationTaskLogs[];
  /**
  * webserver_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#webserver_logs MwaaEnvironment#webserver_logs}
  */
  readonly webserverLogs?: MwaaEnvironmentLoggingConfigurationWebserverLogs[];
  /**
  * worker_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#worker_logs MwaaEnvironment#worker_logs}
  */
  readonly workerLogs?: MwaaEnvironmentLoggingConfigurationWorkerLogs[];
}

function mwaaEnvironmentLoggingConfigurationToTerraform(struct?: MwaaEnvironmentLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dag_processing_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform)(struct!.dagProcessingLogs),
    scheduler_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform)(struct!.schedulerLogs),
    task_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform)(struct!.taskLogs),
    webserver_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform)(struct!.webserverLogs),
    worker_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform)(struct!.workerLogs),
  }
}

export interface MwaaEnvironmentNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#security_group_ids MwaaEnvironment#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#subnet_ids MwaaEnvironment#subnet_ids}
  */
  readonly subnetIds: string[];
}

function mwaaEnvironmentNetworkConfigurationToTerraform(struct?: MwaaEnvironmentNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment}
*/
export class MwaaEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_mwaa_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwaaEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: MwaaEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mwaa_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._airflowConfigurationOptions = config.airflowConfigurationOptions;
    this._airflowVersion = config.airflowVersion;
    this._dagS3Path = config.dagS3Path;
    this._environmentClass = config.environmentClass;
    this._executionRoleArn = config.executionRoleArn;
    this._kmsKey = config.kmsKey;
    this._maxWorkers = config.maxWorkers;
    this._minWorkers = config.minWorkers;
    this._name = config.name;
    this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
    this._pluginsS3Path = config.pluginsS3Path;
    this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
    this._requirementsS3Path = config.requirementsS3Path;
    this._sourceBucketArn = config.sourceBucketArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._webserverAccessMode = config.webserverAccessMode;
    this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
    this._loggingConfiguration = config.loggingConfiguration;
    this._networkConfiguration = config.networkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // airflow_configuration_options - computed: false, optional: true, required: false
  private _airflowConfigurationOptions?: { [key: string]: string } | cdktf.IResolvable;
  public get airflowConfigurationOptions() {
    return this.interpolationForAttribute('airflow_configuration_options') as any;
  }
  public set airflowConfigurationOptions(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._airflowConfigurationOptions = value;
  }
  public resetAirflowConfigurationOptions() {
    this._airflowConfigurationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowConfigurationOptionsInput() {
    return this._airflowConfigurationOptions
  }

  // airflow_version - computed: true, optional: true, required: false
  private _airflowVersion?: string;
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }
  public set airflowVersion(value: string) {
    this._airflowVersion = value;
  }
  public resetAirflowVersion() {
    this._airflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowVersionInput() {
    return this._airflowVersion
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dag_s3_path - computed: false, optional: false, required: true
  private _dagS3Path: string;
  public get dagS3Path() {
    return this.getStringAttribute('dag_s3_path');
  }
  public set dagS3Path(value: string) {
    this._dagS3Path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dagS3PathInput() {
    return this._dagS3Path
  }

  // environment_class - computed: true, optional: true, required: false
  private _environmentClass?: string;
  public get environmentClass() {
    return this.getStringAttribute('environment_class');
  }
  public set environmentClass(value: string) {
    this._environmentClass = value;
  }
  public resetEnvironmentClass() {
    this._environmentClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentClassInput() {
    return this._environmentClass
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string ) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey
  }

  // last_updated - computed: true, optional: false, required: false
  public lastUpdated(index: string) {
    return new MwaaEnvironmentLastUpdated(this, 'last_updated', index);
  }

  // max_workers - computed: true, optional: true, required: false
  private _maxWorkers?: number;
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers
  }

  // min_workers - computed: true, optional: true, required: false
  private _minWorkers?: number;
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers
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

  // plugins_s3_object_version - computed: true, optional: true, required: false
  private _pluginsS3ObjectVersion?: string;
  public get pluginsS3ObjectVersion() {
    return this.getStringAttribute('plugins_s3_object_version');
  }
  public set pluginsS3ObjectVersion(value: string) {
    this._pluginsS3ObjectVersion = value;
  }
  public resetPluginsS3ObjectVersion() {
    this._pluginsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsS3ObjectVersionInput() {
    return this._pluginsS3ObjectVersion
  }

  // plugins_s3_path - computed: false, optional: true, required: false
  private _pluginsS3Path?: string;
  public get pluginsS3Path() {
    return this.getStringAttribute('plugins_s3_path');
  }
  public set pluginsS3Path(value: string ) {
    this._pluginsS3Path = value;
  }
  public resetPluginsS3Path() {
    this._pluginsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsS3PathInput() {
    return this._pluginsS3Path
  }

  // requirements_s3_object_version - computed: true, optional: true, required: false
  private _requirementsS3ObjectVersion?: string;
  public get requirementsS3ObjectVersion() {
    return this.getStringAttribute('requirements_s3_object_version');
  }
  public set requirementsS3ObjectVersion(value: string) {
    this._requirementsS3ObjectVersion = value;
  }
  public resetRequirementsS3ObjectVersion() {
    this._requirementsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsS3ObjectVersionInput() {
    return this._requirementsS3ObjectVersion
  }

  // requirements_s3_path - computed: false, optional: true, required: false
  private _requirementsS3Path?: string;
  public get requirementsS3Path() {
    return this.getStringAttribute('requirements_s3_path');
  }
  public set requirementsS3Path(value: string ) {
    this._requirementsS3Path = value;
  }
  public resetRequirementsS3Path() {
    this._requirementsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsS3PathInput() {
    return this._requirementsS3Path
  }

  // service_role_arn - computed: true, optional: false, required: false
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }

  // source_bucket_arn - computed: false, optional: false, required: true
  private _sourceBucketArn: string;
  public get sourceBucketArn() {
    return this.getStringAttribute('source_bucket_arn');
  }
  public set sourceBucketArn(value: string) {
    this._sourceBucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBucketArnInput() {
    return this._sourceBucketArn
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

  // webserver_access_mode - computed: true, optional: true, required: false
  private _webserverAccessMode?: string;
  public get webserverAccessMode() {
    return this.getStringAttribute('webserver_access_mode');
  }
  public set webserverAccessMode(value: string) {
    this._webserverAccessMode = value;
  }
  public resetWebserverAccessMode() {
    this._webserverAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webserverAccessModeInput() {
    return this._webserverAccessMode
  }

  // webserver_url - computed: true, optional: false, required: false
  public get webserverUrl() {
    return this.getStringAttribute('webserver_url');
  }

  // weekly_maintenance_window_start - computed: true, optional: true, required: false
  private _weeklyMaintenanceWindowStart?: string;
  public get weeklyMaintenanceWindowStart() {
    return this.getStringAttribute('weekly_maintenance_window_start');
  }
  public set weeklyMaintenanceWindowStart(value: string) {
    this._weeklyMaintenanceWindowStart = value;
  }
  public resetWeeklyMaintenanceWindowStart() {
    this._weeklyMaintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowStartInput() {
    return this._weeklyMaintenanceWindowStart
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration?: MwaaEnvironmentLoggingConfiguration[];
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }
  public set loggingConfiguration(value: MwaaEnvironmentLoggingConfiguration[] ) {
    this._loggingConfiguration = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration: MwaaEnvironmentNetworkConfiguration[];
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }
  public set networkConfiguration(value: MwaaEnvironmentNetworkConfiguration[]) {
    this._networkConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      airflow_configuration_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._airflowConfigurationOptions),
      airflow_version: cdktf.stringToTerraform(this._airflowVersion),
      dag_s3_path: cdktf.stringToTerraform(this._dagS3Path),
      environment_class: cdktf.stringToTerraform(this._environmentClass),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      max_workers: cdktf.numberToTerraform(this._maxWorkers),
      min_workers: cdktf.numberToTerraform(this._minWorkers),
      name: cdktf.stringToTerraform(this._name),
      plugins_s3_object_version: cdktf.stringToTerraform(this._pluginsS3ObjectVersion),
      plugins_s3_path: cdktf.stringToTerraform(this._pluginsS3Path),
      requirements_s3_object_version: cdktf.stringToTerraform(this._requirementsS3ObjectVersion),
      requirements_s3_path: cdktf.stringToTerraform(this._requirementsS3Path),
      source_bucket_arn: cdktf.stringToTerraform(this._sourceBucketArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      webserver_access_mode: cdktf.stringToTerraform(this._webserverAccessMode),
      weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
      logging_configuration: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationToTerraform)(this._loggingConfiguration),
      network_configuration: cdktf.listMapper(mwaaEnvironmentNetworkConfigurationToTerraform)(this._networkConfiguration),
    };
  }
}
