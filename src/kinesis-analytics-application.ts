// https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisAnalyticsApplicationConfig extends cdktf.TerraformMetaArguments {
  readonly code?: string;
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** cloudwatch_logging_options block */
  readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions[];
  /** inputs block */
  readonly inputs?: KinesisAnalyticsApplicationInputs[];
  /** outputs block */
  readonly outputs?: KinesisAnalyticsApplicationOutputs[];
  /** reference_data_sources block */
  readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources[];
}
export interface KinesisAnalyticsApplicationCloudwatchLoggingOptions {
  readonly logStreamArn: string;
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
  readonly resourceArn: string;
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
  readonly resourceArn: string;
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
  readonly count: number;
}

function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct?: KinesisAnalyticsApplicationInputsParallelism): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export interface KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
  readonly resourceArn: string;
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
  /** lambda block */
  readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda[];
}

function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lambda: cdktf.listMapper(kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform)(struct!.lambda),
  }
}

export interface KinesisAnalyticsApplicationInputsSchemaRecordColumns {
  readonly mapping?: string;
  readonly name: string;
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
  readonly recordColumnDelimiter: string;
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
  readonly recordRowPath: string;
}

function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
  /** csv block */
  readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv[];
  /** json block */
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
  /** mapping_parameters block */
  readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters[];
}

function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
  }
}

export interface KinesisAnalyticsApplicationInputsSchema {
  readonly recordEncoding?: string;
  /** record_columns block */
  readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
  /** record_format block */
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

export interface KinesisAnalyticsApplicationInputs {
  readonly namePrefix: string;
  /** kinesis_firehose block */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose[];
  /** kinesis_stream block */
  readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream[];
  /** parallelism block */
  readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism[];
  /** processing_configuration block */
  readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration[];
  /** schema block */
  readonly schema: KinesisAnalyticsApplicationInputsSchema[];
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
  }
}

export interface KinesisAnalyticsApplicationOutputsKinesisFirehose {
  readonly resourceArn: string;
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
  readonly resourceArn: string;
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
  readonly resourceArn: string;
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
  readonly recordFormatType?: string;
}

function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationOutputsSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
  }
}

export interface KinesisAnalyticsApplicationOutputs {
  readonly name: string;
  /** kinesis_firehose block */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose[];
  /** kinesis_stream block */
  readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream[];
  /** lambda block */
  readonly lambda?: KinesisAnalyticsApplicationOutputsLambda[];
  /** schema block */
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
  readonly bucketArn: string;
  readonly fileKey: string;
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
  readonly mapping?: string;
  readonly name: string;
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
  readonly recordColumnDelimiter: string;
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
  readonly recordRowPath: string;
}

function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
  /** csv block */
  readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv[];
  /** json block */
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
  /** mapping_parameters block */
  readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters[];
}

function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesSchema {
  readonly recordEncoding?: string;
  /** record_columns block */
  readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
  /** record_format block */
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
  readonly tableName: string;
  /** s3 block */
  readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3[];
  /** schema block */
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


// Resource

export class KinesisAnalyticsApplication extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._tags = config.tags;
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      cloudwatch_logging_options: cdktf.listMapper(kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform)(this._cloudwatchLoggingOptions),
      inputs: cdktf.listMapper(kinesisAnalyticsApplicationInputsToTerraform)(this._inputs),
      outputs: cdktf.listMapper(kinesisAnalyticsApplicationOutputsToTerraform)(this._outputs),
      reference_data_sources: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesToTerraform)(this._referenceDataSources),
    };
  }
}
