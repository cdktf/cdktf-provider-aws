// https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Kinesisanalyticsv2ApplicationConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly runtimeEnvironment: string;
  readonly serviceExecutionRole: string;
  readonly tags?: { [key: string]: string };
  /** application_configuration block */
  readonly applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration[];
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
  readonly bucketArn: string;
  readonly fileKey: string;
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
  readonly textContent?: string;
  /** s3_content_location block */
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
  readonly codeContentType: string;
  /** code_content block */
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
  readonly snapshotsEnabled: boolean;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    snapshots_enabled: cdktf.booleanToTerraform(struct!.snapshotsEnabled),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup {
  readonly propertyGroupId: string;
  readonly propertyMap: { [key: string]: string };
}

function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    property_group_id: cdktf.stringToTerraform(struct!.propertyGroupId),
    property_map: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.propertyMap),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {
  /** property_group block */
  readonly propertyGroup: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    property_group: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform)(struct!.propertyGroup),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
  readonly checkpointInterval?: number;
  readonly checkpointingEnabled?: boolean;
  readonly configurationType: string;
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
  readonly configurationType: string;
  readonly logLevel?: string;
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
  readonly autoScalingEnabled?: boolean;
  readonly configurationType: string;
  readonly parallelism?: number;
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
  /** checkpoint_configuration block */
  readonly checkpointConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration[];
  /** monitoring_configuration block */
  readonly monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration[];
  /** parallelism_configuration block */
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

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism {
  readonly count?: number;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor {
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration {
  /** input_lambda_processor block */
  readonly inputLambdaProcessor: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_lambda_processor: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform)(struct!.inputLambdaProcessor),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn {
  readonly mapping?: string;
  readonly name: string;
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
  readonly recordColumnDelimiter: string;
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
  readonly recordRowPath: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters {
  /** csv_mapping_parameters block */
  readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters[];
  /** json_mapping_parameters block */
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
  readonly recordFormatType: string;
  /** mapping_parameters block */
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
  readonly recordEncoding?: string;
  /** record_column block */
  readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[];
  /** record_format block */
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

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput {
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput {
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput {
  readonly namePrefix: string;
  /** input_parallelism block */
  readonly inputParallelism?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism[];
  /** input_processing_configuration block */
  readonly inputProcessingConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration[];
  /** input_schema block */
  readonly inputSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema[];
  /** kinesis_firehose_input block */
  readonly kinesisFirehoseInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput[];
  /** kinesis_streams_input block */
  readonly kinesisStreamsInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    input_parallelism: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform)(struct!.inputParallelism),
    input_processing_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform)(struct!.inputProcessingConfiguration),
    input_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform)(struct!.inputSchema),
    kinesis_firehose_input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform)(struct!.kinesisFirehoseInput),
    kinesis_streams_input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform)(struct!.kinesisStreamsInput),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema {
  readonly recordFormatType: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput {
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput {
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput {
  readonly resourceArn: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput {
  readonly name: string;
  /** destination_schema block */
  readonly destinationSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema[];
  /** kinesis_firehose_output block */
  readonly kinesisFirehoseOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput[];
  /** kinesis_streams_output block */
  readonly kinesisStreamsOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput[];
  /** lambda_output block */
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
  readonly mapping?: string;
  readonly name: string;
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
  readonly recordColumnDelimiter: string;
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
  readonly recordRowPath: string;
}

function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters {
  /** csv_mapping_parameters block */
  readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters[];
  /** json_mapping_parameters block */
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
  readonly recordFormatType: string;
  /** mapping_parameters block */
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
  readonly recordEncoding?: string;
  /** record_column block */
  readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[];
  /** record_format block */
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
  readonly bucketArn: string;
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
  readonly tableName: string;
  /** reference_schema block */
  readonly referenceSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema[];
  /** s3_reference_data_source block */
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
  /** input block */
  readonly input?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput[];
  /** output block */
  readonly output?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[];
  /** reference_data_source block */
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
  readonly securityGroupIds: string[];
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
  /** application_code_configuration block */
  readonly applicationCodeConfiguration: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration[];
  /** application_snapshot_configuration block */
  readonly applicationSnapshotConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration[];
  /** environment_properties block */
  readonly environmentProperties?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties[];
  /** flink_application_configuration block */
  readonly flinkApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration[];
  /** sql_application_configuration block */
  readonly sqlApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration[];
  /** vpc_configuration block */
  readonly vpcConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration[];
}

function kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_code_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform)(struct!.applicationCodeConfiguration),
    application_snapshot_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform)(struct!.applicationSnapshotConfiguration),
    environment_properties: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform)(struct!.environmentProperties),
    flink_application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform)(struct!.flinkApplicationConfiguration),
    sql_application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform)(struct!.sqlApplicationConfiguration),
    vpc_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform)(struct!.vpcConfiguration),
  }
}

export interface Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions {
  readonly logStreamArn: string;
}

function kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(struct?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_stream_arn: cdktf.stringToTerraform(struct!.logStreamArn),
  }
}


// Resource

export class Kinesisanalyticsv2Application extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._name = config.name;
    this._runtimeEnvironment = config.runtimeEnvironment;
    this._serviceExecutionRole = config.serviceExecutionRole;
    this._tags = config.tags;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
      name: cdktf.stringToTerraform(this._name),
      runtime_environment: cdktf.stringToTerraform(this._runtimeEnvironment),
      service_execution_role: cdktf.stringToTerraform(this._serviceExecutionRole),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform)(this._applicationConfiguration),
      cloudwatch_logging_options: cdktf.listMapper(kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform)(this._cloudwatchLoggingOptions),
    };
  }
}
