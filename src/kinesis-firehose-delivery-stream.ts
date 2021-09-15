// https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#destination KinesisFirehoseDeliveryStream#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#destination_id KinesisFirehoseDeliveryStream#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#tags KinesisFirehoseDeliveryStream#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#tags_all KinesisFirehoseDeliveryStream#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#version_id KinesisFirehoseDeliveryStream#version_id}
  */
  readonly versionId?: string;
  /**
  * elasticsearch_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#elasticsearch_configuration KinesisFirehoseDeliveryStream#elasticsearch_configuration}
  */
  readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[];
  /**
  * extended_s3_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#extended_s3_configuration KinesisFirehoseDeliveryStream#extended_s3_configuration}
  */
  readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration[];
  /**
  * http_endpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#http_endpoint_configuration KinesisFirehoseDeliveryStream#http_endpoint_configuration}
  */
  readonly httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[];
  /**
  * kinesis_source_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_source_configuration KinesisFirehoseDeliveryStream#kinesis_source_configuration}
  */
  readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[];
  /**
  * redshift_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#redshift_configuration KinesisFirehoseDeliveryStream#redshift_configuration}
  */
  readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration[];
  /**
  * s3_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration[];
  /**
  * server_side_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#server_side_encryption KinesisFirehoseDeliveryStream#server_side_encryption}
  */
  readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption[];
  /**
  * splunk_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#splunk_configuration KinesisFirehoseDeliveryStream#splunk_configuration}
  */
  readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[];
}

function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
  */
  readonly subnetIds: string[];
}

function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export interface KinesisFirehoseDeliveryStreamElasticsearchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cluster_endpoint KinesisFirehoseDeliveryStream#cluster_endpoint}
  */
  readonly clusterEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#domain_arn KinesisFirehoseDeliveryStream#domain_arn}
  */
  readonly domainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#index_name KinesisFirehoseDeliveryStream#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#index_rotation_period KinesisFirehoseDeliveryStream#index_rotation_period}
  */
  readonly indexRotationPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type_name KinesisFirehoseDeliveryStream#type_name}
  */
  readonly typeName?: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions[];
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration[];
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
  */
  readonly vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig[];
}

function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    cluster_endpoint: cdktf.stringToTerraform(struct!.clusterEndpoint),
    domain_arn: cdktf.stringToTerraform(struct!.domainArn),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    index_rotation_period: cdktf.stringToTerraform(struct!.indexRotationPeriod),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
    processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
    vpc_config: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform)(struct!.vpcConfig),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#timestamp_formats KinesisFirehoseDeliveryStream#timestamp_formats}
  */
  readonly timestampFormats?: string[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct!.timestampFormats),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#case_insensitive KinesisFirehoseDeliveryStream#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#column_to_json_key_mappings KinesisFirehoseDeliveryStream#column_to_json_key_mappings}
  */
  readonly columnToJsonKeyMappings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#convert_dots_in_json_keys_to_underscores KinesisFirehoseDeliveryStream#convert_dots_in_json_keys_to_underscores}
  */
  readonly convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable;
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
  /**
  * hive_json_ser_de block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hive_json_ser_de KinesisFirehoseDeliveryStream#hive_json_ser_de}
  */
  readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe[];
  /**
  * open_x_json_ser_de block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#open_x_json_ser_de KinesisFirehoseDeliveryStream#open_x_json_ser_de}
  */
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
  /**
  * deserializer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#deserializer KinesisFirehoseDeliveryStream#deserializer}
  */
  readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deserializer: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform)(struct!.deserializer),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bloom_filter_columns KinesisFirehoseDeliveryStream#bloom_filter_columns}
  */
  readonly bloomFilterColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bloom_filter_false_positive_probability KinesisFirehoseDeliveryStream#bloom_filter_false_positive_probability}
  */
  readonly bloomFilterFalsePositiveProbability?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression KinesisFirehoseDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#dictionary_key_threshold KinesisFirehoseDeliveryStream#dictionary_key_threshold}
  */
  readonly dictionaryKeyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enable_padding KinesisFirehoseDeliveryStream#enable_padding}
  */
  readonly enablePadding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#format_version KinesisFirehoseDeliveryStream#format_version}
  */
  readonly formatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#padding_tolerance KinesisFirehoseDeliveryStream#padding_tolerance}
  */
  readonly paddingTolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#row_index_stride KinesisFirehoseDeliveryStream#row_index_stride}
  */
  readonly rowIndexStride?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#stripe_size_bytes KinesisFirehoseDeliveryStream#stripe_size_bytes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression KinesisFirehoseDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enable_dictionary_compression KinesisFirehoseDeliveryStream#enable_dictionary_compression}
  */
  readonly enableDictionaryCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#max_padding_bytes KinesisFirehoseDeliveryStream#max_padding_bytes}
  */
  readonly maxPaddingBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#page_size_bytes KinesisFirehoseDeliveryStream#page_size_bytes}
  */
  readonly pageSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#writer_version KinesisFirehoseDeliveryStream#writer_version}
  */
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
  /**
  * orc_ser_de block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#orc_ser_de KinesisFirehoseDeliveryStream#orc_ser_de}
  */
  readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe[];
  /**
  * parquet_ser_de block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parquet_ser_de KinesisFirehoseDeliveryStream#parquet_ser_de}
  */
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
  /**
  * serializer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#serializer KinesisFirehoseDeliveryStream#serializer}
  */
  readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer[];
}

