// https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
  readonly destination: string;
  readonly destinationId?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly versionId?: string;
  /** elasticsearch_configuration block */
  readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[];
  /** extended_s3_configuration block */
  readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration[];
  /** kinesis_source_configuration block */
  readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[];
  /** redshift_configuration block */
  readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration[];
  /** s3_configuration block */
  readonly s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration[];
  /** server_side_encryption block */
  readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption[];
  /** splunk_configuration block */
  readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}

function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}

function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[];
}

function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[];
}

function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisFirehoseDeliveryStreamElasticsearchConfiguration {
  readonly bufferingInterval?: number;
  readonly bufferingSize?: number;
  readonly domainArn: string;
  readonly indexName: string;
  readonly indexRotationPeriod?: string;
  readonly retryDuration?: number;
  readonly roleArn: string;
  readonly s3BackupMode?: string;
  readonly typeName?: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration[];
}

function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    domain_arn: cdktf.stringToTerraform(struct!.domainArn),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    index_rotation_period: cdktf.stringToTerraform(struct!.indexRotationPeriod),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
    processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
  readonly timestampFormats?: string[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct!.timestampFormats),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
  readonly caseInsensitive?: boolean;
  readonly columnToJsonKeyMappings?: { [key: string]: string };
  readonly convertDotsInJsonKeysToUnderscores?: boolean;
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    column_to_json_key_mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.columnToJsonKeyMappings),
    convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct!.convertDotsInJsonKeysToUnderscores),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
  /** hive_json_ser_de block */
  readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe[];
  /** open_x_json_ser_de block */
  readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hive_json_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform)(struct!.hiveJsonSerDe),
    open_x_json_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform)(struct!.openXJsonSerDe),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
  /** deserializer block */
  readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deserializer: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform)(struct!.deserializer),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
  readonly blockSizeBytes?: number;
  readonly bloomFilterColumns?: string[];
  readonly bloomFilterFalsePositiveProbability?: number;
  readonly compression?: string;
  readonly dictionaryKeyThreshold?: number;
  readonly enablePadding?: boolean;
  readonly formatVersion?: string;
  readonly paddingTolerance?: number;
  readonly rowIndexStride?: number;
  readonly stripeSizeBytes?: number;
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_size_bytes: cdktf.numberToTerraform(struct!.blockSizeBytes),
    bloom_filter_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bloomFilterColumns),
    bloom_filter_false_positive_probability: cdktf.numberToTerraform(struct!.bloomFilterFalsePositiveProbability),
    compression: cdktf.stringToTerraform(struct!.compression),
    dictionary_key_threshold: cdktf.numberToTerraform(struct!.dictionaryKeyThreshold),
    enable_padding: cdktf.booleanToTerraform(struct!.enablePadding),
    format_version: cdktf.stringToTerraform(struct!.formatVersion),
    padding_tolerance: cdktf.numberToTerraform(struct!.paddingTolerance),
    row_index_stride: cdktf.numberToTerraform(struct!.rowIndexStride),
    stripe_size_bytes: cdktf.numberToTerraform(struct!.stripeSizeBytes),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
  readonly blockSizeBytes?: number;
  readonly compression?: string;
  readonly enableDictionaryCompression?: boolean;
  readonly maxPaddingBytes?: number;
  readonly pageSizeBytes?: number;
  readonly writerVersion?: string;
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_size_bytes: cdktf.numberToTerraform(struct!.blockSizeBytes),
    compression: cdktf.stringToTerraform(struct!.compression),
    enable_dictionary_compression: cdktf.booleanToTerraform(struct!.enableDictionaryCompression),
    max_padding_bytes: cdktf.numberToTerraform(struct!.maxPaddingBytes),
    page_size_bytes: cdktf.numberToTerraform(struct!.pageSizeBytes),
    writer_version: cdktf.stringToTerraform(struct!.writerVersion),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
  /** orc_ser_de block */
  readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe[];
  /** parquet_ser_de block */
  readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    orc_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform)(struct!.orcSerDe),
    parquet_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform)(struct!.parquetSerDe),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
  /** serializer block */
  readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    serializer: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform)(struct!.serializer),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
  readonly catalogId?: string;
  readonly databaseName: string;
  readonly region?: string;
  readonly roleArn: string;
  readonly tableName: string;
  readonly versionId?: string;
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    version_id: cdktf.stringToTerraform(struct!.versionId),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration {
  readonly enabled?: boolean;
  /** input_format_configuration block */
  readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration[];
  /** output_format_configuration block */
  readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration[];
  /** schema_configuration block */
  readonly schemaConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    input_format_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform)(struct!.inputFormatConfiguration),
    output_format_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform)(struct!.outputFormatConfiguration),
    schema_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform)(struct!.schemaConfiguration),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration {
  readonly bucketArn: string;
  readonly bufferInterval?: number;
  readonly bufferSize?: number;
  readonly compressionFormat?: string;
  readonly kmsKeyArn?: string;
  readonly prefix?: string;
  readonly roleArn: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3Configuration {
  readonly bucketArn: string;
  readonly bufferInterval?: number;
  readonly bufferSize?: number;
  readonly compressionFormat?: string;
  readonly errorOutputPrefix?: string;
  readonly kmsKeyArn?: string;
  readonly prefix?: string;
  readonly roleArn: string;
  readonly s3BackupMode?: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions[];
  /** data_format_conversion_configuration block */
  readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration[];
  /** s3_backup_configuration block */
  readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
    data_format_conversion_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform)(struct!.dataFormatConversionConfiguration),
    processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
    s3_backup_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform)(struct!.s3BackupConfiguration),
  }
}

