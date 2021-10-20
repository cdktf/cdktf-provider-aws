// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Workloads for Apache Airflow
*/
export namespace MWAA {
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
    readonly loggingConfiguration?: MwaaEnvironmentLoggingConfiguration;
    /**
    * network_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#network_configuration MwaaEnvironment#network_configuration}
    */
    readonly networkConfiguration: MwaaEnvironmentNetworkConfiguration;
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
      // Getting the computed value is not yet implemented
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

  function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference | MwaaEnvironmentLoggingConfigurationDagProcessingLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_level: cdktf.stringToTerraform(struct!.logLevel),
    }
  }

  export class MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string | undefined; 
    public get logLevel() {
      return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string | undefined) {
      this._logLevel = value;
    }
    public resetLogLevel() {
      this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
      return this._logLevel
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

  function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference | MwaaEnvironmentLoggingConfigurationSchedulerLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_level: cdktf.stringToTerraform(struct!.logLevel),
    }
  }

  export class MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string | undefined; 
    public get logLevel() {
      return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string | undefined) {
      this._logLevel = value;
    }
    public resetLogLevel() {
      this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
      return this._logLevel
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

  function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference | MwaaEnvironmentLoggingConfigurationTaskLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_level: cdktf.stringToTerraform(struct!.logLevel),
    }
  }

  export class MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string | undefined; 
    public get logLevel() {
      return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string | undefined) {
      this._logLevel = value;
    }
    public resetLogLevel() {
      this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
      return this._logLevel
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

  function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference | MwaaEnvironmentLoggingConfigurationWebserverLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_level: cdktf.stringToTerraform(struct!.logLevel),
    }
  }

  export class MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string | undefined; 
    public get logLevel() {
      return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string | undefined) {
      this._logLevel = value;
    }
    public resetLogLevel() {
      this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
      return this._logLevel
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

  function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference | MwaaEnvironmentLoggingConfigurationWorkerLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_level: cdktf.stringToTerraform(struct!.logLevel),
    }
  }

  export class MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string | undefined; 
    public get logLevel() {
      return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string | undefined) {
      this._logLevel = value;
    }
    public resetLogLevel() {
      this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
      return this._logLevel
    }
  }
  export interface MwaaEnvironmentLoggingConfiguration {
    /**
    * dag_processing_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#dag_processing_logs MwaaEnvironment#dag_processing_logs}
    */
    readonly dagProcessingLogs?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs;
    /**
    * scheduler_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#scheduler_logs MwaaEnvironment#scheduler_logs}
    */
    readonly schedulerLogs?: MwaaEnvironmentLoggingConfigurationSchedulerLogs;
    /**
    * task_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#task_logs MwaaEnvironment#task_logs}
    */
    readonly taskLogs?: MwaaEnvironmentLoggingConfigurationTaskLogs;
    /**
    * webserver_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#webserver_logs MwaaEnvironment#webserver_logs}
    */
    readonly webserverLogs?: MwaaEnvironmentLoggingConfigurationWebserverLogs;
    /**
    * worker_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#worker_logs MwaaEnvironment#worker_logs}
    */
    readonly workerLogs?: MwaaEnvironmentLoggingConfigurationWorkerLogs;
  }

  function mwaaEnvironmentLoggingConfigurationToTerraform(struct?: MwaaEnvironmentLoggingConfigurationOutputReference | MwaaEnvironmentLoggingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      dag_processing_logs: mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct!.dagProcessingLogs),
      scheduler_logs: mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct!.schedulerLogs),
      task_logs: mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct!.taskLogs),
      webserver_logs: mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct!.webserverLogs),
      worker_logs: mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct!.workerLogs),
    }
  }

  export class MwaaEnvironmentLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // dag_processing_logs - computed: false, optional: true, required: false
    private _dagProcessingLogs?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined; 
    private __dagProcessingLogsOutput = new MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(this as any, "dag_processing_logs", true);
    public get dagProcessingLogs() {
      return this.__dagProcessingLogsOutput;
    }
    public putDagProcessingLogs(value: MwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined) {
      this._dagProcessingLogs = value;
    }
    public resetDagProcessingLogs() {
      this._dagProcessingLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dagProcessingLogsInput() {
      return this._dagProcessingLogs
    }

    // scheduler_logs - computed: false, optional: true, required: false
    private _schedulerLogs?: MwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined; 
    private __schedulerLogsOutput = new MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(this as any, "scheduler_logs", true);
    public get schedulerLogs() {
      return this.__schedulerLogsOutput;
    }
    public putSchedulerLogs(value: MwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined) {
      this._schedulerLogs = value;
    }
    public resetSchedulerLogs() {
      this._schedulerLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulerLogsInput() {
      return this._schedulerLogs
    }

    // task_logs - computed: false, optional: true, required: false
    private _taskLogs?: MwaaEnvironmentLoggingConfigurationTaskLogs | undefined; 
    private __taskLogsOutput = new MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(this as any, "task_logs", true);
    public get taskLogs() {
      return this.__taskLogsOutput;
    }
    public putTaskLogs(value: MwaaEnvironmentLoggingConfigurationTaskLogs | undefined) {
      this._taskLogs = value;
    }
    public resetTaskLogs() {
      this._taskLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskLogsInput() {
      return this._taskLogs
    }

    // webserver_logs - computed: false, optional: true, required: false
    private _webserverLogs?: MwaaEnvironmentLoggingConfigurationWebserverLogs | undefined; 
    private __webserverLogsOutput = new MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(this as any, "webserver_logs", true);
    public get webserverLogs() {
      return this.__webserverLogsOutput;
    }
    public putWebserverLogs(value: MwaaEnvironmentLoggingConfigurationWebserverLogs | undefined) {
      this._webserverLogs = value;
    }
    public resetWebserverLogs() {
      this._webserverLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webserverLogsInput() {
      return this._webserverLogs
    }

    // worker_logs - computed: false, optional: true, required: false
    private _workerLogs?: MwaaEnvironmentLoggingConfigurationWorkerLogs | undefined; 
    private __workerLogsOutput = new MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(this as any, "worker_logs", true);
    public get workerLogs() {
      return this.__workerLogsOutput;
    }
    public putWorkerLogs(value: MwaaEnvironmentLoggingConfigurationWorkerLogs | undefined) {
      this._workerLogs = value;
    }
    public resetWorkerLogs() {
      this._workerLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerLogsInput() {
      return this._workerLogs
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

  function mwaaEnvironmentNetworkConfigurationToTerraform(struct?: MwaaEnvironmentNetworkConfigurationOutputReference | MwaaEnvironmentNetworkConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }

  export class MwaaEnvironmentNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
      this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
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
    private _airflowConfigurationOptions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get airflowConfigurationOptions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('airflow_configuration_options') as any;
    }
    public set airflowConfigurationOptions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _airflowVersion?: string | undefined; 
    public get airflowVersion() {
      return this.getStringAttribute('airflow_version');
    }
    public set airflowVersion(value: string | undefined) {
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
    private _dagS3Path?: string; 
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
    private _environmentClass?: string | undefined; 
    public get environmentClass() {
      return this.getStringAttribute('environment_class');
    }
    public set environmentClass(value: string | undefined) {
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
    private _executionRoleArn?: string; 
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
    private _kmsKey?: string | undefined; 
    public get kmsKey() {
      return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string | undefined) {
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
    private _maxWorkers?: number | undefined; 
    public get maxWorkers() {
      return this.getNumberAttribute('max_workers');
    }
    public set maxWorkers(value: number | undefined) {
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
    private _minWorkers?: number | undefined; 
    public get minWorkers() {
      return this.getNumberAttribute('min_workers');
    }
    public set minWorkers(value: number | undefined) {
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

    // plugins_s3_object_version - computed: true, optional: true, required: false
    private _pluginsS3ObjectVersion?: string | undefined; 
    public get pluginsS3ObjectVersion() {
      return this.getStringAttribute('plugins_s3_object_version');
    }
    public set pluginsS3ObjectVersion(value: string | undefined) {
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
    private _pluginsS3Path?: string | undefined; 
    public get pluginsS3Path() {
      return this.getStringAttribute('plugins_s3_path');
    }
    public set pluginsS3Path(value: string | undefined) {
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
    private _requirementsS3ObjectVersion?: string | undefined; 
    public get requirementsS3ObjectVersion() {
      return this.getStringAttribute('requirements_s3_object_version');
    }
    public set requirementsS3ObjectVersion(value: string | undefined) {
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
    private _requirementsS3Path?: string | undefined; 
    public get requirementsS3Path() {
      return this.getStringAttribute('requirements_s3_path');
    }
    public set requirementsS3Path(value: string | undefined) {
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
    private _sourceBucketArn?: string; 
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

    // webserver_access_mode - computed: true, optional: true, required: false
    private _webserverAccessMode?: string | undefined; 
    public get webserverAccessMode() {
      return this.getStringAttribute('webserver_access_mode');
    }
    public set webserverAccessMode(value: string | undefined) {
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
    private _weeklyMaintenanceWindowStart?: string | undefined; 
    public get weeklyMaintenanceWindowStart() {
      return this.getStringAttribute('weekly_maintenance_window_start');
    }
    public set weeklyMaintenanceWindowStart(value: string | undefined) {
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
    private _loggingConfiguration?: MwaaEnvironmentLoggingConfiguration | undefined; 
    private __loggingConfigurationOutput = new MwaaEnvironmentLoggingConfigurationOutputReference(this as any, "logging_configuration", true);
    public get loggingConfiguration() {
      return this.__loggingConfigurationOutput;
    }
    public putLoggingConfiguration(value: MwaaEnvironmentLoggingConfiguration | undefined) {
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
    private _networkConfiguration?: MwaaEnvironmentNetworkConfiguration; 
    private __networkConfigurationOutput = new MwaaEnvironmentNetworkConfigurationOutputReference(this as any, "network_configuration", true);
    public get networkConfiguration() {
      return this.__networkConfigurationOutput;
    }
    public putNetworkConfiguration(value: MwaaEnvironmentNetworkConfiguration) {
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
        logging_configuration: mwaaEnvironmentLoggingConfigurationToTerraform(this._loggingConfiguration),
        network_configuration: mwaaEnvironmentNetworkConfigurationToTerraform(this._networkConfiguration),
      };
    }
  }
}
