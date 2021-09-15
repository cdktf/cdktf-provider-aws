// https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Kinesisanalyticsv2ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#description Kinesisanalyticsv2Application#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#force_stop Kinesisanalyticsv2Application#force_stop}
  */
  readonly forceStop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#runtime_environment Kinesisanalyticsv2Application#runtime_environment}
  */
  readonly runtimeEnvironment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#service_execution_role Kinesisanalyticsv2Application#service_execution_role}
  */
  readonly serviceExecutionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#start_application Kinesisanalyticsv2Application#start_application}
  */
  readonly startApplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#tags Kinesisanalyticsv2Application#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#tags_all Kinesisanalyticsv2Application#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * application_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_configuration Kinesisanalyticsv2Application#application_configuration}
  */
  readonly applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration[];
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#cloudwatch_logging_options Kinesisanalyticsv2Application#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#bucket_arn Kinesisanalyticsv2Application#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#file_key Kinesisanalyticsv2Application#file_key}
  */
  readonly fileKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#object_version Kinesisanalyticsv2Application#object_version}
  */
  readonly objectVersion?: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    file_key: cdktf.stringToTerraform(struct!.fileKey),
    object_version: cdktf.stringToTerraform(struct!.objectVersion),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#text_content Kinesisanalyticsv2Application#text_content}
  */
  readonly textContent?: string;
  /**
  * s3_content_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#s3_content_location Kinesisanalyticsv2Application#s3_content_location}
  */
  readonly s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text_content: cdktf.stringToTerraform(struct!.textContent),
    s3_content_location: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform)(struct!.s3ContentLocation),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#code_content_type Kinesisanalyticsv2Application#code_content_type}
  */
  readonly codeContentType: string;
  /**
  * code_content block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#code_content Kinesisanalyticsv2Application#code_content}
  */
  readonly codeContent?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    code_content_type: cdktf.stringToTerraform(struct!.codeContentType),
    code_content: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform)(struct!.codeContent),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#snapshots_enabled Kinesisanalyticsv2Application#snapshots_enabled}
  */
  readonly snapshotsEnabled: boolean | cdktf.IResolvable;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    snapshots_enabled: cdktf.booleanToTerraform(struct!.snapshotsEnabled),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_group_id Kinesisanalyticsv2Application#property_group_id}
  */
  readonly propertyGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_map Kinesisanalyticsv2Application#property_map}
  */
  readonly propertyMap: { [key: string]: string } | cdktf.IResolvable;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    property_group_id: cdktf.stringToTerraform(struct!.propertyGroupId),
    property_map: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.propertyMap),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {
  /**
  * property_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_group Kinesisanalyticsv2Application#property_group}
  */
  readonly propertyGroup: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    property_group: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform)(struct!.propertyGroup),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpoint_interval Kinesisanalyticsv2Application#checkpoint_interval}
  */
  readonly checkpointInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpointing_enabled Kinesisanalyticsv2Application#checkpointing_enabled}
  */
  readonly checkpointingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}
  */
  readonly configurationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#min_pause_between_checkpoints Kinesisanalyticsv2Application#min_pause_between_checkpoints}
  */
  readonly minPauseBetweenCheckpoints?: number;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    checkpoint_interval: cdktf.numberToTerraform(struct!.checkpointInterval),
    checkpointing_enabled: cdktf.booleanToTerraform(struct!.checkpointingEnabled),
    configuration_type: cdktf.stringToTerraform(struct!.configurationType),
    min_pause_between_checkpoints: cdktf.numberToTerraform(struct!.minPauseBetweenCheckpoints),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}
  */
  readonly configurationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#log_level Kinesisanalyticsv2Application#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#metrics_level Kinesisanalyticsv2Application#metrics_level}
  */
  readonly metricsLevel?: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    configuration_type: cdktf.stringToTerraform(struct!.configurationType),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    metrics_level: cdktf.stringToTerraform(struct!.metricsLevel),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#auto_scaling_enabled Kinesisanalyticsv2Application#auto_scaling_enabled}
  */
  readonly autoScalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}
  */
  readonly configurationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism Kinesisanalyticsv2Application#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism_per_kpu Kinesisanalyticsv2Application#parallelism_per_kpu}
  */
  readonly parallelismPerKpu?: number;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_scaling_enabled: cdktf.booleanToTerraform(struct!.autoScalingEnabled),
    configuration_type: cdktf.stringToTerraform(struct!.configurationType),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    parallelism_per_kpu: cdktf.numberToTerraform(struct!.parallelismPerKpu),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {
  /**
  * checkpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpoint_configuration Kinesisanalyticsv2Application#checkpoint_configuration}
  */
  readonly checkpointConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration[];
  /**
  * monitoring_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#monitoring_configuration Kinesisanalyticsv2Application#monitoring_configuration}
  */
  readonly monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration[];
  /**
  * parallelism_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism_configuration Kinesisanalyticsv2Application#parallelism_configuration}
  */
  readonly parallelismConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    checkpoint_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform)(struct!.checkpointConfiguration),
    monitoring_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform)(struct!.monitoringConfiguration),
    parallelism_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform)(struct!.parallelismConfiguration),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_restore_type Kinesisanalyticsv2Application#application_restore_type}
  */
  readonly applicationRestoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#snapshot_name Kinesisanalyticsv2Application#snapshot_name}
  */
  readonly snapshotName?: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_restore_type: cdktf.stringToTerraform(struct!.applicationRestoreType),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#allow_non_restored_state Kinesisanalyticsv2Application#allow_non_restored_state}
  */
  readonly allowNonRestoredState?: boolean | cdktf.IResolvable;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_non_restored_state: cdktf.booleanToTerraform(struct!.allowNonRestoredState),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration {
  /**
  * application_restore_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_restore_configuration Kinesisanalyticsv2Application#application_restore_configuration}
  */
  readonly applicationRestoreConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration[];
  /**
  * flink_run_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_run_configuration Kinesisanalyticsv2Application#flink_run_configuration}
  */
  readonly flinkRunConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_restore_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform)(struct!.applicationRestoreConfiguration),
    flink_run_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform)(struct!.flinkRunConfiguration),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#count Kinesisanalyticsv2Application#count}
  */
  readonly count?: number;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
  */
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration {
  /**
  * input_lambda_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_lambda_processor Kinesisanalyticsv2Application#input_lambda_processor}
  */
  readonly inputLambdaProcessor: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_lambda_processor: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform)(struct!.inputLambdaProcessor),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping Kinesisanalyticsv2Application#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_type Kinesisanalyticsv2Application#sql_type}
  */
  readonly sqlType: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mapping: cdktf.stringToTerraform(struct!.mapping),
    name: cdktf.stringToTerraform(struct!.name),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column_delimiter Kinesisanalyticsv2Application#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_delimiter Kinesisanalyticsv2Application#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}
  */
  readonly recordRowPath: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters {
  /**
  * csv_mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
  */
  readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters[];
  /**
  * json_mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
  */
  readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform)(struct!.csvMappingParameters),
    json_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform)(struct!.jsonMappingParameters),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
  */
  readonly recordFormatType: string;
  /**
  * mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping_parameters Kinesisanalyticsv2Application#mapping_parameters}
  */
  readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
    mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_encoding Kinesisanalyticsv2Application#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column Kinesisanalyticsv2Application#record_column}
  */
  readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[];
  /**
  * record_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format Kinesisanalyticsv2Application#record_format}
  */
  readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
    record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform)(struct!.recordColumn),
    record_format: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform)(struct!.recordFormat),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_starting_position Kinesisanalyticsv2Application#input_starting_position}
  */
  readonly inputStartingPosition?: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_starting_position: cdktf.stringToTerraform(struct!.inputStartingPosition),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
  */
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
  */
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name_prefix Kinesisanalyticsv2Application#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * input_parallelism block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_parallelism Kinesisanalyticsv2Application#input_parallelism}
  */
  readonly inputParallelism?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism[];
  /**
  * input_processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_processing_configuration Kinesisanalyticsv2Application#input_processing_configuration}
  */
  readonly inputProcessingConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration[];
  /**
  * input_schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_schema Kinesisanalyticsv2Application#input_schema}
  */
  readonly inputSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema[];
  /**
  * input_starting_position_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_starting_position_configuration Kinesisanalyticsv2Application#input_starting_position_configuration}
  */
  readonly inputStartingPositionConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[];
  /**
  * kinesis_firehose_input block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_firehose_input Kinesisanalyticsv2Application#kinesis_firehose_input}
  */
  readonly kinesisFirehoseInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput[];
  /**
  * kinesis_streams_input block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_input Kinesisanalyticsv2Application#kinesis_streams_input}
  */
  readonly kinesisStreamsInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    input_parallelism: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform)(struct!.inputParallelism),
    input_processing_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform)(struct!.inputProcessingConfiguration),
    input_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform)(struct!.inputSchema),
    input_starting_position_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform)(struct!.inputStartingPositionConfiguration),
    kinesis_firehose_input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform)(struct!.kinesisFirehoseInput),
    kinesis_streams_input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform)(struct!.kinesisStreamsInput),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
  */
  readonly recordFormatType: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
  */
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
  */
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
  */
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
  */
  readonly name: string;
  /**
  * destination_schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#destination_schema Kinesisanalyticsv2Application#destination_schema}
  */
  readonly destinationSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema[];
  /**
  * kinesis_firehose_output block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_firehose_output Kinesisanalyticsv2Application#kinesis_firehose_output}
  */
  readonly kinesisFirehoseOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput[];
  /**
  * kinesis_streams_output block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_output Kinesisanalyticsv2Application#kinesis_streams_output}
  */
  readonly kinesisStreamsOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput[];
  /**
  * lambda_output block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#lambda_output Kinesisanalyticsv2Application#lambda_output}
  */
  readonly lambdaOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    destination_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform)(struct!.destinationSchema),
    kinesis_firehose_output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform)(struct!.kinesisFirehoseOutput),
    kinesis_streams_output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform)(struct!.kinesisStreamsOutput),
    lambda_output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform)(struct!.lambdaOutput),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping Kinesisanalyticsv2Application#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_type Kinesisanalyticsv2Application#sql_type}
  */
  readonly sqlType: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mapping: cdktf.stringToTerraform(struct!.mapping),
    name: cdktf.stringToTerraform(struct!.name),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column_delimiter Kinesisanalyticsv2Application#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_delimiter Kinesisanalyticsv2Application#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}
  */
  readonly recordRowPath: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters {
  /**
  * csv_mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
  */
  readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters[];
  /**
  * json_mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
  */
  readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform)(struct!.csvMappingParameters),
    json_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform)(struct!.jsonMappingParameters),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
  */
  readonly recordFormatType: string;
  /**
  * mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping_parameters Kinesisanalyticsv2Application#mapping_parameters}
  */
  readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
    mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_encoding Kinesisanalyticsv2Application#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column Kinesisanalyticsv2Application#record_column}
  */
  readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[];
  /**
  * record_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format Kinesisanalyticsv2Application#record_format}
  */
  readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
    record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform)(struct!.recordColumn),
    record_format: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform)(struct!.recordFormat),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#bucket_arn Kinesisanalyticsv2Application#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#file_key Kinesisanalyticsv2Application#file_key}
  */
  readonly fileKey: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    file_key: cdktf.stringToTerraform(struct!.fileKey),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#table_name Kinesisanalyticsv2Application#table_name}
  */
  readonly tableName: string;
  /**
  * reference_schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#reference_schema Kinesisanalyticsv2Application#reference_schema}
  */
  readonly referenceSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema[];
  /**
  * s3_reference_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#s3_reference_data_source Kinesisanalyticsv2Application#s3_reference_data_source}
  */
  readonly s3ReferenceDataSource: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
    reference_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform)(struct!.referenceSchema),
    s3_reference_data_source: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform)(struct!.s3ReferenceDataSource),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration {
  /**
  * input block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input Kinesisanalyticsv2Application#input}
  */
  readonly input?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput[];
  /**
  * output block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#output Kinesisanalyticsv2Application#output}
  */
  readonly output?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[];
  /**
  * reference_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#reference_data_source Kinesisanalyticsv2Application#reference_data_source}
  */
  readonly referenceDataSource?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform)(struct!.input),
    output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform)(struct!.output),
    reference_data_source: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform)(struct!.referenceDataSource),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#security_group_ids Kinesisanalyticsv2Application#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#subnet_ids Kinesisanalyticsv2Application#subnet_ids}
  */
  readonly subnetIds: string[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfiguration {
  /**
  * application_code_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_code_configuration Kinesisanalyticsv2Application#application_code_configuration}
  */
  readonly applicationCodeConfiguration: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration[];
  /**
  * application_snapshot_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_snapshot_configuration Kinesisanalyticsv2Application#application_snapshot_configuration}
  */
  readonly applicationSnapshotConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration[];
  /**
  * environment_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#environment_properties Kinesisanalyticsv2Application#environment_properties}
  */
  readonly environmentProperties?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties[];
  /**
  * flink_application_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_application_configuration Kinesisanalyticsv2Application#flink_application_configuration}
  */
  readonly flinkApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration[];
  /**
  * run_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#run_configuration Kinesisanalyticsv2Application#run_configuration}
  */
  readonly runConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration[];
  /**
  * sql_application_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_application_configuration Kinesisanalyticsv2Application#sql_application_configuration}
  */
  readonly sqlApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration[];
  /**
  * vpc_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#vpc_configuration Kinesisanalyticsv2Application#vpc_configuration}
  */
  readonly vpcConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_code_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform)(struct!.applicationCodeConfiguration),
    application_snapshot_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform)(struct!.applicationSnapshotConfiguration),
    environment_properties: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform)(struct!.environmentProperties),
    flink_application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform)(struct!.flinkApplicationConfiguration),
    run_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform)(struct!.runConfiguration),
    sql_application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform)(struct!.sqlApplicationConfiguration),
    vpc_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform)(struct!.vpcConfiguration),
  }
}

