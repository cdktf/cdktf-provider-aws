// https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisAnalyticsApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#code KinesisAnalyticsApplication#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#description KinesisAnalyticsApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#start_application KinesisAnalyticsApplication#start_application}
  */
  readonly startApplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#tags KinesisAnalyticsApplication#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#tags_all KinesisAnalyticsApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions[];
  /**
  * inputs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#inputs KinesisAnalyticsApplication#inputs}
  */
  readonly inputs?: KinesisAnalyticsApplicationInputs[];
  /**
  * outputs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#outputs KinesisAnalyticsApplication#outputs}
  */
  readonly outputs?: KinesisAnalyticsApplicationOutputs[];
  /**
  * reference_data_sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}
  */
  readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources[];
}
export interface KinesisAnalyticsApplicationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}
  */
  readonly logStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct?: KinesisAnalyticsApplicationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_stream_arn: cdktf.stringToTerraform(struct!.logStreamArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisAnalyticsApplicationInputsKinesisFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisAnalyticsApplicationInputsKinesisStream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisStream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisAnalyticsApplicationInputsParallelism {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#count KinesisAnalyticsApplication#count}
  */
  readonly count?: number;
}

function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct?: KinesisAnalyticsApplicationInputsParallelism): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export interface KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
  /**
  * lambda block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
  */
  readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda[];
}

function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lambda: cdktf.listMapper(kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform)(struct!.lambda),
  }
}

export interface KinesisAnalyticsApplicationInputsSchemaRecordColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping KinesisAnalyticsApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#sql_type KinesisAnalyticsApplication#sql_type}
  */
  readonly sqlType: string;
}

function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mapping: cdktf.stringToTerraform(struct!.mapping),
    name: cdktf.stringToTerraform(struct!.name),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
  }
}

export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}

function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
  }
}

export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
  */
  readonly recordRowPath: string;
}

function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
  /**
  * csv block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
  */
  readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv[];
  /**
  * json block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
  */
  readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson[];
}

function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform)(struct!.csv),
    json: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform)(struct!.json),
  }
}

export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
  /**
  * mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
  */
  readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters[];
}

function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
  }
}

export interface KinesisAnalyticsApplicationInputsSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_encoding KinesisAnalyticsApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_columns KinesisAnalyticsApplication#record_columns}
  */
  readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
  /**
  * record_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format KinesisAnalyticsApplication#record_format}
  */
  readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat[];
}

function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationInputsSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
    record_columns: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform)(struct!.recordColumns),
    record_format: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform)(struct!.recordFormat),
  }
}

export interface KinesisAnalyticsApplicationInputsStartingPositionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position KinesisAnalyticsApplication#starting_position}
  */
  readonly startingPosition?: string;
}

function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    starting_position: cdktf.stringToTerraform(struct!.startingPosition),
  }
}

export interface KinesisAnalyticsApplicationInputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name_prefix KinesisAnalyticsApplication#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * kinesis_firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
  */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose[];
  /**
  * kinesis_stream block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
  */
  readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream[];
  /**
  * parallelism block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#parallelism KinesisAnalyticsApplication#parallelism}
  */
  readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism[];
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#processing_configuration KinesisAnalyticsApplication#processing_configuration}
  */
  readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration[];
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
  */
  readonly schema: KinesisAnalyticsApplicationInputsSchema[];
  /**
  * starting_position_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}
  */
  readonly startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
}

function kinesisAnalyticsApplicationInputsToTerraform(struct?: KinesisAnalyticsApplicationInputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    kinesis_firehose: cdktf.listMapper(kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform)(struct!.kinesisFirehose),
    kinesis_stream: cdktf.listMapper(kinesisAnalyticsApplicationInputsKinesisStreamToTerraform)(struct!.kinesisStream),
    parallelism: cdktf.listMapper(kinesisAnalyticsApplicationInputsParallelismToTerraform)(struct!.parallelism),
    processing_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform)(struct!.processingConfiguration),
    schema: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaToTerraform)(struct!.schema),
    starting_position_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform)(struct!.startingPositionConfiguration),
  }
}

export interface KinesisAnalyticsApplicationOutputsKinesisFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisAnalyticsApplicationOutputsKinesisStream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisStream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisAnalyticsApplicationOutputsLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct?: KinesisAnalyticsApplicationOutputsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisAnalyticsApplicationOutputsSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format_type KinesisAnalyticsApplication#record_format_type}
  */
  readonly recordFormatType: string;
}