export interface KinesisFirehoseDeliveryStreamKinesisSourceConfiguration {
  readonly kinesisStreamArn: string;
  readonly roleArn: string;
}

function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kinesis_stream_arn: cdktf.stringToTerraform(struct!.kinesisStreamArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}

function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}

function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[];
}

function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[];
}

function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}

function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration {
  readonly bucketArn: string;
  readonly bufferInterval?: number;
  readonly bufferSize?: number;
  readonly compressionFormat?: string;
  readonly kmsKeyArn?: string;
  readonly prefix?: string;
  readonly roleArn: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions[];
}

function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
  }
}

export interface KinesisFirehoseDeliveryStreamRedshiftConfiguration {
  readonly clusterJdbcurl: string;
  readonly copyOptions?: string;
  readonly dataTableColumns?: string;
  readonly dataTableName: string;
  readonly password: string;
  readonly retryDuration?: number;
  readonly roleArn: string;
  readonly s3BackupMode?: string;
  readonly username: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration[];
  /** s3_backup_configuration block */
  readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration[];
}

function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_jdbcurl: cdktf.stringToTerraform(struct!.clusterJdbcurl),
    copy_options: cdktf.stringToTerraform(struct!.copyOptions),
    data_table_columns: cdktf.stringToTerraform(struct!.dataTableColumns),
    data_table_name: cdktf.stringToTerraform(struct!.dataTableName),
    password: cdktf.stringToTerraform(struct!.password),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    username: cdktf.stringToTerraform(struct!.username),
    cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
    processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
    s3_backup_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform)(struct!.s3BackupConfiguration),
  }
}

export interface KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}

function kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisFirehoseDeliveryStreamS3Configuration {
  readonly bucketArn: string;
  readonly bufferInterval?: number;
  readonly bufferSize?: number;
  readonly compressionFormat?: string;
  readonly kmsKeyArn?: string;
  readonly prefix?: string;
  readonly roleArn: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions[];
}

function kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
  }
}

export interface KinesisFirehoseDeliveryStreamServerSideEncryption {
  readonly enabled?: boolean;
}

function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}

function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}

function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[];
}

function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[];
}

function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisFirehoseDeliveryStreamSplunkConfiguration {
  readonly hecAcknowledgmentTimeout?: number;
  readonly hecEndpoint: string;
  readonly hecEndpointType?: string;
  readonly hecToken: string;
  readonly retryDuration?: number;
  readonly s3BackupMode?: string;
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration[];
}

function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hec_acknowledgment_timeout: cdktf.numberToTerraform(struct!.hecAcknowledgmentTimeout),
    hec_endpoint: cdktf.stringToTerraform(struct!.hecEndpoint),
    hec_endpoint_type: cdktf.stringToTerraform(struct!.hecEndpointType),
    hec_token: cdktf.stringToTerraform(struct!.hecToken),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
    processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
  }
}