export interface Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#log_stream_arn Kinesisanalyticsv2Application#log_stream_arn}
  */
  readonly logStreamArn: string;
}

function kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(struct?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_stream_arn: cdktf.stringToTerraform(struct!.logStreamArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application}
*/
export class Kinesisanalyticsv2Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kinesisanalyticsv2_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Kinesisanalyticsv2ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesisanalyticsv2_application',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._forceStop = config.forceStop;
    this._name = config.name;
    this._runtimeEnvironment = config.runtimeEnvironment;
    this._serviceExecutionRole = config.serviceExecutionRole;
    this._startApplication = config.startApplication;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._applicationConfiguration = config.applicationConfiguration;
    this._cloudwatchLoggingOptions = config.cloudwatchLoggingOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // create_timestamp - computed: true, optional: false, required: false
  public get createTimestamp() {
    return this.getStringAttribute('create_timestamp');
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

  // force_stop - computed: false, optional: true, required: false
  private _forceStop?: boolean | cdktf.IResolvable;
  public get forceStop() {
    return this.getBooleanAttribute('force_stop');
  }
  public set forceStop(value: boolean | cdktf.IResolvable ) {
    this._forceStop = value;
  }
  public resetForceStop() {
    this._forceStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStopInput() {
    return this._forceStop
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_update_timestamp - computed: true, optional: false, required: false
  public get lastUpdateTimestamp() {
    return this.getStringAttribute('last_update_timestamp');
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

  // runtime_environment - computed: false, optional: false, required: true
  private _runtimeEnvironment: string;
  public get runtimeEnvironment() {
    return this.getStringAttribute('runtime_environment');
  }
  public set runtimeEnvironment(value: string) {
    this._runtimeEnvironment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentInput() {
    return this._runtimeEnvironment
  }

  // service_execution_role - computed: false, optional: false, required: true
  private _serviceExecutionRole: string;
  public get serviceExecutionRole() {
    return this.getStringAttribute('service_execution_role');
  }
  public set serviceExecutionRole(value: string) {
    this._serviceExecutionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExecutionRoleInput() {
    return this._serviceExecutionRole
  }

  // start_application - computed: false, optional: true, required: false
  private _startApplication?: boolean | cdktf.IResolvable;
  public get startApplication() {
    return this.getBooleanAttribute('start_application');
  }
  public set startApplication(value: boolean | cdktf.IResolvable ) {
    this._startApplication = value;
  }
  public resetStartApplication() {
    this._startApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startApplicationInput() {
    return this._startApplication
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration[];
  public get applicationConfiguration() {
    return this.interpolationForAttribute('application_configuration') as any;
  }
  public set applicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfiguration[] ) {
    this._applicationConfiguration = value;
  }
  public resetApplicationConfiguration() {
    this._applicationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigurationInput() {
    return this._applicationConfiguration
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[];
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }
  public set cloudwatchLoggingOptions(value: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[] ) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_stop: cdktf.booleanToTerraform(this._forceStop),
      name: cdktf.stringToTerraform(this._name),
      runtime_environment: cdktf.stringToTerraform(this._runtimeEnvironment),
      service_execution_role: cdktf.stringToTerraform(this._serviceExecutionRole),
      start_application: cdktf.booleanToTerraform(this._startApplication),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform)(this._applicationConfiguration),
      cloudwatch_logging_options: cdktf.listMapper(kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform)(this._cloudwatchLoggingOptions),
    };
  }
}