function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationOutputsSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
  }
}

export interface KinesisAnalyticsApplicationOutputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * kinesis_firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
  */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose[];
  /**
  * kinesis_stream block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
  */
  readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream[];
  /**
  * lambda block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
  */
  readonly lambda?: KinesisAnalyticsApplicationOutputsLambda[];
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
  */
  readonly schema: KinesisAnalyticsApplicationOutputsSchema[];
}

function kinesisAnalyticsApplicationOutputsToTerraform(struct?: KinesisAnalyticsApplicationOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    kinesis_firehose: cdktf.listMapper(kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform)(struct!.kinesisFirehose),
    kinesis_stream: cdktf.listMapper(kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform)(struct!.kinesisStream),
    lambda: cdktf.listMapper(kinesisAnalyticsApplicationOutputsLambdaToTerraform)(struct!.lambda),
    schema: cdktf.listMapper(kinesisAnalyticsApplicationOutputsSchemaToTerraform)(struct!.schema),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#bucket_arn KinesisAnalyticsApplication#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#file_key KinesisAnalyticsApplication#file_key}
  */
  readonly fileKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    file_key: cdktf.stringToTerraform(struct!.fileKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping KinesisAnalyticsApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#sql_type KinesisAnalyticsApplication#sql_type}
  */
  readonly sqlType: string;
}

function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mapping: cdktf.stringToTerraform(struct!.mapping),
    name: cdktf.stringToTerraform(struct!.name),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}

function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
  */
  readonly recordRowPath: string;
}

function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
  /**
  * csv block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
  */
  readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv[];
  /**
  * json block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
  */
  readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson[];
}

function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform)(struct!.csv),
    json: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform)(struct!.json),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
  /**
  * mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
  */
  readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters[];
}

function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_encoding KinesisAnalyticsApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_columns KinesisAnalyticsApplication#record_columns}
  */
  readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
  /**
  * record_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format KinesisAnalyticsApplication#record_format}
  */
  readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat[];
}

function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
    record_columns: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform)(struct!.recordColumns),
    record_format: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform)(struct!.recordFormat),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#table_name KinesisAnalyticsApplication#table_name}
  */
  readonly tableName: string;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#s3 KinesisAnalyticsApplication#s3}
  */
  readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3[];
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
  */
  readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema[];
}

function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
    s3: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform)(struct!.s3),
    schema: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform)(struct!.schema),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application}
*/
export class KinesisAnalyticsApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kinesis_analytics_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisAnalyticsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: KinesisAnalyticsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_analytics_application',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._code = config.code;
    this._description = config.description;
    this._name = config.name;
    this._startApplication = config.startApplication;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cloudwatchLoggingOptions = config.cloudwatchLoggingOptions;
    this._inputs = config.inputs;
    this._outputs = config.outputs;
    this._referenceDataSources = config.referenceDataSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code - computed: false, optional: true, required: false
  private _code?: string;
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string ) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions[];
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }
  public set cloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions[] ) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs?: KinesisAnalyticsApplicationInputs[];
  public get inputs() {
    return this.interpolationForAttribute('inputs') as any;
  }
  public set inputs(value: KinesisAnalyticsApplicationInputs[] ) {
    this._inputs = value;
  }
  public resetInputs() {
    this._inputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs?: KinesisAnalyticsApplicationOutputs[];
  public get outputs() {
    return this.interpolationForAttribute('outputs') as any;
  }
  public set outputs(value: KinesisAnalyticsApplicationOutputs[] ) {
    this._outputs = value;
  }
  public resetOutputs() {
    this._outputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs
  }

  // reference_data_sources - computed: false, optional: true, required: false
  private _referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources[];
  public get referenceDataSources() {
    return this.interpolationForAttribute('reference_data_sources') as any;
  }
  public set referenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources[] ) {
    this._referenceDataSources = value;
  }
  public resetReferenceDataSources() {
    this._referenceDataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceDataSourcesInput() {
    return this._referenceDataSources
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code: cdktf.stringToTerraform(this._code),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      start_application: cdktf.booleanToTerraform(this._startApplication),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      cloudwatch_logging_options: cdktf.listMapper(kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform)(this._cloudwatchLoggingOptions),
      inputs: cdktf.listMapper(kinesisAnalyticsApplicationInputsToTerraform)(this._inputs),
      outputs: cdktf.listMapper(kinesisAnalyticsApplicationOutputsToTerraform)(this._outputs),
      reference_data_sources: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesToTerraform)(this._referenceDataSources),
    };
  }
}