// Resource

export class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KinesisFirehoseDeliveryStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_firehose_delivery_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destination = config.destination;
    this._destinationId = config.destinationId;
    this._name = config.name;
    this._tags = config.tags;
    this._versionId = config.versionId;
    this._elasticsearchConfiguration = config.elasticsearchConfiguration;
    this._extendedS3Configuration = config.extendedS3Configuration;
    this._kinesisSourceConfiguration = config.kinesisSourceConfiguration;
    this._redshiftConfiguration = config.redshiftConfiguration;
    this._s3Configuration = config.s3Configuration;
    this._serverSideEncryption = config.serverSideEncryption;
    this._splunkConfiguration = config.splunkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // destination - computed: false, optional: false, required: true
  private _destination: string;
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // destination_id - computed: true, optional: true, required: false
  private _destinationId?: string;
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId
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

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId
  }

  // elasticsearch_configuration - computed: false, optional: true, required: false
  private _elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[];
  public get elasticsearchConfiguration() {
    return this.interpolationForAttribute('elasticsearch_configuration') as any;
  }
  public set elasticsearchConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[] ) {
    this._elasticsearchConfiguration = value;
  }
  public resetElasticsearchConfiguration() {
    this._elasticsearchConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConfigurationInput() {
    return this._elasticsearchConfiguration
  }

  // extended_s3_configuration - computed: false, optional: true, required: false
  private _extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration[];
  public get extendedS3Configuration() {
    return this.interpolationForAttribute('extended_s3_configuration') as any;
  }
  public set extendedS3Configuration(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration[] ) {
    this._extendedS3Configuration = value;
  }
  public resetExtendedS3Configuration() {
    this._extendedS3Configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedS3ConfigurationInput() {
    return this._extendedS3Configuration
  }

  // kinesis_source_configuration - computed: false, optional: true, required: false
  private _kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[];
  public get kinesisSourceConfiguration() {
    return this.interpolationForAttribute('kinesis_source_configuration') as any;
  }
  public set kinesisSourceConfiguration(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[] ) {
    this._kinesisSourceConfiguration = value;
  }
  public resetKinesisSourceConfiguration() {
    this._kinesisSourceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisSourceConfigurationInput() {
    return this._kinesisSourceConfiguration
  }

  // redshift_configuration - computed: false, optional: true, required: false
  private _redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration[];
  public get redshiftConfiguration() {
    return this.interpolationForAttribute('redshift_configuration') as any;
  }
  public set redshiftConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration[] ) {
    this._redshiftConfiguration = value;
  }
  public resetRedshiftConfiguration() {
    this._redshiftConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigurationInput() {
    return this._redshiftConfiguration
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration[];
  public get s3Configuration() {
    return this.interpolationForAttribute('s3_configuration') as any;
  }
  public set s3Configuration(value: KinesisFirehoseDeliveryStreamS3Configuration[] ) {
    this._s3Configuration = value;
  }
  public resetS3Configuration() {
    this._s3Configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption[];
  public get serverSideEncryption() {
    return this.interpolationForAttribute('server_side_encryption') as any;
  }
  public set serverSideEncryption(value: KinesisFirehoseDeliveryStreamServerSideEncryption[] ) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption
  }

  // splunk_configuration - computed: false, optional: true, required: false
  private _splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration[];
  public get splunkConfiguration() {
    return this.interpolationForAttribute('splunk_configuration') as any;
  }
  public set splunkConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfiguration[] ) {
    this._splunkConfiguration = value;
  }
  public resetSplunkConfiguration() {
    this._splunkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkConfigurationInput() {
    return this._splunkConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktf.stringToTerraform(this._destination),
      destination_id: cdktf.stringToTerraform(this._destinationId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version_id: cdktf.stringToTerraform(this._versionId),
      elasticsearch_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform)(this._elasticsearchConfiguration),
      extended_s3_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform)(this._extendedS3Configuration),
      kinesis_source_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform)(this._kinesisSourceConfiguration),
      redshift_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform)(this._redshiftConfiguration),
      s3_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform)(this._s3Configuration),
      server_side_encryption: cdktf.listMapper(kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform)(this._serverSideEncryption),
      splunk_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform)(this._splunkConfiguration),
    };
  }
}