function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    serializer: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform)(struct!.serializer),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#catalog_id KinesisFirehoseDeliveryStream#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#database_name KinesisFirehoseDeliveryStream#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#region KinesisFirehoseDeliveryStream#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#table_name KinesisFirehoseDeliveryStream#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#version_id KinesisFirehoseDeliveryStream#version_id}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * input_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#input_format_configuration KinesisFirehoseDeliveryStream#input_format_configuration}
  */
  readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration[];
  /**
  * output_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#output_format_configuration KinesisFirehoseDeliveryStream#output_format_configuration}
  */
  readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration[];
  /**
  * schema_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#schema_configuration KinesisFirehoseDeliveryStream#schema_configuration}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
  */
  readonly bufferInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
  */
  readonly bufferInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions[];
  /**
  * data_format_conversion_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_format_conversion_configuration KinesisFirehoseDeliveryStream#data_format_conversion_configuration}
  */
  readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration[];
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration[];
  /**
  * s3_backup_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
  */
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

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[];
}

function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[];
}

function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#value KinesisFirehoseDeliveryStream#value}
  */
  readonly value: string;
}

function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#content_encoding KinesisFirehoseDeliveryStream#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * common_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#common_attributes KinesisFirehoseDeliveryStream#common_attributes}
  */
  readonly commonAttributes?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[];
}

function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
    common_attributes: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform)(struct!.commonAttributes),
  }
}

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#access_key KinesisFirehoseDeliveryStream#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#url KinesisFirehoseDeliveryStream#url}
  */
  readonly url: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions[];
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration[];
  /**
  * request_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#request_configuration KinesisFirehoseDeliveryStream#request_configuration}
  */
  readonly requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration[];
}

function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    name: cdktf.stringToTerraform(struct!.name),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    url: cdktf.stringToTerraform(struct!.url),
    cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
    processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
    request_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform)(struct!.requestConfiguration),
  }
}

export interface KinesisFirehoseDeliveryStreamKinesisSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_stream_arn KinesisFirehoseDeliveryStream#kinesis_stream_arn}
  */
  readonly kinesisStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
  */
  readonly bufferInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cluster_jdbcurl KinesisFirehoseDeliveryStream#cluster_jdbcurl}
  */
  readonly clusterJdbcurl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#copy_options KinesisFirehoseDeliveryStream#copy_options}
  */
  readonly copyOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_table_columns KinesisFirehoseDeliveryStream#data_table_columns}
  */
  readonly dataTableColumns?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_table_name KinesisFirehoseDeliveryStream#data_table_name}
  */
  readonly dataTableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#password KinesisFirehoseDeliveryStream#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#username KinesisFirehoseDeliveryStream#username}
  */
  readonly username: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions[];
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration[];
  /**
  * s3_backup_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
  */
  readonly bufferInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#key_arn KinesisFirehoseDeliveryStream#key_arn}
  */
  readonly keyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#key_type KinesisFirehoseDeliveryStream#key_type}
  */
  readonly keyType?: string;
}

function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export interface KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_acknowledgment_timeout KinesisFirehoseDeliveryStream#hec_acknowledgment_timeout}
  */
  readonly hecAcknowledgmentTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_endpoint KinesisFirehoseDeliveryStream#hec_endpoint}
  */
  readonly hecEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_endpoint_type KinesisFirehoseDeliveryStream#hec_endpoint_type}
  */
  readonly hecEndpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_token KinesisFirehoseDeliveryStream#hec_token}
  */
  readonly hecToken: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions[];
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}
*/
export class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kinesis_firehose_delivery_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisFirehoseDeliveryStreamConfig
  */
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
    this._tagsAll = config.tagsAll;
    this._versionId = config.versionId;
    this._elasticsearchConfiguration = config.elasticsearchConfiguration;
    this._extendedS3Configuration = config.extendedS3Configuration;
    this._httpEndpointConfiguration = config.httpEndpointConfiguration;
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

  // http_endpoint_configuration - computed: false, optional: true, required: false
  private _httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[];
  public get httpEndpointConfiguration() {
    return this.interpolationForAttribute('http_endpoint_configuration') as any;
  }
  public set httpEndpointConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[] ) {
    this._httpEndpointConfiguration = value;
  }
  public resetHttpEndpointConfiguration() {
    this._httpEndpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointConfigurationInput() {
    return this._httpEndpointConfiguration
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      version_id: cdktf.stringToTerraform(this._versionId),
      elasticsearch_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform)(this._elasticsearchConfiguration),
      extended_s3_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform)(this._extendedS3Configuration),
      http_endpoint_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform)(this._httpEndpointConfiguration),
      kinesis_source_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform)(this._kinesisSourceConfiguration),
      redshift_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform)(this._redshiftConfiguration),
      s3_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform)(this._s3Configuration),
      server_side_encryption: cdktf.listMapper(kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform)(this._serverSideEncryption),
      splunk_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform)(this._splunkConfiguration),
    };
  }
}
