// https://www.terraform.io/docs/providers/aws/r/mwaa_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwaaEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}
  */
  readonly airflowConfigurationOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}
  */
  readonly airflowVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}
  */
  readonly dagS3Path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}
  */
  readonly environmentClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}
  */
  readonly minWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}
  */
  readonly pluginsS3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}
  */
  readonly pluginsS3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}
  */
  readonly requirementsS3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}
  */
  readonly requirementsS3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}
  */
  readonly schedulers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}
  */
  readonly sourceBucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}
  */
  readonly webserverAccessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}
  */
  readonly weeklyMaintenanceWindowStart?: string;
  /**
  * logging_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#logging_configuration MwaaEnvironment#logging_configuration}
  */
  readonly loggingConfiguration?: MwaaEnvironmentLoggingConfiguration;
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#network_configuration MwaaEnvironment#network_configuration}
  */
  readonly networkConfiguration: MwaaEnvironmentNetworkConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#timeouts MwaaEnvironment#timeouts}
  */
  readonly timeouts?: MwaaEnvironmentTimeouts;
}
export interface MwaaEnvironmentLastUpdatedError {
}

export function mwaaEnvironmentLastUpdatedErrorToTerraform(struct?: MwaaEnvironmentLastUpdatedError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MwaaEnvironmentLastUpdatedErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MwaaEnvironmentLastUpdatedError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentLastUpdatedError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class MwaaEnvironmentLastUpdatedErrorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MwaaEnvironmentLastUpdatedErrorOutputReference {
    return new MwaaEnvironmentLastUpdatedErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MwaaEnvironmentLastUpdated {
}

export function mwaaEnvironmentLastUpdatedToTerraform(struct?: MwaaEnvironmentLastUpdated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MwaaEnvironmentLastUpdatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MwaaEnvironmentLastUpdated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentLastUpdated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // error - computed: true, optional: false, required: false
  private _error = new MwaaEnvironmentLastUpdatedErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class MwaaEnvironmentLastUpdatedList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MwaaEnvironmentLastUpdatedOutputReference {
    return new MwaaEnvironmentLastUpdatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MwaaEnvironmentLoggingConfigurationDagProcessingLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference | MwaaEnvironmentLoggingConfigurationDagProcessingLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface MwaaEnvironmentLoggingConfigurationSchedulerLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference | MwaaEnvironmentLoggingConfigurationSchedulerLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface MwaaEnvironmentLoggingConfigurationTaskLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference | MwaaEnvironmentLoggingConfigurationTaskLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwaaEnvironmentLoggingConfigurationTaskLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentLoggingConfigurationTaskLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface MwaaEnvironmentLoggingConfigurationWebserverLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference | MwaaEnvironmentLoggingConfigurationWebserverLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwaaEnvironmentLoggingConfigurationWebserverLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentLoggingConfigurationWebserverLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface MwaaEnvironmentLoggingConfigurationWorkerLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference | MwaaEnvironmentLoggingConfigurationWorkerLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwaaEnvironmentLoggingConfigurationWorkerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentLoggingConfigurationWorkerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface MwaaEnvironmentLoggingConfiguration {
  /**
  * dag_processing_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_processing_logs MwaaEnvironment#dag_processing_logs}
  */
  readonly dagProcessingLogs?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs;
  /**
  * scheduler_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#scheduler_logs MwaaEnvironment#scheduler_logs}
  */
  readonly schedulerLogs?: MwaaEnvironmentLoggingConfigurationSchedulerLogs;
  /**
  * task_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#task_logs MwaaEnvironment#task_logs}
  */
  readonly taskLogs?: MwaaEnvironmentLoggingConfigurationTaskLogs;
  /**
  * webserver_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_logs MwaaEnvironment#webserver_logs}
  */
  readonly webserverLogs?: MwaaEnvironmentLoggingConfigurationWebserverLogs;
  /**
  * worker_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#worker_logs MwaaEnvironment#worker_logs}
  */
  readonly workerLogs?: MwaaEnvironmentLoggingConfigurationWorkerLogs;
}

export function mwaaEnvironmentLoggingConfigurationToTerraform(struct?: MwaaEnvironmentLoggingConfigurationOutputReference | MwaaEnvironmentLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwaaEnvironmentLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dagProcessingLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dagProcessingLogs = this._dagProcessingLogs?.internalValue;
    }
    if (this._schedulerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerLogs = this._schedulerLogs?.internalValue;
    }
    if (this._taskLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskLogs = this._taskLogs?.internalValue;
    }
    if (this._webserverLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webserverLogs = this._webserverLogs?.internalValue;
    }
    if (this._workerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerLogs = this._workerLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dagProcessingLogs.internalValue = undefined;
      this._schedulerLogs.internalValue = undefined;
      this._taskLogs.internalValue = undefined;
      this._webserverLogs.internalValue = undefined;
      this._workerLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dagProcessingLogs.internalValue = value.dagProcessingLogs;
      this._schedulerLogs.internalValue = value.schedulerLogs;
      this._taskLogs.internalValue = value.taskLogs;
      this._webserverLogs.internalValue = value.webserverLogs;
      this._workerLogs.internalValue = value.workerLogs;
    }
  }

  // dag_processing_logs - computed: false, optional: true, required: false
  private _dagProcessingLogs = new MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(this, "dag_processing_logs");
  public get dagProcessingLogs() {
    return this._dagProcessingLogs;
  }
  public putDagProcessingLogs(value: MwaaEnvironmentLoggingConfigurationDagProcessingLogs) {
    this._dagProcessingLogs.internalValue = value;
  }
  public resetDagProcessingLogs() {
    this._dagProcessingLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagProcessingLogsInput() {
    return this._dagProcessingLogs.internalValue;
  }

  // scheduler_logs - computed: false, optional: true, required: false
  private _schedulerLogs = new MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(this, "scheduler_logs");
  public get schedulerLogs() {
    return this._schedulerLogs;
  }
  public putSchedulerLogs(value: MwaaEnvironmentLoggingConfigurationSchedulerLogs) {
    this._schedulerLogs.internalValue = value;
  }
  public resetSchedulerLogs() {
    this._schedulerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerLogsInput() {
    return this._schedulerLogs.internalValue;
  }

  // task_logs - computed: false, optional: true, required: false
  private _taskLogs = new MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(this, "task_logs");
  public get taskLogs() {
    return this._taskLogs;
  }
  public putTaskLogs(value: MwaaEnvironmentLoggingConfigurationTaskLogs) {
    this._taskLogs.internalValue = value;
  }
  public resetTaskLogs() {
    this._taskLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskLogsInput() {
    return this._taskLogs.internalValue;
  }

  // webserver_logs - computed: false, optional: true, required: false
  private _webserverLogs = new MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(this, "webserver_logs");
  public get webserverLogs() {
    return this._webserverLogs;
  }
  public putWebserverLogs(value: MwaaEnvironmentLoggingConfigurationWebserverLogs) {
    this._webserverLogs.internalValue = value;
  }
  public resetWebserverLogs() {
    this._webserverLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webserverLogsInput() {
    return this._webserverLogs.internalValue;
  }

  // worker_logs - computed: false, optional: true, required: false
  private _workerLogs = new MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(this, "worker_logs");
  public get workerLogs() {
    return this._workerLogs;
  }
  public putWorkerLogs(value: MwaaEnvironmentLoggingConfigurationWorkerLogs) {
    this._workerLogs.internalValue = value;
  }
  public resetWorkerLogs() {
    this._workerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerLogsInput() {
    return this._workerLogs.internalValue;
  }
}
export interface MwaaEnvironmentNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function mwaaEnvironmentNetworkConfigurationToTerraform(struct?: MwaaEnvironmentNetworkConfigurationOutputReference | MwaaEnvironmentNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}

export class MwaaEnvironmentNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwaaEnvironmentNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface MwaaEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}
  */
  readonly update?: string;
}

export function mwaaEnvironmentTimeoutsToTerraform(struct?: MwaaEnvironmentTimeoutsOutputReference | MwaaEnvironmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class MwaaEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MwaaEnvironmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MwaaEnvironmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment aws_mwaa_environment}
*/
export class MwaaEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mwaa_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment aws_mwaa_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwaaEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: MwaaEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mwaa_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._airflowConfigurationOptions = config.airflowConfigurationOptions;
    this._airflowVersion = config.airflowVersion;
    this._dagS3Path = config.dagS3Path;
    this._environmentClass = config.environmentClass;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._kmsKey = config.kmsKey;
    this._maxWorkers = config.maxWorkers;
    this._minWorkers = config.minWorkers;
    this._name = config.name;
    this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
    this._pluginsS3Path = config.pluginsS3Path;
    this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
    this._requirementsS3Path = config.requirementsS3Path;
    this._schedulers = config.schedulers;
    this._sourceBucketArn = config.sourceBucketArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._webserverAccessMode = config.webserverAccessMode;
    this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // airflow_configuration_options - computed: false, optional: true, required: false
  private _airflowConfigurationOptions?: { [key: string]: string }; 
  public get airflowConfigurationOptions() {
    return this.getStringMapAttribute('airflow_configuration_options');
  }
  public set airflowConfigurationOptions(value: { [key: string]: string }) {
    this._airflowConfigurationOptions = value;
  }
  public resetAirflowConfigurationOptions() {
    this._airflowConfigurationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowConfigurationOptionsInput() {
    return this._airflowConfigurationOptions;
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
    return this._airflowVersion;
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
    return this._dagS3Path;
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
    return this._environmentClass;
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
    return this._executionRoleArn;
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

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // last_updated - computed: true, optional: false, required: false
  private _lastUpdated = new MwaaEnvironmentLastUpdatedList(this, "last_updated", false);
  public get lastUpdated() {
    return this._lastUpdated;
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
    return this._maxWorkers;
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
    return this._minWorkers;
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
    return this._name;
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
    return this._pluginsS3ObjectVersion;
  }

  // plugins_s3_path - computed: false, optional: true, required: false
  private _pluginsS3Path?: string; 
  public get pluginsS3Path() {
    return this.getStringAttribute('plugins_s3_path');
  }
  public set pluginsS3Path(value: string) {
    this._pluginsS3Path = value;
  }
  public resetPluginsS3Path() {
    this._pluginsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsS3PathInput() {
    return this._pluginsS3Path;
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
    return this._requirementsS3ObjectVersion;
  }

  // requirements_s3_path - computed: false, optional: true, required: false
  private _requirementsS3Path?: string; 
  public get requirementsS3Path() {
    return this.getStringAttribute('requirements_s3_path');
  }
  public set requirementsS3Path(value: string) {
    this._requirementsS3Path = value;
  }
  public resetRequirementsS3Path() {
    this._requirementsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsS3PathInput() {
    return this._requirementsS3Path;
  }

  // schedulers - computed: true, optional: true, required: false
  private _schedulers?: number; 
  public get schedulers() {
    return this.getNumberAttribute('schedulers');
  }
  public set schedulers(value: number) {
    this._schedulers = value;
  }
  public resetSchedulers() {
    this._schedulers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulersInput() {
    return this._schedulers;
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
    return this._sourceBucketArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
    return this._webserverAccessMode;
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
    return this._weeklyMaintenanceWindowStart;
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration = new MwaaEnvironmentLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: MwaaEnvironmentLoggingConfiguration) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new MwaaEnvironmentNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: MwaaEnvironmentNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MwaaEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MwaaEnvironmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      airflow_configuration_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._airflowConfigurationOptions),
      airflow_version: cdktf.stringToTerraform(this._airflowVersion),
      dag_s3_path: cdktf.stringToTerraform(this._dagS3Path),
      environment_class: cdktf.stringToTerraform(this._environmentClass),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      id: cdktf.stringToTerraform(this._id),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      max_workers: cdktf.numberToTerraform(this._maxWorkers),
      min_workers: cdktf.numberToTerraform(this._minWorkers),
      name: cdktf.stringToTerraform(this._name),
      plugins_s3_object_version: cdktf.stringToTerraform(this._pluginsS3ObjectVersion),
      plugins_s3_path: cdktf.stringToTerraform(this._pluginsS3Path),
      requirements_s3_object_version: cdktf.stringToTerraform(this._requirementsS3ObjectVersion),
      requirements_s3_path: cdktf.stringToTerraform(this._requirementsS3Path),
      schedulers: cdktf.numberToTerraform(this._schedulers),
      source_bucket_arn: cdktf.stringToTerraform(this._sourceBucketArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      webserver_access_mode: cdktf.stringToTerraform(this._webserverAccessMode),
      weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
      logging_configuration: mwaaEnvironmentLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
      network_configuration: mwaaEnvironmentNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      timeouts: mwaaEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
