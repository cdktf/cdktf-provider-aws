// https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Kinesisanalyticsv2ApplicationConfig extends TerraformMetaArguments {
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
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {
  readonly textContent?: string;
  /** s3_content_location block */
  readonly s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration {
  readonly codeContentType: string;
  /** code_content block */
  readonly codeContent?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {
  readonly snapshotsEnabled: boolean;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup {
  readonly propertyGroupId: string;
  readonly propertyMap: { [key: string]: string };
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {
  /** property_group block */
  readonly propertyGroup: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
  readonly checkpointInterval?: number;
  readonly checkpointingEnabled?: boolean;
  readonly configurationType: string;
  readonly minPauseBetweenCheckpoints?: number;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {
  readonly configurationType: string;
  readonly logLevel?: string;
  readonly metricsLevel?: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {
  readonly autoScalingEnabled?: boolean;
  readonly configurationType: string;
  readonly parallelism?: number;
  readonly parallelismPerKpu?: number;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {
  /** checkpoint_configuration block */
  readonly checkpointConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration[];
  /** monitoring_configuration block */
  readonly monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration[];
  /** parallelism_configuration block */
  readonly parallelismConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism {
  readonly count?: number;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor {
  readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration {
  /** input_lambda_processor block */
  readonly inputLambdaProcessor: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn {
  readonly mapping?: string;
  readonly name: string;
  readonly sqlType: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters {
  readonly recordColumnDelimiter: string;
  readonly recordRowDelimiter: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters {
  readonly recordRowPath: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters {
  /** csv_mapping_parameters block */
  readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters[];
  /** json_mapping_parameters block */
  readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat {
  readonly recordFormatType: string;
  /** mapping_parameters block */
  readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema {
  readonly recordEncoding?: string;
  /** record_column block */
  readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[];
  /** record_format block */
  readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput {
  readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput {
  readonly resourceArn: string;
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
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema {
  readonly recordFormatType: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput {
  readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput {
  readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput {
  readonly resourceArn: string;
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
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn {
  readonly mapping?: string;
  readonly name: string;
  readonly sqlType: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters {
  readonly recordColumnDelimiter: string;
  readonly recordRowDelimiter: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters {
  readonly recordRowPath: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters {
  /** csv_mapping_parameters block */
  readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters[];
  /** json_mapping_parameters block */
  readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat {
  readonly recordFormatType: string;
  /** mapping_parameters block */
  readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema {
  readonly recordEncoding?: string;
  /** record_column block */
  readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[];
  /** record_format block */
  readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource {
  readonly bucketArn: string;
  readonly fileKey: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource {
  readonly tableName: string;
  /** reference_schema block */
  readonly referenceSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema[];
  /** s3_reference_data_source block */
  readonly s3ReferenceDataSource: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration {
  /** input block */
  readonly input?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput[];
  /** output block */
  readonly output?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[];
  /** reference_data_source block */
  readonly referenceDataSource?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration {
  readonly securityGroupIds: string[];
  readonly subnetIds: string[];
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
export interface Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions {
  readonly logStreamArn: string;
}

// Resource

export class Kinesisanalyticsv2Application extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // create_timestamp - computed: true, optional: false, required: true
  public get createTimestamp() {
    return this.getStringAttribute('create_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_update_timestamp - computed: true, optional: false, required: true
  public get lastUpdateTimestamp() {
    return this.getStringAttribute('last_update_timestamp');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // runtime_environment - computed: false, optional: false, required: true
  private _runtimeEnvironment: string;
  public get runtimeEnvironment() {
    return this._runtimeEnvironment;
  }
  public set runtimeEnvironment(value: string) {
    this._runtimeEnvironment = value;
  }

  // service_execution_role - computed: false, optional: false, required: true
  private _serviceExecutionRole: string;
  public get serviceExecutionRole() {
    return this._serviceExecutionRole;
  }
  public set serviceExecutionRole(value: string) {
    this._serviceExecutionRole = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version_id - computed: true, optional: false, required: true
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration[];
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public set applicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfiguration[] | undefined) {
    this._applicationConfiguration = value;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[];
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public set cloudwatchLoggingOptions(value: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[] | undefined) {
    this._cloudwatchLoggingOptions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      runtime_environment: this._runtimeEnvironment,
      service_execution_role: this._serviceExecutionRole,
      tags: this._tags,
      application_configuration: this._applicationConfiguration,
      cloudwatch_logging_options: this._cloudwatchLoggingOptions,
    };
  }
}
