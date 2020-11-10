// https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KinesisAnalyticsApplicationConfig extends TerraformMetaArguments {
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
export interface KinesisAnalyticsApplicationInputsKinesisFirehose {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsKinesisStream {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsParallelism {
  readonly count: number;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
  /** lambda block */
  readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda[];
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordColumns {
  readonly mapping?: string;
  readonly name: string;
  readonly sqlType: string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
  readonly recordColumnDelimiter: string;
  readonly recordRowDelimiter: string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
  readonly recordRowPath: string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
  /** csv block */
  readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv[];
  /** json block */
  readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson[];
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
  /** mapping_parameters block */
  readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters[];
}
export interface KinesisAnalyticsApplicationInputsSchema {
  readonly recordEncoding?: string;
  /** record_columns block */
  readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
  /** record_format block */
  readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat[];
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
export interface KinesisAnalyticsApplicationOutputsKinesisFirehose {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationOutputsKinesisStream {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationOutputsLambda {
  readonly resourceArn: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationOutputsSchema {
  readonly recordFormatType?: string;
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
export interface KinesisAnalyticsApplicationReferenceDataSourcesS3 {
  readonly bucketArn: string;
  readonly fileKey: string;
  readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns {
  readonly mapping?: string;
  readonly name: string;
  readonly sqlType: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
  readonly recordColumnDelimiter: string;
  readonly recordRowDelimiter: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
  readonly recordRowPath: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
  /** csv block */
  readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv[];
  /** json block */
  readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson[];
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
  /** mapping_parameters block */
  readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters[];
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchema {
  readonly recordEncoding?: string;
  /** record_columns block */
  readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
  /** record_format block */
  readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat[];
}
export interface KinesisAnalyticsApplicationReferenceDataSources {
  readonly tableName: string;
  /** s3 block */
  readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3[];
  /** schema block */
  readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema[];
}

// Resource

export class KinesisAnalyticsApplication extends TerraformResource {

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
      code: this._code,
      description: this._description,
      name: this._name,
      tags: this._tags,
      cloudwatch_logging_options: this._cloudwatchLoggingOptions,
      inputs: this._inputs,
      outputs: this._outputs,
      reference_data_sources: this._referenceDataSources,
    };
  }
}
