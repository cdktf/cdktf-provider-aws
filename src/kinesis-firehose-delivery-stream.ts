// https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KinesisFirehoseDeliveryStreamConfig extends TerraformMetaArguments {
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
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[];
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
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
  readonly timestampFormats?: string[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
  readonly caseInsensitive?: boolean;
  readonly columnToJsonKeyMappings?: { [key: string]: string };
  readonly convertDotsInJsonKeysToUnderscores?: boolean;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
  /** hive_json_ser_de block */
  readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe[];
  /** open_x_json_ser_de block */
  readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
  /** deserializer block */
  readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer[];
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
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
  readonly blockSizeBytes?: number;
  readonly compression?: string;
  readonly enableDictionaryCompression?: boolean;
  readonly maxPaddingBytes?: number;
  readonly pageSizeBytes?: number;
  readonly writerVersion?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
  /** orc_ser_de block */
  readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe[];
  /** parquet_ser_de block */
  readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
  /** serializer block */
  readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
  readonly catalogId?: string;
  readonly databaseName: string;
  readonly region?: string;
  readonly roleArn: string;
  readonly tableName: string;
  readonly versionId?: string;
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
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
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
export interface KinesisFirehoseDeliveryStreamKinesisSourceConfiguration {
  readonly kinesisStreamArn: string;
  readonly roleArn: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
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
export interface KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
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
export interface KinesisFirehoseDeliveryStreamServerSideEncryption {
  readonly enabled?: boolean;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions {
  readonly enabled?: boolean;
  readonly logGroupName?: string;
  readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters {
  readonly parameterName: string;
  readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors {
  readonly type: string;
  /** parameters block */
  readonly parameters?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
  readonly enabled?: boolean;
  /** processors block */
  readonly processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[];
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

// Resource

export class KinesisFirehoseDeliveryStream extends TerraformResource {

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
      destination: this._destination,
      destination_id: this._destinationId,
      name: this._name,
      tags: this._tags,
      version_id: this._versionId,
      elasticsearch_configuration: this._elasticsearchConfiguration,
      extended_s3_configuration: this._extendedS3Configuration,
      kinesis_source_configuration: this._kinesisSourceConfiguration,
      redshift_configuration: this._redshiftConfiguration,
      s3_configuration: this._s3Configuration,
      server_side_encryption: this._serverSideEncryption,
      splunk_configuration: this._splunkConfiguration,
    };
  }
}
