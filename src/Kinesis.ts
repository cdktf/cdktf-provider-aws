// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Kinesis
*/
export namespace Kinesis {
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
    readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions;
    /**
    * inputs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#inputs KinesisAnalyticsApplication#inputs}
    */
    readonly inputs?: KinesisAnalyticsApplicationInputs;
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
    readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources;
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

  function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct?: KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference | KinesisAnalyticsApplicationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      log_stream_arn: cdktf.stringToTerraform(struct!.logStreamArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // log_stream_arn - computed: false, optional: false, required: true
    private _logStreamArn?: string; 
    public get logStreamArn() {
      return this.getStringAttribute('log_stream_arn');
    }
    public set logStreamArn(value: string) {
      this._logStreamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamArnInput() {
      return this._logStreamArn
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

  function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationInputsKinesisFirehose): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

  function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisStreamOutputReference | KinesisAnalyticsApplicationInputsKinesisStream): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class KinesisAnalyticsApplicationInputsKinesisStreamOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }
  }
  export interface KinesisAnalyticsApplicationInputsParallelism {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#count KinesisAnalyticsApplication#count}
    */
    readonly count?: number;
  }

  function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct?: KinesisAnalyticsApplicationInputsParallelismOutputReference | KinesisAnalyticsApplicationInputsParallelism): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      count: cdktf.numberToTerraform(struct!.count),
    }
  }

  export class KinesisAnalyticsApplicationInputsParallelismOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // count - computed: true, optional: true, required: false
    private _count?: number | undefined; 
    public get count() {
      return this.getNumberAttribute('count');
    }
    public set count(value: number | undefined) {
      this._count = value;
    }
    public resetCount() {
      this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
      return this._count
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

  function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference | KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }
  }
  export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
    /**
    * lambda block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
    */
    readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda;
  }

  function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference | KinesisAnalyticsApplicationInputsProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      lambda: kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct!.lambda),
    }
  }

  export class KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // lambda - computed: false, optional: false, required: true
    private _lambda?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda; 
    private __lambdaOutput = new KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference(this as any, "lambda", true);
    public get lambda() {
      return this.__lambdaOutput;
    }
    public putLambda(value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda) {
      this._lambda = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
      return this._lambda
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
      record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
    }
  }

  export class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_column_delimiter - computed: false, optional: false, required: true
    private _recordColumnDelimiter?: string; 
    public get recordColumnDelimiter() {
      return this.getStringAttribute('record_column_delimiter');
    }
    public set recordColumnDelimiter(value: string) {
      this._recordColumnDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordColumnDelimiterInput() {
      return this._recordColumnDelimiter
    }

    // record_row_delimiter - computed: false, optional: false, required: true
    private _recordRowDelimiter?: string; 
    public get recordRowDelimiter() {
      return this.getStringAttribute('record_row_delimiter');
    }
    public set recordRowDelimiter(value: string) {
      this._recordRowDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordRowDelimiterInput() {
      return this._recordRowDelimiter
    }
  }
  export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
    */
    readonly recordRowPath: string;
  }

  function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
    }
  }

  export class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_row_path - computed: false, optional: false, required: true
    private _recordRowPath?: string; 
    public get recordRowPath() {
      return this.getStringAttribute('record_row_path');
    }
    public set recordRowPath(value: string) {
      this._recordRowPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordRowPathInput() {
      return this._recordRowPath
    }
  }
  export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
    /**
    * csv block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
    */
    readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;
    /**
    * json block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
    */
    readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
  }

  function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      csv: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct!.csv),
      json: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct!.json),
    }
  }

  export class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // csv - computed: false, optional: true, required: false
    private _csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined; 
    private __csvOutput = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference(this as any, "csv", true);
    public get csv() {
      return this.__csvOutput;
    }
    public putCsv(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined) {
      this._csv = value;
    }
    public resetCsv() {
      this._csv = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvInput() {
      return this._csv
    }

    // json - computed: false, optional: true, required: false
    private _json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined; 
    private __jsonOutput = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference(this as any, "json", true);
    public get json() {
      return this.__jsonOutput;
    }
    public putJson(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined) {
      this._json = value;
    }
    public resetJson() {
      this._json = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonInput() {
      return this._json
    }
  }
  export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
    /**
    * mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
    */
    readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters;
  }

  function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormat): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      mapping_parameters: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct!.mappingParameters),
    }
  }

  export class KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // mapping_parameters - computed: false, optional: true, required: false
    private _mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined; 
    private __mappingParametersOutput = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference(this as any, "mapping_parameters", true);
    public get mappingParameters() {
      return this.__mappingParametersOutput;
    }
    public putMappingParameters(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined) {
      this._mappingParameters = value;
    }
    public resetMappingParameters() {
      this._mappingParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mappingParametersInput() {
      return this._mappingParameters
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
    readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat;
  }

  function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaOutputReference | KinesisAnalyticsApplicationInputsSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
      record_columns: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform)(struct!.recordColumns),
      record_format: kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct!.recordFormat),
    }
  }

  export class KinesisAnalyticsApplicationInputsSchemaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_encoding - computed: false, optional: true, required: false
    private _recordEncoding?: string | undefined; 
    public get recordEncoding() {
      return this.getStringAttribute('record_encoding');
    }
    public set recordEncoding(value: string | undefined) {
      this._recordEncoding = value;
    }
    public resetRecordEncoding() {
      this._recordEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordEncodingInput() {
      return this._recordEncoding
    }

    // record_columns - computed: false, optional: false, required: true
    private _recordColumns?: KinesisAnalyticsApplicationInputsSchemaRecordColumns[]; 
    public get recordColumns() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('record_columns') as any;
    }
    public set recordColumns(value: KinesisAnalyticsApplicationInputsSchemaRecordColumns[]) {
      this._recordColumns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordColumnsInput() {
      return this._recordColumns
    }

    // record_format - computed: false, optional: false, required: true
    private _recordFormat?: KinesisAnalyticsApplicationInputsSchemaRecordFormat; 
    private __recordFormatOutput = new KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference(this as any, "record_format", true);
    public get recordFormat() {
      return this.__recordFormatOutput;
    }
    public putRecordFormat(value: KinesisAnalyticsApplicationInputsSchemaRecordFormat) {
      this._recordFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFormatInput() {
      return this._recordFormat
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
    readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose;
    /**
    * kinesis_stream block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
    */
    readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream;
    /**
    * parallelism block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#parallelism KinesisAnalyticsApplication#parallelism}
    */
    readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism;
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#processing_configuration KinesisAnalyticsApplication#processing_configuration}
    */
    readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration;
    /**
    * schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationInputsSchema;
    /**
    * starting_position_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}
    */
    readonly startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
  }

  function kinesisAnalyticsApplicationInputsToTerraform(struct?: KinesisAnalyticsApplicationInputsOutputReference | KinesisAnalyticsApplicationInputs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
      kinesis_firehose: kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct!.kinesisFirehose),
      kinesis_stream: kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct!.kinesisStream),
      parallelism: kinesisAnalyticsApplicationInputsParallelismToTerraform(struct!.parallelism),
      processing_configuration: kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct!.processingConfiguration),
      schema: kinesisAnalyticsApplicationInputsSchemaToTerraform(struct!.schema),
      starting_position_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform)(struct!.startingPositionConfiguration),
    }
  }

  export class KinesisAnalyticsApplicationInputsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // name_prefix - computed: false, optional: false, required: true
    private _namePrefix?: string; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string) {
      this._namePrefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // kinesis_firehose - computed: false, optional: true, required: false
    private _kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose | undefined; 
    private __kinesisFirehoseOutput = new KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference(this as any, "kinesis_firehose", true);
    public get kinesisFirehose() {
      return this.__kinesisFirehoseOutput;
    }
    public putKinesisFirehose(value: KinesisAnalyticsApplicationInputsKinesisFirehose | undefined) {
      this._kinesisFirehose = value;
    }
    public resetKinesisFirehose() {
      this._kinesisFirehose = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisFirehoseInput() {
      return this._kinesisFirehose
    }

    // kinesis_stream - computed: false, optional: true, required: false
    private _kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream | undefined; 
    private __kinesisStreamOutput = new KinesisAnalyticsApplicationInputsKinesisStreamOutputReference(this as any, "kinesis_stream", true);
    public get kinesisStream() {
      return this.__kinesisStreamOutput;
    }
    public putKinesisStream(value: KinesisAnalyticsApplicationInputsKinesisStream | undefined) {
      this._kinesisStream = value;
    }
    public resetKinesisStream() {
      this._kinesisStream = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamInput() {
      return this._kinesisStream
    }

    // parallelism - computed: false, optional: true, required: false
    private _parallelism?: KinesisAnalyticsApplicationInputsParallelism | undefined; 
    private __parallelismOutput = new KinesisAnalyticsApplicationInputsParallelismOutputReference(this as any, "parallelism", true);
    public get parallelism() {
      return this.__parallelismOutput;
    }
    public putParallelism(value: KinesisAnalyticsApplicationInputsParallelism | undefined) {
      this._parallelism = value;
    }
    public resetParallelism() {
      this._parallelism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelismInput() {
      return this._parallelism
    }

    // processing_configuration - computed: false, optional: true, required: false
    private _processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined; 
    private __processingConfigurationOutput = new KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
    public get processingConfiguration() {
      return this.__processingConfigurationOutput;
    }
    public putProcessingConfiguration(value: KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined) {
      this._processingConfiguration = value;
    }
    public resetProcessingConfiguration() {
      this._processingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processingConfigurationInput() {
      return this._processingConfiguration
    }

    // schema - computed: false, optional: false, required: true
    private _schema?: KinesisAnalyticsApplicationInputsSchema; 
    private __schemaOutput = new KinesisAnalyticsApplicationInputsSchemaOutputReference(this as any, "schema", true);
    public get schema() {
      return this.__schemaOutput;
    }
    public putSchema(value: KinesisAnalyticsApplicationInputsSchema) {
      this._schema = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
      return this._schema
    }

    // starting_position_configuration - computed: false, optional: true, required: false
    private _startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | undefined; 
    public get startingPositionConfiguration() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('starting_position_configuration') as any;
    }
    public set startingPositionConfiguration(value: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | undefined) {
      this._startingPositionConfiguration = value;
    }
    public resetStartingPositionConfiguration() {
      this._startingPositionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionConfigurationInput() {
      return this._startingPositionConfiguration
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

  function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationOutputsKinesisFirehose): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

  function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference | KinesisAnalyticsApplicationOutputsKinesisStream): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

  function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct?: KinesisAnalyticsApplicationOutputsLambdaOutputReference | KinesisAnalyticsApplicationOutputsLambda): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class KinesisAnalyticsApplicationOutputsLambdaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }
  }
  export interface KinesisAnalyticsApplicationOutputsSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format_type KinesisAnalyticsApplication#record_format_type}
    */
    readonly recordFormatType: string;
  }

  function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationOutputsSchemaOutputReference | KinesisAnalyticsApplicationOutputsSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
    }
  }

  export class KinesisAnalyticsApplicationOutputsSchemaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_format_type - computed: false, optional: false, required: true
    private _recordFormatType?: string; 
    public get recordFormatType() {
      return this.getStringAttribute('record_format_type');
    }
    public set recordFormatType(value: string) {
      this._recordFormatType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFormatTypeInput() {
      return this._recordFormatType
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
    readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose;
    /**
    * kinesis_stream block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
    */
    readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream;
    /**
    * lambda block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
    */
    readonly lambda?: KinesisAnalyticsApplicationOutputsLambda;
    /**
    * schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationOutputsSchema;
  }

  function kinesisAnalyticsApplicationOutputsToTerraform(struct?: KinesisAnalyticsApplicationOutputs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      kinesis_firehose: kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct!.kinesisFirehose),
      kinesis_stream: kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct!.kinesisStream),
      lambda: kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct!.lambda),
      schema: kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct!.schema),
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

  function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference | KinesisAnalyticsApplicationReferenceDataSourcesS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      file_key: cdktf.stringToTerraform(struct!.fileKey),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_arn - computed: false, optional: false, required: true
    private _bucketArn?: string; 
    public get bucketArn() {
      return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
      this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
      return this._bucketArn
    }

    // file_key - computed: false, optional: false, required: true
    private _fileKey?: string; 
    public get fileKey() {
      return this.getStringAttribute('file_key');
    }
    public set fileKey(value: string) {
      this._fileKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileKeyInput() {
      return this._fileKey
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
      record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
    }
  }

  export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_column_delimiter - computed: false, optional: false, required: true
    private _recordColumnDelimiter?: string; 
    public get recordColumnDelimiter() {
      return this.getStringAttribute('record_column_delimiter');
    }
    public set recordColumnDelimiter(value: string) {
      this._recordColumnDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordColumnDelimiterInput() {
      return this._recordColumnDelimiter
    }

    // record_row_delimiter - computed: false, optional: false, required: true
    private _recordRowDelimiter?: string; 
    public get recordRowDelimiter() {
      return this.getStringAttribute('record_row_delimiter');
    }
    public set recordRowDelimiter(value: string) {
      this._recordRowDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordRowDelimiterInput() {
      return this._recordRowDelimiter
    }
  }
  export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
    */
    readonly recordRowPath: string;
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
    }
  }

  export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_row_path - computed: false, optional: false, required: true
    private _recordRowPath?: string; 
    public get recordRowPath() {
      return this.getStringAttribute('record_row_path');
    }
    public set recordRowPath(value: string) {
      this._recordRowPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordRowPathInput() {
      return this._recordRowPath
    }
  }
  export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
    /**
    * csv block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
    */
    readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
    /**
    * json block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
    */
    readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      csv: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct!.csv),
      json: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct!.json),
    }
  }

  export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // csv - computed: false, optional: true, required: false
    private _csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined; 
    private __csvOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference(this as any, "csv", true);
    public get csv() {
      return this.__csvOutput;
    }
    public putCsv(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined) {
      this._csv = value;
    }
    public resetCsv() {
      this._csv = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvInput() {
      return this._csv
    }

    // json - computed: false, optional: true, required: false
    private _json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined; 
    private __jsonOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference(this as any, "json", true);
    public get json() {
      return this.__jsonOutput;
    }
    public putJson(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined) {
      this._json = value;
    }
    public resetJson() {
      this._json = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonInput() {
      return this._json
    }
  }
  export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
    /**
    * mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
    */
    readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      mapping_parameters: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct!.mappingParameters),
    }
  }

  export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // mapping_parameters - computed: false, optional: true, required: false
    private _mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined; 
    private __mappingParametersOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference(this as any, "mapping_parameters", true);
    public get mappingParameters() {
      return this.__mappingParametersOutput;
    }
    public putMappingParameters(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined) {
      this._mappingParameters = value;
    }
    public resetMappingParameters() {
      this._mappingParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mappingParametersInput() {
      return this._mappingParameters
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
    readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
      record_columns: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform)(struct!.recordColumns),
      record_format: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct!.recordFormat),
    }
  }

  export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_encoding - computed: false, optional: true, required: false
    private _recordEncoding?: string | undefined; 
    public get recordEncoding() {
      return this.getStringAttribute('record_encoding');
    }
    public set recordEncoding(value: string | undefined) {
      this._recordEncoding = value;
    }
    public resetRecordEncoding() {
      this._recordEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordEncodingInput() {
      return this._recordEncoding
    }

    // record_columns - computed: false, optional: false, required: true
    private _recordColumns?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[]; 
    public get recordColumns() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('record_columns') as any;
    }
    public set recordColumns(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[]) {
      this._recordColumns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordColumnsInput() {
      return this._recordColumns
    }

    // record_format - computed: false, optional: false, required: true
    private _recordFormat?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat; 
    private __recordFormatOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference(this as any, "record_format", true);
    public get recordFormat() {
      return this.__recordFormatOutput;
    }
    public putRecordFormat(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat) {
      this._recordFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFormatInput() {
      return this._recordFormat
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
    readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3;
    /**
    * schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema;
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesOutputReference | KinesisAnalyticsApplicationReferenceDataSources): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      table_name: cdktf.stringToTerraform(struct!.tableName),
      s3: kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct!.s3),
      schema: kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct!.schema),
    }
  }

  export class KinesisAnalyticsApplicationReferenceDataSourcesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // table_name - computed: false, optional: false, required: true
    private _tableName?: string; 
    public get tableName() {
      return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
      this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
      return this._tableName
    }

    // s3 - computed: false, optional: false, required: true
    private _s3?: KinesisAnalyticsApplicationReferenceDataSourcesS3; 
    private __s3Output = new KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference(this as any, "s3", true);
    public get s3() {
      return this.__s3Output;
    }
    public putS3(value: KinesisAnalyticsApplicationReferenceDataSourcesS3) {
      this._s3 = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
      return this._s3
    }

    // schema - computed: false, optional: false, required: true
    private _schema?: KinesisAnalyticsApplicationReferenceDataSourcesSchema; 
    private __schemaOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference(this as any, "schema", true);
    public get schema() {
      return this.__schemaOutput;
    }
    public putSchema(value: KinesisAnalyticsApplicationReferenceDataSourcesSchema) {
      this._schema = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
      return this._schema
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
    private _code?: string | undefined; 
    public get code() {
      return this.getStringAttribute('code');
    }
    public set code(value: string | undefined) {
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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
    private _startApplication?: boolean | cdktf.IResolvable | undefined; 
    public get startApplication() {
      return this.getBooleanAttribute('start_application') as any;
    }
    public set startApplication(value: boolean | cdktf.IResolvable | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined) {
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
    private _inputs?: KinesisAnalyticsApplicationInputs | undefined; 
    private __inputsOutput = new KinesisAnalyticsApplicationInputsOutputReference(this as any, "inputs", true);
    public get inputs() {
      return this.__inputsOutput;
    }
    public putInputs(value: KinesisAnalyticsApplicationInputs | undefined) {
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
    private _outputs?: KinesisAnalyticsApplicationOutputs[] | undefined; 
    public get outputs() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('outputs') as any;
    }
    public set outputs(value: KinesisAnalyticsApplicationOutputs[] | undefined) {
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
    private _referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources | undefined; 
    private __referenceDataSourcesOutput = new KinesisAnalyticsApplicationReferenceDataSourcesOutputReference(this as any, "reference_data_sources", true);
    public get referenceDataSources() {
      return this.__referenceDataSourcesOutput;
    }
    public putReferenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources | undefined) {
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
        cloudwatch_logging_options: kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(this._cloudwatchLoggingOptions),
        inputs: kinesisAnalyticsApplicationInputsToTerraform(this._inputs),
        outputs: cdktf.listMapper(kinesisAnalyticsApplicationOutputsToTerraform)(this._outputs),
        reference_data_sources: kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(this._referenceDataSources),
      };
    }
  }
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
    readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration;
    /**
    * extended_s3_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#extended_s3_configuration KinesisFirehoseDeliveryStream#extended_s3_configuration}
    */
    readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration;
    /**
    * http_endpoint_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#http_endpoint_configuration KinesisFirehoseDeliveryStream#http_endpoint_configuration}
    */
    readonly httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration;
    /**
    * kinesis_source_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_source_configuration KinesisFirehoseDeliveryStream#kinesis_source_configuration}
    */
    readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration;
    /**
    * redshift_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#redshift_configuration KinesisFirehoseDeliveryStream#redshift_configuration}
    */
    readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration;
    /**
    * s3_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration;
    /**
    * server_side_encryption block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#server_side_encryption KinesisFirehoseDeliveryStream#server_side_encryption}
    */
    readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption;
    /**
    * splunk_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#splunk_configuration KinesisFirehoseDeliveryStream#splunk_configuration}
    */
    readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration;
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

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    }
  }

  export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_group_name - computed: false, optional: true, required: false
    private _logGroupName?: string | undefined; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string | undefined) {
      this._logGroupName = value;
    }
    public resetLogGroupName() {
      this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // log_stream_name - computed: false, optional: true, required: false
    private _logStreamName?: string | undefined; 
    public get logStreamName() {
      return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string | undefined) {
      this._logStreamName = value;
    }
    public resetLogStreamName() {
      this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
      return this._logStreamName
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
    }
  }

  export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // processors - computed: false, optional: true, required: false
    private _processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | undefined; 
    public get processors() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('processors') as any;
    }
    public set processors(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | undefined) {
      this._processors = value;
    }
    public resetProcessors() {
      this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processorsInput() {
      return this._processors
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

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }

  export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
      this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration;
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
    */
    readonly vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig;
  }

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
      cloudwatch_logging_options: kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
      processing_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
      vpc_config: kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct!.vpcConfig),
    }
  }

  export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // buffering_interval - computed: false, optional: true, required: false
    private _bufferingInterval?: number | undefined; 
    public get bufferingInterval() {
      return this.getNumberAttribute('buffering_interval');
    }
    public set bufferingInterval(value: number | undefined) {
      this._bufferingInterval = value;
    }
    public resetBufferingInterval() {
      this._bufferingInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferingIntervalInput() {
      return this._bufferingInterval
    }

    // buffering_size - computed: false, optional: true, required: false
    private _bufferingSize?: number | undefined; 
    public get bufferingSize() {
      return this.getNumberAttribute('buffering_size');
    }
    public set bufferingSize(value: number | undefined) {
      this._bufferingSize = value;
    }
    public resetBufferingSize() {
      this._bufferingSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferingSizeInput() {
      return this._bufferingSize
    }

    // cluster_endpoint - computed: false, optional: true, required: false
    private _clusterEndpoint?: string | undefined; 
    public get clusterEndpoint() {
      return this.getStringAttribute('cluster_endpoint');
    }
    public set clusterEndpoint(value: string | undefined) {
      this._clusterEndpoint = value;
    }
    public resetClusterEndpoint() {
      this._clusterEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterEndpointInput() {
      return this._clusterEndpoint
    }

    // domain_arn - computed: false, optional: true, required: false
    private _domainArn?: string | undefined; 
    public get domainArn() {
      return this.getStringAttribute('domain_arn');
    }
    public set domainArn(value: string | undefined) {
      this._domainArn = value;
    }
    public resetDomainArn() {
      this._domainArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainArnInput() {
      return this._domainArn
    }

    // index_name - computed: false, optional: false, required: true
    private _indexName?: string; 
    public get indexName() {
      return this.getStringAttribute('index_name');
    }
    public set indexName(value: string) {
      this._indexName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get indexNameInput() {
      return this._indexName
    }

    // index_rotation_period - computed: false, optional: true, required: false
    private _indexRotationPeriod?: string | undefined; 
    public get indexRotationPeriod() {
      return this.getStringAttribute('index_rotation_period');
    }
    public set indexRotationPeriod(value: string | undefined) {
      this._indexRotationPeriod = value;
    }
    public resetIndexRotationPeriod() {
      this._indexRotationPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexRotationPeriodInput() {
      return this._indexRotationPeriod
    }

    // retry_duration - computed: false, optional: true, required: false
    private _retryDuration?: number | undefined; 
    public get retryDuration() {
      return this.getNumberAttribute('retry_duration');
    }
    public set retryDuration(value: number | undefined) {
      this._retryDuration = value;
    }
    public resetRetryDuration() {
      this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryDurationInput() {
      return this._retryDuration
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // s3_backup_mode - computed: false, optional: true, required: false
    private _s3BackupMode?: string | undefined; 
    public get s3BackupMode() {
      return this.getStringAttribute('s3_backup_mode');
    }
    public set s3BackupMode(value: string | undefined) {
      this._s3BackupMode = value;
    }
    public resetS3BackupMode() {
      this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BackupModeInput() {
      return this._s3BackupMode
    }

    // type_name - computed: false, optional: true, required: false
    private _typeName?: string | undefined; 
    public get typeName() {
      return this.getStringAttribute('type_name');
    }
    public set typeName(value: string | undefined) {
      this._typeName = value;
    }
    public resetTypeName() {
      this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
      return this._typeName
    }

    // cloudwatch_logging_options - computed: false, optional: true, required: false
    private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined) {
      this._cloudwatchLoggingOptions = value;
    }
    public resetCloudwatchLoggingOptions() {
      this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingOptionsInput() {
      return this._cloudwatchLoggingOptions
    }

    // processing_configuration - computed: false, optional: true, required: false
    private _processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined; 
    private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
    public get processingConfiguration() {
      return this.__processingConfigurationOutput;
    }
    public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined) {
      this._processingConfiguration = value;
    }
    public resetProcessingConfiguration() {
      this._processingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processingConfigurationInput() {
      return this._processingConfiguration
    }

    // vpc_config - computed: false, optional: true, required: false
    private _vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined; 
    private __vpcConfigOutput = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference(this as any, "vpc_config", true);
    public get vpcConfig() {
      return this.__vpcConfigOutput;
    }
    public putVpcConfig(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined) {
      this._vpcConfig = value;
    }
    public resetVpcConfig() {
      this._vpcConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
      return this._vpcConfig
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_group_name - computed: false, optional: true, required: false
    private _logGroupName?: string | undefined; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string | undefined) {
      this._logGroupName = value;
    }
    public resetLogGroupName() {
      this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // log_stream_name - computed: false, optional: true, required: false
    private _logStreamName?: string | undefined; 
    public get logStreamName() {
      return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string | undefined) {
      this._logStreamName = value;
    }
    public resetLogStreamName() {
      this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
      return this._logStreamName
    }
  }
  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#timestamp_formats KinesisFirehoseDeliveryStream#timestamp_formats}
    */
    readonly timestampFormats?: string[];
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct!.timestampFormats),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // timestamp_formats - computed: false, optional: true, required: false
    private _timestampFormats?: string[] | undefined; 
    public get timestampFormats() {
      return this.getListAttribute('timestamp_formats');
    }
    public set timestampFormats(value: string[] | undefined) {
      this._timestampFormats = value;
    }
    public resetTimestampFormats() {
      this._timestampFormats = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampFormatsInput() {
      return this._timestampFormats
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
      column_to_json_key_mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.columnToJsonKeyMappings),
      convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct!.convertDotsInJsonKeysToUnderscores),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // case_insensitive - computed: false, optional: true, required: false
    private _caseInsensitive?: boolean | cdktf.IResolvable | undefined; 
    public get caseInsensitive() {
      return this.getBooleanAttribute('case_insensitive') as any;
    }
    public set caseInsensitive(value: boolean | cdktf.IResolvable | undefined) {
      this._caseInsensitive = value;
    }
    public resetCaseInsensitive() {
      this._caseInsensitive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseInsensitiveInput() {
      return this._caseInsensitive
    }

    // column_to_json_key_mappings - computed: false, optional: true, required: false
    private _columnToJsonKeyMappings?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get columnToJsonKeyMappings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('column_to_json_key_mappings') as any;
    }
    public set columnToJsonKeyMappings(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._columnToJsonKeyMappings = value;
    }
    public resetColumnToJsonKeyMappings() {
      this._columnToJsonKeyMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnToJsonKeyMappingsInput() {
      return this._columnToJsonKeyMappings
    }

    // convert_dots_in_json_keys_to_underscores - computed: false, optional: true, required: false
    private _convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable | undefined; 
    public get convertDotsInJsonKeysToUnderscores() {
      return this.getBooleanAttribute('convert_dots_in_json_keys_to_underscores') as any;
    }
    public set convertDotsInJsonKeysToUnderscores(value: boolean | cdktf.IResolvable | undefined) {
      this._convertDotsInJsonKeysToUnderscores = value;
    }
    public resetConvertDotsInJsonKeysToUnderscores() {
      this._convertDotsInJsonKeysToUnderscores = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get convertDotsInJsonKeysToUnderscoresInput() {
      return this._convertDotsInJsonKeysToUnderscores
    }
  }
  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
    /**
    * hive_json_ser_de block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hive_json_ser_de KinesisFirehoseDeliveryStream#hive_json_ser_de}
    */
    readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe;
    /**
    * open_x_json_ser_de block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#open_x_json_ser_de KinesisFirehoseDeliveryStream#open_x_json_ser_de}
    */
    readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe;
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      hive_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct!.hiveJsonSerDe),
      open_x_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct!.openXJsonSerDe),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // hive_json_ser_de - computed: false, optional: true, required: false
    private _hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined; 
    private __hiveJsonSerDeOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference(this as any, "hive_json_ser_de", true);
    public get hiveJsonSerDe() {
      return this.__hiveJsonSerDeOutput;
    }
    public putHiveJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined) {
      this._hiveJsonSerDe = value;
    }
    public resetHiveJsonSerDe() {
      this._hiveJsonSerDe = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiveJsonSerDeInput() {
      return this._hiveJsonSerDe
    }

    // open_x_json_ser_de - computed: false, optional: true, required: false
    private _openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined; 
    private __openXJsonSerDeOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference(this as any, "open_x_json_ser_de", true);
    public get openXJsonSerDe() {
      return this.__openXJsonSerDeOutput;
    }
    public putOpenXJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined) {
      this._openXJsonSerDe = value;
    }
    public resetOpenXJsonSerDe() {
      this._openXJsonSerDe = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openXJsonSerDeInput() {
      return this._openXJsonSerDe
    }
  }
  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
    /**
    * deserializer block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#deserializer KinesisFirehoseDeliveryStream#deserializer}
    */
    readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer;
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      deserializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct!.deserializer),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // deserializer - computed: false, optional: false, required: true
    private _deserializer?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer; 
    private __deserializerOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference(this as any, "deserializer", true);
    public get deserializer() {
      return this.__deserializerOutput;
    }
    public putDeserializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer) {
      this._deserializer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deserializerInput() {
      return this._deserializer
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // block_size_bytes - computed: false, optional: true, required: false
    private _blockSizeBytes?: number | undefined; 
    public get blockSizeBytes() {
      return this.getNumberAttribute('block_size_bytes');
    }
    public set blockSizeBytes(value: number | undefined) {
      this._blockSizeBytes = value;
    }
    public resetBlockSizeBytes() {
      this._blockSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockSizeBytesInput() {
      return this._blockSizeBytes
    }

    // bloom_filter_columns - computed: false, optional: true, required: false
    private _bloomFilterColumns?: string[] | undefined; 
    public get bloomFilterColumns() {
      return this.getListAttribute('bloom_filter_columns');
    }
    public set bloomFilterColumns(value: string[] | undefined) {
      this._bloomFilterColumns = value;
    }
    public resetBloomFilterColumns() {
      this._bloomFilterColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bloomFilterColumnsInput() {
      return this._bloomFilterColumns
    }

    // bloom_filter_false_positive_probability - computed: false, optional: true, required: false
    private _bloomFilterFalsePositiveProbability?: number | undefined; 
    public get bloomFilterFalsePositiveProbability() {
      return this.getNumberAttribute('bloom_filter_false_positive_probability');
    }
    public set bloomFilterFalsePositiveProbability(value: number | undefined) {
      this._bloomFilterFalsePositiveProbability = value;
    }
    public resetBloomFilterFalsePositiveProbability() {
      this._bloomFilterFalsePositiveProbability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bloomFilterFalsePositiveProbabilityInput() {
      return this._bloomFilterFalsePositiveProbability
    }

    // compression - computed: false, optional: true, required: false
    private _compression?: string | undefined; 
    public get compression() {
      return this.getStringAttribute('compression');
    }
    public set compression(value: string | undefined) {
      this._compression = value;
    }
    public resetCompression() {
      this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionInput() {
      return this._compression
    }

    // dictionary_key_threshold - computed: false, optional: true, required: false
    private _dictionaryKeyThreshold?: number | undefined; 
    public get dictionaryKeyThreshold() {
      return this.getNumberAttribute('dictionary_key_threshold');
    }
    public set dictionaryKeyThreshold(value: number | undefined) {
      this._dictionaryKeyThreshold = value;
    }
    public resetDictionaryKeyThreshold() {
      this._dictionaryKeyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dictionaryKeyThresholdInput() {
      return this._dictionaryKeyThreshold
    }

    // enable_padding - computed: false, optional: true, required: false
    private _enablePadding?: boolean | cdktf.IResolvable | undefined; 
    public get enablePadding() {
      return this.getBooleanAttribute('enable_padding') as any;
    }
    public set enablePadding(value: boolean | cdktf.IResolvable | undefined) {
      this._enablePadding = value;
    }
    public resetEnablePadding() {
      this._enablePadding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePaddingInput() {
      return this._enablePadding
    }

    // format_version - computed: false, optional: true, required: false
    private _formatVersion?: string | undefined; 
    public get formatVersion() {
      return this.getStringAttribute('format_version');
    }
    public set formatVersion(value: string | undefined) {
      this._formatVersion = value;
    }
    public resetFormatVersion() {
      this._formatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatVersionInput() {
      return this._formatVersion
    }

    // padding_tolerance - computed: false, optional: true, required: false
    private _paddingTolerance?: number | undefined; 
    public get paddingTolerance() {
      return this.getNumberAttribute('padding_tolerance');
    }
    public set paddingTolerance(value: number | undefined) {
      this._paddingTolerance = value;
    }
    public resetPaddingTolerance() {
      this._paddingTolerance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get paddingToleranceInput() {
      return this._paddingTolerance
    }

    // row_index_stride - computed: false, optional: true, required: false
    private _rowIndexStride?: number | undefined; 
    public get rowIndexStride() {
      return this.getNumberAttribute('row_index_stride');
    }
    public set rowIndexStride(value: number | undefined) {
      this._rowIndexStride = value;
    }
    public resetRowIndexStride() {
      this._rowIndexStride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rowIndexStrideInput() {
      return this._rowIndexStride
    }

    // stripe_size_bytes - computed: false, optional: true, required: false
    private _stripeSizeBytes?: number | undefined; 
    public get stripeSizeBytes() {
      return this.getNumberAttribute('stripe_size_bytes');
    }
    public set stripeSizeBytes(value: number | undefined) {
      this._stripeSizeBytes = value;
    }
    public resetStripeSizeBytes() {
      this._stripeSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stripeSizeBytesInput() {
      return this._stripeSizeBytes
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      block_size_bytes: cdktf.numberToTerraform(struct!.blockSizeBytes),
      compression: cdktf.stringToTerraform(struct!.compression),
      enable_dictionary_compression: cdktf.booleanToTerraform(struct!.enableDictionaryCompression),
      max_padding_bytes: cdktf.numberToTerraform(struct!.maxPaddingBytes),
      page_size_bytes: cdktf.numberToTerraform(struct!.pageSizeBytes),
      writer_version: cdktf.stringToTerraform(struct!.writerVersion),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // block_size_bytes - computed: false, optional: true, required: false
    private _blockSizeBytes?: number | undefined; 
    public get blockSizeBytes() {
      return this.getNumberAttribute('block_size_bytes');
    }
    public set blockSizeBytes(value: number | undefined) {
      this._blockSizeBytes = value;
    }
    public resetBlockSizeBytes() {
      this._blockSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockSizeBytesInput() {
      return this._blockSizeBytes
    }

    // compression - computed: false, optional: true, required: false
    private _compression?: string | undefined; 
    public get compression() {
      return this.getStringAttribute('compression');
    }
    public set compression(value: string | undefined) {
      this._compression = value;
    }
    public resetCompression() {
      this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionInput() {
      return this._compression
    }

    // enable_dictionary_compression - computed: false, optional: true, required: false
    private _enableDictionaryCompression?: boolean | cdktf.IResolvable | undefined; 
    public get enableDictionaryCompression() {
      return this.getBooleanAttribute('enable_dictionary_compression') as any;
    }
    public set enableDictionaryCompression(value: boolean | cdktf.IResolvable | undefined) {
      this._enableDictionaryCompression = value;
    }
    public resetEnableDictionaryCompression() {
      this._enableDictionaryCompression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDictionaryCompressionInput() {
      return this._enableDictionaryCompression
    }

    // max_padding_bytes - computed: false, optional: true, required: false
    private _maxPaddingBytes?: number | undefined; 
    public get maxPaddingBytes() {
      return this.getNumberAttribute('max_padding_bytes');
    }
    public set maxPaddingBytes(value: number | undefined) {
      this._maxPaddingBytes = value;
    }
    public resetMaxPaddingBytes() {
      this._maxPaddingBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPaddingBytesInput() {
      return this._maxPaddingBytes
    }

    // page_size_bytes - computed: false, optional: true, required: false
    private _pageSizeBytes?: number | undefined; 
    public get pageSizeBytes() {
      return this.getNumberAttribute('page_size_bytes');
    }
    public set pageSizeBytes(value: number | undefined) {
      this._pageSizeBytes = value;
    }
    public resetPageSizeBytes() {
      this._pageSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pageSizeBytesInput() {
      return this._pageSizeBytes
    }

    // writer_version - computed: false, optional: true, required: false
    private _writerVersion?: string | undefined; 
    public get writerVersion() {
      return this.getStringAttribute('writer_version');
    }
    public set writerVersion(value: string | undefined) {
      this._writerVersion = value;
    }
    public resetWriterVersion() {
      this._writerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writerVersionInput() {
      return this._writerVersion
    }
  }
  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
    /**
    * orc_ser_de block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#orc_ser_de KinesisFirehoseDeliveryStream#orc_ser_de}
    */
    readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe;
    /**
    * parquet_ser_de block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parquet_ser_de KinesisFirehoseDeliveryStream#parquet_ser_de}
    */
    readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe;
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      orc_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct!.orcSerDe),
      parquet_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct!.parquetSerDe),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // orc_ser_de - computed: false, optional: true, required: false
    private _orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined; 
    private __orcSerDeOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference(this as any, "orc_ser_de", true);
    public get orcSerDe() {
      return this.__orcSerDeOutput;
    }
    public putOrcSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined) {
      this._orcSerDe = value;
    }
    public resetOrcSerDe() {
      this._orcSerDe = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orcSerDeInput() {
      return this._orcSerDe
    }

    // parquet_ser_de - computed: false, optional: true, required: false
    private _parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined; 
    private __parquetSerDeOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference(this as any, "parquet_ser_de", true);
    public get parquetSerDe() {
      return this.__parquetSerDeOutput;
    }
    public putParquetSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined) {
      this._parquetSerDe = value;
    }
    public resetParquetSerDe() {
      this._parquetSerDe = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parquetSerDeInput() {
      return this._parquetSerDe
    }
  }
  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
    /**
    * serializer block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#serializer KinesisFirehoseDeliveryStream#serializer}
    */
    readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer;
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      serializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct!.serializer),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // serializer - computed: false, optional: false, required: true
    private _serializer?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer; 
    private __serializerOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference(this as any, "serializer", true);
    public get serializer() {
      return this.__serializerOutput;
    }
    public putSerializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer) {
      this._serializer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serializerInput() {
      return this._serializer
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      region: cdktf.stringToTerraform(struct!.region),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      table_name: cdktf.stringToTerraform(struct!.tableName),
      version_id: cdktf.stringToTerraform(struct!.versionId),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string | undefined; 
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string | undefined) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
      this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
      return this._databaseName
    }

    // region - computed: true, optional: true, required: false
    private _region?: string | undefined; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string | undefined) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // table_name - computed: false, optional: false, required: true
    private _tableName?: string; 
    public get tableName() {
      return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
      this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
      return this._tableName
    }

    // version_id - computed: false, optional: true, required: false
    private _versionId?: string | undefined; 
    public get versionId() {
      return this.getStringAttribute('version_id');
    }
    public set versionId(value: string | undefined) {
      this._versionId = value;
    }
    public resetVersionId() {
      this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionIdInput() {
      return this._versionId
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
    readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
    /**
    * output_format_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#output_format_configuration KinesisFirehoseDeliveryStream#output_format_configuration}
    */
    readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
    /**
    * schema_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#schema_configuration KinesisFirehoseDeliveryStream#schema_configuration}
    */
    readonly schemaConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration;
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      input_format_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct!.inputFormatConfiguration),
      output_format_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct!.outputFormatConfiguration),
      schema_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct!.schemaConfiguration),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // input_format_configuration - computed: false, optional: false, required: true
    private _inputFormatConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration; 
    private __inputFormatConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference(this as any, "input_format_configuration", true);
    public get inputFormatConfiguration() {
      return this.__inputFormatConfigurationOutput;
    }
    public putInputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration) {
      this._inputFormatConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputFormatConfigurationInput() {
      return this._inputFormatConfiguration
    }

    // output_format_configuration - computed: false, optional: false, required: true
    private _outputFormatConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration; 
    private __outputFormatConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference(this as any, "output_format_configuration", true);
    public get outputFormatConfiguration() {
      return this.__outputFormatConfigurationOutput;
    }
    public putOutputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration) {
      this._outputFormatConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatConfigurationInput() {
      return this._outputFormatConfiguration
    }

    // schema_configuration - computed: false, optional: false, required: true
    private _schemaConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration; 
    private __schemaConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference(this as any, "schema_configuration", true);
    public get schemaConfiguration() {
      return this.__schemaConfigurationOutput;
    }
    public putSchemaConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration) {
      this._schemaConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaConfigurationInput() {
      return this._schemaConfiguration
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // processors - computed: false, optional: true, required: false
    private _processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | undefined; 
    public get processors() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('processors') as any;
    }
    public set processors(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | undefined) {
      this._processors = value;
    }
    public resetProcessors() {
      this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processorsInput() {
      return this._processors
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_group_name - computed: false, optional: true, required: false
    private _logGroupName?: string | undefined; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string | undefined) {
      this._logGroupName = value;
    }
    public resetLogGroupName() {
      this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // log_stream_name - computed: false, optional: true, required: false
    private _logStreamName?: string | undefined; 
    public get logStreamName() {
      return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string | undefined) {
      this._logStreamName = value;
    }
    public resetLogStreamName() {
      this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
      return this._logStreamName
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
      buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
      compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_arn - computed: false, optional: false, required: true
    private _bucketArn?: string; 
    public get bucketArn() {
      return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
      this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
      return this._bucketArn
    }

    // buffer_interval - computed: false, optional: true, required: false
    private _bufferInterval?: number | undefined; 
    public get bufferInterval() {
      return this.getNumberAttribute('buffer_interval');
    }
    public set bufferInterval(value: number | undefined) {
      this._bufferInterval = value;
    }
    public resetBufferInterval() {
      this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferIntervalInput() {
      return this._bufferInterval
    }

    // buffer_size - computed: false, optional: true, required: false
    private _bufferSize?: number | undefined; 
    public get bufferSize() {
      return this.getNumberAttribute('buffer_size');
    }
    public set bufferSize(value: number | undefined) {
      this._bufferSize = value;
    }
    public resetBufferSize() {
      this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferSizeInput() {
      return this._bufferSize
    }

    // compression_format - computed: false, optional: true, required: false
    private _compressionFormat?: string | undefined; 
    public get compressionFormat() {
      return this.getStringAttribute('compression_format');
    }
    public set compressionFormat(value: string | undefined) {
      this._compressionFormat = value;
    }
    public resetCompressionFormat() {
      this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionFormatInput() {
      return this._compressionFormat
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // cloudwatch_logging_options - computed: false, optional: true, required: false
    private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined) {
      this._cloudwatchLoggingOptions = value;
    }
    public resetCloudwatchLoggingOptions() {
      this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingOptionsInput() {
      return this._cloudwatchLoggingOptions
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions;
    /**
    * data_format_conversion_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_format_conversion_configuration KinesisFirehoseDeliveryStream#data_format_conversion_configuration}
    */
    readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration;
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration;
    /**
    * s3_backup_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
    */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration;
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3Configuration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
      cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
      data_format_conversion_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct!.dataFormatConversionConfiguration),
      processing_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
      s3_backup_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct!.s3BackupConfiguration),
    }
  }

  export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_arn - computed: false, optional: false, required: true
    private _bucketArn?: string; 
    public get bucketArn() {
      return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
      this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
      return this._bucketArn
    }

    // buffer_interval - computed: false, optional: true, required: false
    private _bufferInterval?: number | undefined; 
    public get bufferInterval() {
      return this.getNumberAttribute('buffer_interval');
    }
    public set bufferInterval(value: number | undefined) {
      this._bufferInterval = value;
    }
    public resetBufferInterval() {
      this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferIntervalInput() {
      return this._bufferInterval
    }

    // buffer_size - computed: false, optional: true, required: false
    private _bufferSize?: number | undefined; 
    public get bufferSize() {
      return this.getNumberAttribute('buffer_size');
    }
    public set bufferSize(value: number | undefined) {
      this._bufferSize = value;
    }
    public resetBufferSize() {
      this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferSizeInput() {
      return this._bufferSize
    }

    // compression_format - computed: false, optional: true, required: false
    private _compressionFormat?: string | undefined; 
    public get compressionFormat() {
      return this.getStringAttribute('compression_format');
    }
    public set compressionFormat(value: string | undefined) {
      this._compressionFormat = value;
    }
    public resetCompressionFormat() {
      this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionFormatInput() {
      return this._compressionFormat
    }

    // error_output_prefix - computed: false, optional: true, required: false
    private _errorOutputPrefix?: string | undefined; 
    public get errorOutputPrefix() {
      return this.getStringAttribute('error_output_prefix');
    }
    public set errorOutputPrefix(value: string | undefined) {
      this._errorOutputPrefix = value;
    }
    public resetErrorOutputPrefix() {
      this._errorOutputPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorOutputPrefixInput() {
      return this._errorOutputPrefix
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // s3_backup_mode - computed: false, optional: true, required: false
    private _s3BackupMode?: string | undefined; 
    public get s3BackupMode() {
      return this.getStringAttribute('s3_backup_mode');
    }
    public set s3BackupMode(value: string | undefined) {
      this._s3BackupMode = value;
    }
    public resetS3BackupMode() {
      this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BackupModeInput() {
      return this._s3BackupMode
    }

    // cloudwatch_logging_options - computed: false, optional: true, required: false
    private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined) {
      this._cloudwatchLoggingOptions = value;
    }
    public resetCloudwatchLoggingOptions() {
      this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingOptionsInput() {
      return this._cloudwatchLoggingOptions
    }

    // data_format_conversion_configuration - computed: false, optional: true, required: false
    private _dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined; 
    private __dataFormatConversionConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference(this as any, "data_format_conversion_configuration", true);
    public get dataFormatConversionConfiguration() {
      return this.__dataFormatConversionConfigurationOutput;
    }
    public putDataFormatConversionConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined) {
      this._dataFormatConversionConfiguration = value;
    }
    public resetDataFormatConversionConfiguration() {
      this._dataFormatConversionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFormatConversionConfigurationInput() {
      return this._dataFormatConversionConfiguration
    }

    // processing_configuration - computed: false, optional: true, required: false
    private _processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined; 
    private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
    public get processingConfiguration() {
      return this.__processingConfigurationOutput;
    }
    public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined) {
      this._processingConfiguration = value;
    }
    public resetProcessingConfiguration() {
      this._processingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processingConfigurationInput() {
      return this._processingConfiguration
    }

    // s3_backup_configuration - computed: false, optional: true, required: false
    private _s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined; 
    private __s3BackupConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference(this as any, "s3_backup_configuration", true);
    public get s3BackupConfiguration() {
      return this.__s3BackupConfigurationOutput;
    }
    public putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined) {
      this._s3BackupConfiguration = value;
    }
    public resetS3BackupConfiguration() {
      this._s3BackupConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BackupConfigurationInput() {
      return this._s3BackupConfiguration
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

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    }
  }

  export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_group_name - computed: false, optional: true, required: false
    private _logGroupName?: string | undefined; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string | undefined) {
      this._logGroupName = value;
    }
    public resetLogGroupName() {
      this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // log_stream_name - computed: false, optional: true, required: false
    private _logStreamName?: string | undefined; 
    public get logStreamName() {
      return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string | undefined) {
      this._logStreamName = value;
    }
    public resetLogStreamName() {
      this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
      return this._logStreamName
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
    }
  }

  export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // processors - computed: false, optional: true, required: false
    private _processors?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | undefined; 
    public get processors() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('processors') as any;
    }
    public set processors(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | undefined) {
      this._processors = value;
    }
    public resetProcessors() {
      this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processorsInput() {
      return this._processors
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
      common_attributes: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform)(struct!.commonAttributes),
    }
  }

  export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // content_encoding - computed: false, optional: true, required: false
    private _contentEncoding?: string | undefined; 
    public get contentEncoding() {
      return this.getStringAttribute('content_encoding');
    }
    public set contentEncoding(value: string | undefined) {
      this._contentEncoding = value;
    }
    public resetContentEncoding() {
      this._contentEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentEncodingInput() {
      return this._contentEncoding
    }

    // common_attributes - computed: false, optional: true, required: false
    private _commonAttributes?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | undefined; 
    public get commonAttributes() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('common_attributes') as any;
    }
    public set commonAttributes(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | undefined) {
      this._commonAttributes = value;
    }
    public resetCommonAttributes() {
      this._commonAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commonAttributesInput() {
      return this._commonAttributes
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration;
    /**
    * request_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#request_configuration KinesisFirehoseDeliveryStream#request_configuration}
    */
    readonly requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration;
  }

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      access_key: cdktf.stringToTerraform(struct!.accessKey),
      buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
      buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
      name: cdktf.stringToTerraform(struct!.name),
      retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
      url: cdktf.stringToTerraform(struct!.url),
      cloudwatch_logging_options: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
      processing_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
      request_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct!.requestConfiguration),
    }
  }

  export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // access_key - computed: false, optional: true, required: false
    private _accessKey?: string | undefined; 
    public get accessKey() {
      return this.getStringAttribute('access_key');
    }
    public set accessKey(value: string | undefined) {
      this._accessKey = value;
    }
    public resetAccessKey() {
      this._accessKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessKeyInput() {
      return this._accessKey
    }

    // buffering_interval - computed: false, optional: true, required: false
    private _bufferingInterval?: number | undefined; 
    public get bufferingInterval() {
      return this.getNumberAttribute('buffering_interval');
    }
    public set bufferingInterval(value: number | undefined) {
      this._bufferingInterval = value;
    }
    public resetBufferingInterval() {
      this._bufferingInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferingIntervalInput() {
      return this._bufferingInterval
    }

    // buffering_size - computed: false, optional: true, required: false
    private _bufferingSize?: number | undefined; 
    public get bufferingSize() {
      return this.getNumberAttribute('buffering_size');
    }
    public set bufferingSize(value: number | undefined) {
      this._bufferingSize = value;
    }
    public resetBufferingSize() {
      this._bufferingSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferingSizeInput() {
      return this._bufferingSize
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // retry_duration - computed: false, optional: true, required: false
    private _retryDuration?: number | undefined; 
    public get retryDuration() {
      return this.getNumberAttribute('retry_duration');
    }
    public set retryDuration(value: number | undefined) {
      this._retryDuration = value;
    }
    public resetRetryDuration() {
      this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryDurationInput() {
      return this._retryDuration
    }

    // role_arn - computed: false, optional: true, required: false
    private _roleArn?: string | undefined; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string | undefined) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // s3_backup_mode - computed: false, optional: true, required: false
    private _s3BackupMode?: string | undefined; 
    public get s3BackupMode() {
      return this.getStringAttribute('s3_backup_mode');
    }
    public set s3BackupMode(value: string | undefined) {
      this._s3BackupMode = value;
    }
    public resetS3BackupMode() {
      this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BackupModeInput() {
      return this._s3BackupMode
    }

    // url - computed: false, optional: false, required: true
    private _url?: string; 
    public get url() {
      return this.getStringAttribute('url');
    }
    public set url(value: string) {
      this._url = value;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
      return this._url
    }

    // cloudwatch_logging_options - computed: false, optional: true, required: false
    private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined) {
      this._cloudwatchLoggingOptions = value;
    }
    public resetCloudwatchLoggingOptions() {
      this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingOptionsInput() {
      return this._cloudwatchLoggingOptions
    }

    // processing_configuration - computed: false, optional: true, required: false
    private _processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined; 
    private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
    public get processingConfiguration() {
      return this.__processingConfigurationOutput;
    }
    public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined) {
      this._processingConfiguration = value;
    }
    public resetProcessingConfiguration() {
      this._processingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processingConfigurationInput() {
      return this._processingConfiguration
    }

    // request_configuration - computed: false, optional: true, required: false
    private _requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined; 
    private __requestConfigurationOutput = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference(this as any, "request_configuration", true);
    public get requestConfiguration() {
      return this.__requestConfigurationOutput;
    }
    public putRequestConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined) {
      this._requestConfiguration = value;
    }
    public resetRequestConfiguration() {
      this._requestConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestConfigurationInput() {
      return this._requestConfiguration
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

  function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kinesis_stream_arn: cdktf.stringToTerraform(struct!.kinesisStreamArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // kinesis_stream_arn - computed: false, optional: false, required: true
    private _kinesisStreamArn?: string; 
    public get kinesisStreamArn() {
      return this.getStringAttribute('kinesis_stream_arn');
    }
    public set kinesisStreamArn(value: string) {
      this._kinesisStreamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamArnInput() {
      return this._kinesisStreamArn
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    }
  }

  export class KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_group_name - computed: false, optional: true, required: false
    private _logGroupName?: string | undefined; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string | undefined) {
      this._logGroupName = value;
    }
    public resetLogGroupName() {
      this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // log_stream_name - computed: false, optional: true, required: false
    private _logStreamName?: string | undefined; 
    public get logStreamName() {
      return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string | undefined) {
      this._logStreamName = value;
    }
    public resetLogStreamName() {
      this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
      return this._logStreamName
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
    }
  }

  export class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // processors - computed: false, optional: true, required: false
    private _processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | undefined; 
    public get processors() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('processors') as any;
    }
    public set processors(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | undefined) {
      this._processors = value;
    }
    public resetProcessors() {
      this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processorsInput() {
      return this._processors
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

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    }
  }

  export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_group_name - computed: false, optional: true, required: false
    private _logGroupName?: string | undefined; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string | undefined) {
      this._logGroupName = value;
    }
    public resetLogGroupName() {
      this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // log_stream_name - computed: false, optional: true, required: false
    private _logStreamName?: string | undefined; 
    public get logStreamName() {
      return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string | undefined) {
      this._logStreamName = value;
    }
    public resetLogStreamName() {
      this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
      return this._logStreamName
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
  }

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
      buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
      compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    }
  }

  export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_arn - computed: false, optional: false, required: true
    private _bucketArn?: string; 
    public get bucketArn() {
      return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
      this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
      return this._bucketArn
    }

    // buffer_interval - computed: false, optional: true, required: false
    private _bufferInterval?: number | undefined; 
    public get bufferInterval() {
      return this.getNumberAttribute('buffer_interval');
    }
    public set bufferInterval(value: number | undefined) {
      this._bufferInterval = value;
    }
    public resetBufferInterval() {
      this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferIntervalInput() {
      return this._bufferInterval
    }

    // buffer_size - computed: false, optional: true, required: false
    private _bufferSize?: number | undefined; 
    public get bufferSize() {
      return this.getNumberAttribute('buffer_size');
    }
    public set bufferSize(value: number | undefined) {
      this._bufferSize = value;
    }
    public resetBufferSize() {
      this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferSizeInput() {
      return this._bufferSize
    }

    // compression_format - computed: false, optional: true, required: false
    private _compressionFormat?: string | undefined; 
    public get compressionFormat() {
      return this.getStringAttribute('compression_format');
    }
    public set compressionFormat(value: string | undefined) {
      this._compressionFormat = value;
    }
    public resetCompressionFormat() {
      this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionFormatInput() {
      return this._compressionFormat
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // cloudwatch_logging_options - computed: false, optional: true, required: false
    private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined) {
      this._cloudwatchLoggingOptions = value;
    }
    public resetCloudwatchLoggingOptions() {
      this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingOptionsInput() {
      return this._cloudwatchLoggingOptions
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration;
    /**
    * s3_backup_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
    */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration;
  }

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
      cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
      processing_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
      s3_backup_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct!.s3BackupConfiguration),
    }
  }

  export class KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cluster_jdbcurl - computed: false, optional: false, required: true
    private _clusterJdbcurl?: string; 
    public get clusterJdbcurl() {
      return this.getStringAttribute('cluster_jdbcurl');
    }
    public set clusterJdbcurl(value: string) {
      this._clusterJdbcurl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterJdbcurlInput() {
      return this._clusterJdbcurl
    }

    // copy_options - computed: false, optional: true, required: false
    private _copyOptions?: string | undefined; 
    public get copyOptions() {
      return this.getStringAttribute('copy_options');
    }
    public set copyOptions(value: string | undefined) {
      this._copyOptions = value;
    }
    public resetCopyOptions() {
      this._copyOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyOptionsInput() {
      return this._copyOptions
    }

    // data_table_columns - computed: false, optional: true, required: false
    private _dataTableColumns?: string | undefined; 
    public get dataTableColumns() {
      return this.getStringAttribute('data_table_columns');
    }
    public set dataTableColumns(value: string | undefined) {
      this._dataTableColumns = value;
    }
    public resetDataTableColumns() {
      this._dataTableColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTableColumnsInput() {
      return this._dataTableColumns
    }

    // data_table_name - computed: false, optional: false, required: true
    private _dataTableName?: string; 
    public get dataTableName() {
      return this.getStringAttribute('data_table_name');
    }
    public set dataTableName(value: string) {
      this._dataTableName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTableNameInput() {
      return this._dataTableName
    }

    // password - computed: false, optional: false, required: true
    private _password?: string; 
    public get password() {
      return this.getStringAttribute('password');
    }
    public set password(value: string) {
      this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
      return this._password
    }

    // retry_duration - computed: false, optional: true, required: false
    private _retryDuration?: number | undefined; 
    public get retryDuration() {
      return this.getNumberAttribute('retry_duration');
    }
    public set retryDuration(value: number | undefined) {
      this._retryDuration = value;
    }
    public resetRetryDuration() {
      this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryDurationInput() {
      return this._retryDuration
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // s3_backup_mode - computed: false, optional: true, required: false
    private _s3BackupMode?: string | undefined; 
    public get s3BackupMode() {
      return this.getStringAttribute('s3_backup_mode');
    }
    public set s3BackupMode(value: string | undefined) {
      this._s3BackupMode = value;
    }
    public resetS3BackupMode() {
      this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BackupModeInput() {
      return this._s3BackupMode
    }

    // username - computed: false, optional: false, required: true
    private _username?: string; 
    public get username() {
      return this.getStringAttribute('username');
    }
    public set username(value: string) {
      this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
      return this._username
    }

    // cloudwatch_logging_options - computed: false, optional: true, required: false
    private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined) {
      this._cloudwatchLoggingOptions = value;
    }
    public resetCloudwatchLoggingOptions() {
      this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingOptionsInput() {
      return this._cloudwatchLoggingOptions
    }

    // processing_configuration - computed: false, optional: true, required: false
    private _processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined; 
    private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
    public get processingConfiguration() {
      return this.__processingConfigurationOutput;
    }
    public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined) {
      this._processingConfiguration = value;
    }
    public resetProcessingConfiguration() {
      this._processingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processingConfigurationInput() {
      return this._processingConfiguration
    }

    // s3_backup_configuration - computed: false, optional: true, required: false
    private _s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined; 
    private __s3BackupConfigurationOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference(this as any, "s3_backup_configuration", true);
    public get s3BackupConfiguration() {
      return this.__s3BackupConfigurationOutput;
    }
    public putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined) {
      this._s3BackupConfiguration = value;
    }
    public resetS3BackupConfiguration() {
      this._s3BackupConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BackupConfigurationInput() {
      return this._s3BackupConfiguration
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

  function kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    }
  }

  export class KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_group_name - computed: false, optional: true, required: false
    private _logGroupName?: string | undefined; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string | undefined) {
      this._logGroupName = value;
    }
    public resetLogGroupName() {
      this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // log_stream_name - computed: false, optional: true, required: false
    private _logStreamName?: string | undefined; 
    public get logStreamName() {
      return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string | undefined) {
      this._logStreamName = value;
    }
    public resetLogStreamName() {
      this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
      return this._logStreamName
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions;
  }

  function kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamS3Configuration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
      buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
      compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      cloudwatch_logging_options: kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    }
  }

  export class KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_arn - computed: false, optional: false, required: true
    private _bucketArn?: string; 
    public get bucketArn() {
      return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
      this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
      return this._bucketArn
    }

    // buffer_interval - computed: false, optional: true, required: false
    private _bufferInterval?: number | undefined; 
    public get bufferInterval() {
      return this.getNumberAttribute('buffer_interval');
    }
    public set bufferInterval(value: number | undefined) {
      this._bufferInterval = value;
    }
    public resetBufferInterval() {
      this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferIntervalInput() {
      return this._bufferInterval
    }

    // buffer_size - computed: false, optional: true, required: false
    private _bufferSize?: number | undefined; 
    public get bufferSize() {
      return this.getNumberAttribute('buffer_size');
    }
    public set bufferSize(value: number | undefined) {
      this._bufferSize = value;
    }
    public resetBufferSize() {
      this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferSizeInput() {
      return this._bufferSize
    }

    // compression_format - computed: false, optional: true, required: false
    private _compressionFormat?: string | undefined; 
    public get compressionFormat() {
      return this.getStringAttribute('compression_format');
    }
    public set compressionFormat(value: string | undefined) {
      this._compressionFormat = value;
    }
    public resetCompressionFormat() {
      this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionFormatInput() {
      return this._compressionFormat
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // cloudwatch_logging_options - computed: false, optional: true, required: false
    private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions | undefined) {
      this._cloudwatchLoggingOptions = value;
    }
    public resetCloudwatchLoggingOptions() {
      this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingOptionsInput() {
      return this._cloudwatchLoggingOptions
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

  function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference | KinesisFirehoseDeliveryStreamServerSideEncryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      key_arn: cdktf.stringToTerraform(struct!.keyArn),
      key_type: cdktf.stringToTerraform(struct!.keyType),
    }
  }

  export class KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // key_arn - computed: false, optional: true, required: false
    private _keyArn?: string | undefined; 
    public get keyArn() {
      return this.getStringAttribute('key_arn');
    }
    public set keyArn(value: string | undefined) {
      this._keyArn = value;
    }
    public resetKeyArn() {
      this._keyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyArnInput() {
      return this._keyArn
    }

    // key_type - computed: false, optional: true, required: false
    private _keyType?: string | undefined; 
    public get keyType() {
      return this.getStringAttribute('key_type');
    }
    public set keyType(value: string | undefined) {
      this._keyType = value;
    }
    public resetKeyType() {
      this._keyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyTypeInput() {
      return this._keyType
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

  function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    }
  }

  export class KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // log_group_name - computed: false, optional: true, required: false
    private _logGroupName?: string | undefined; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string | undefined) {
      this._logGroupName = value;
    }
    public resetLogGroupName() {
      this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // log_stream_name - computed: false, optional: true, required: false
    private _logStreamName?: string | undefined; 
    public get logStreamName() {
      return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string | undefined) {
      this._logStreamName = value;
    }
    public resetLogStreamName() {
      this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
      return this._logStreamName
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
    }
  }

  export class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // processors - computed: false, optional: true, required: false
    private _processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | undefined; 
    public get processors() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('processors') as any;
    }
    public set processors(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | undefined) {
      this._processors = value;
    }
    public resetProcessors() {
      this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processorsInput() {
      return this._processors
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration;
  }

  function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      hec_acknowledgment_timeout: cdktf.numberToTerraform(struct!.hecAcknowledgmentTimeout),
      hec_endpoint: cdktf.stringToTerraform(struct!.hecEndpoint),
      hec_endpoint_type: cdktf.stringToTerraform(struct!.hecEndpointType),
      hec_token: cdktf.stringToTerraform(struct!.hecToken),
      retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
      s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
      cloudwatch_logging_options: kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
      processing_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    }
  }

  export class KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // hec_acknowledgment_timeout - computed: false, optional: true, required: false
    private _hecAcknowledgmentTimeout?: number | undefined; 
    public get hecAcknowledgmentTimeout() {
      return this.getNumberAttribute('hec_acknowledgment_timeout');
    }
    public set hecAcknowledgmentTimeout(value: number | undefined) {
      this._hecAcknowledgmentTimeout = value;
    }
    public resetHecAcknowledgmentTimeout() {
      this._hecAcknowledgmentTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hecAcknowledgmentTimeoutInput() {
      return this._hecAcknowledgmentTimeout
    }

    // hec_endpoint - computed: false, optional: false, required: true
    private _hecEndpoint?: string; 
    public get hecEndpoint() {
      return this.getStringAttribute('hec_endpoint');
    }
    public set hecEndpoint(value: string) {
      this._hecEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hecEndpointInput() {
      return this._hecEndpoint
    }

    // hec_endpoint_type - computed: false, optional: true, required: false
    private _hecEndpointType?: string | undefined; 
    public get hecEndpointType() {
      return this.getStringAttribute('hec_endpoint_type');
    }
    public set hecEndpointType(value: string | undefined) {
      this._hecEndpointType = value;
    }
    public resetHecEndpointType() {
      this._hecEndpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hecEndpointTypeInput() {
      return this._hecEndpointType
    }

    // hec_token - computed: false, optional: false, required: true
    private _hecToken?: string; 
    public get hecToken() {
      return this.getStringAttribute('hec_token');
    }
    public set hecToken(value: string) {
      this._hecToken = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hecTokenInput() {
      return this._hecToken
    }

    // retry_duration - computed: false, optional: true, required: false
    private _retryDuration?: number | undefined; 
    public get retryDuration() {
      return this.getNumberAttribute('retry_duration');
    }
    public set retryDuration(value: number | undefined) {
      this._retryDuration = value;
    }
    public resetRetryDuration() {
      this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryDurationInput() {
      return this._retryDuration
    }

    // s3_backup_mode - computed: false, optional: true, required: false
    private _s3BackupMode?: string | undefined; 
    public get s3BackupMode() {
      return this.getStringAttribute('s3_backup_mode');
    }
    public set s3BackupMode(value: string | undefined) {
      this._s3BackupMode = value;
    }
    public resetS3BackupMode() {
      this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BackupModeInput() {
      return this._s3BackupMode
    }

    // cloudwatch_logging_options - computed: false, optional: true, required: false
    private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined) {
      this._cloudwatchLoggingOptions = value;
    }
    public resetCloudwatchLoggingOptions() {
      this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingOptionsInput() {
      return this._cloudwatchLoggingOptions
    }

    // processing_configuration - computed: false, optional: true, required: false
    private _processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined; 
    private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
    public get processingConfiguration() {
      return this.__processingConfigurationOutput;
    }
    public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined) {
      this._processingConfiguration = value;
    }
    public resetProcessingConfiguration() {
      this._processingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processingConfigurationInput() {
      return this._processingConfiguration
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
    private _destination?: string; 
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
    private _destinationId?: string | undefined; 
    public get destinationId() {
      return this.getStringAttribute('destination_id');
    }
    public set destinationId(value: string | undefined) {
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
    private _name?: string; 
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _versionId?: string | undefined; 
    public get versionId() {
      return this.getStringAttribute('version_id');
    }
    public set versionId(value: string | undefined) {
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
    private _elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined; 
    private __elasticsearchConfigurationOutput = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference(this as any, "elasticsearch_configuration", true);
    public get elasticsearchConfiguration() {
      return this.__elasticsearchConfigurationOutput;
    }
    public putElasticsearchConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined) {
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
    private _extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined; 
    private __extendedS3ConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference(this as any, "extended_s3_configuration", true);
    public get extendedS3Configuration() {
      return this.__extendedS3ConfigurationOutput;
    }
    public putExtendedS3Configuration(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined) {
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
    private _httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined; 
    private __httpEndpointConfigurationOutput = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference(this as any, "http_endpoint_configuration", true);
    public get httpEndpointConfiguration() {
      return this.__httpEndpointConfigurationOutput;
    }
    public putHttpEndpointConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined) {
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
    private _kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined; 
    private __kinesisSourceConfigurationOutput = new KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference(this as any, "kinesis_source_configuration", true);
    public get kinesisSourceConfiguration() {
      return this.__kinesisSourceConfigurationOutput;
    }
    public putKinesisSourceConfiguration(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined) {
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
    private _redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined; 
    private __redshiftConfigurationOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference(this as any, "redshift_configuration", true);
    public get redshiftConfiguration() {
      return this.__redshiftConfigurationOutput;
    }
    public putRedshiftConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined) {
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
    private _s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration | undefined; 
    private __s3ConfigurationOutput = new KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference(this as any, "s3_configuration", true);
    public get s3Configuration() {
      return this.__s3ConfigurationOutput;
    }
    public putS3Configuration(value: KinesisFirehoseDeliveryStreamS3Configuration | undefined) {
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
    private _serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption | undefined; 
    private __serverSideEncryptionOutput = new KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference(this as any, "server_side_encryption", true);
    public get serverSideEncryption() {
      return this.__serverSideEncryptionOutput;
    }
    public putServerSideEncryption(value: KinesisFirehoseDeliveryStreamServerSideEncryption | undefined) {
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
    private _splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined; 
    private __splunkConfigurationOutput = new KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference(this as any, "splunk_configuration", true);
    public get splunkConfiguration() {
      return this.__splunkConfigurationOutput;
    }
    public putSplunkConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined) {
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
        elasticsearch_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(this._elasticsearchConfiguration),
        extended_s3_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(this._extendedS3Configuration),
        http_endpoint_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(this._httpEndpointConfiguration),
        kinesis_source_configuration: kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(this._kinesisSourceConfiguration),
        redshift_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(this._redshiftConfiguration),
        s3_configuration: kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(this._s3Configuration),
        server_side_encryption: kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(this._serverSideEncryption),
        splunk_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(this._splunkConfiguration),
      };
    }
  }
  export interface KinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#encryption_type KinesisStream#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}
    */
    readonly enforceConsumerDeletion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#kms_key_id KinesisStream#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#name KinesisStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#retention_period KinesisStream#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_count KinesisStream#shard_count}
    */
    readonly shardCount: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_level_metrics KinesisStream#shard_level_metrics}
    */
    readonly shardLevelMetrics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags KinesisStream#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags_all KinesisStream#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#timeouts KinesisStream#timeouts}
    */
    readonly timeouts?: KinesisStreamTimeouts;
  }
  export interface KinesisStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#create KinesisStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#delete KinesisStream#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#update KinesisStream#update}
    */
    readonly update?: string;
  }

  function kinesisStreamTimeoutsToTerraform(struct?: KinesisStreamTimeoutsOutputReference | KinesisStreamTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class KinesisStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream}
  */
  export class KinesisStream extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisStreamConfig
    */
    public constructor(scope: Construct, id: string, config: KinesisStreamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_stream',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._encryptionType = config.encryptionType;
      this._enforceConsumerDeletion = config.enforceConsumerDeletion;
      this._kmsKeyId = config.kmsKeyId;
      this._name = config.name;
      this._retentionPeriod = config.retentionPeriod;
      this._shardCount = config.shardCount;
      this._shardLevelMetrics = config.shardLevelMetrics;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // encryption_type - computed: false, optional: true, required: false
    private _encryptionType?: string | undefined; 
    public get encryptionType() {
      return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string | undefined) {
      this._encryptionType = value;
    }
    public resetEncryptionType() {
      this._encryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
      return this._encryptionType
    }

    // enforce_consumer_deletion - computed: false, optional: true, required: false
    private _enforceConsumerDeletion?: boolean | cdktf.IResolvable | undefined; 
    public get enforceConsumerDeletion() {
      return this.getBooleanAttribute('enforce_consumer_deletion') as any;
    }
    public set enforceConsumerDeletion(value: boolean | cdktf.IResolvable | undefined) {
      this._enforceConsumerDeletion = value;
    }
    public resetEnforceConsumerDeletion() {
      this._enforceConsumerDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceConsumerDeletionInput() {
      return this._enforceConsumerDeletion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
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
      return this._name
    }

    // retention_period - computed: false, optional: true, required: false
    private _retentionPeriod?: number | undefined; 
    public get retentionPeriod() {
      return this.getNumberAttribute('retention_period');
    }
    public set retentionPeriod(value: number | undefined) {
      this._retentionPeriod = value;
    }
    public resetRetentionPeriod() {
      this._retentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInput() {
      return this._retentionPeriod
    }

    // shard_count - computed: false, optional: false, required: true
    private _shardCount?: number; 
    public get shardCount() {
      return this.getNumberAttribute('shard_count');
    }
    public set shardCount(value: number) {
      this._shardCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get shardCountInput() {
      return this._shardCount
    }

    // shard_level_metrics - computed: false, optional: true, required: false
    private _shardLevelMetrics?: string[] | undefined; 
    public get shardLevelMetrics() {
      return this.getListAttribute('shard_level_metrics');
    }
    public set shardLevelMetrics(value: string[] | undefined) {
      this._shardLevelMetrics = value;
    }
    public resetShardLevelMetrics() {
      this._shardLevelMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shardLevelMetricsInput() {
      return this._shardLevelMetrics
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: KinesisStreamTimeouts | undefined; 
    private __timeoutsOutput = new KinesisStreamTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: KinesisStreamTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        encryption_type: cdktf.stringToTerraform(this._encryptionType),
        enforce_consumer_deletion: cdktf.booleanToTerraform(this._enforceConsumerDeletion),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        name: cdktf.stringToTerraform(this._name),
        retention_period: cdktf.numberToTerraform(this._retentionPeriod),
        shard_count: cdktf.numberToTerraform(this._shardCount),
        shard_level_metrics: cdktf.listMapper(cdktf.stringToTerraform)(this._shardLevelMetrics),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: kinesisStreamTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface KinesisStreamConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html#name KinesisStreamConsumer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html#stream_arn KinesisStreamConsumer#stream_arn}
    */
    readonly streamArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html aws_kinesis_stream_consumer}
  */
  export class KinesisStreamConsumer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_stream_consumer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html aws_kinesis_stream_consumer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisStreamConsumerConfig
    */
    public constructor(scope: Construct, id: string, config: KinesisStreamConsumerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_stream_consumer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._streamArn = config.streamArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // creation_timestamp - computed: true, optional: false, required: false
    public get creationTimestamp() {
      return this.getStringAttribute('creation_timestamp');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // stream_arn - computed: false, optional: false, required: true
    private _streamArn?: string; 
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
      this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
      return this._streamArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        stream_arn: cdktf.stringToTerraform(this._streamArn),
      };
    }
  }
  export interface KinesisVideoStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}
    */
    readonly dataRetentionInHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#device_name KinesisVideoStream#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#kms_key_id KinesisVideoStream#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#media_type KinesisVideoStream#media_type}
    */
    readonly mediaType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#name KinesisVideoStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#tags KinesisVideoStream#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#tags_all KinesisVideoStream#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#timeouts KinesisVideoStream#timeouts}
    */
    readonly timeouts?: KinesisVideoStreamTimeouts;
  }
  export interface KinesisVideoStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#create KinesisVideoStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#delete KinesisVideoStream#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#update KinesisVideoStream#update}
    */
    readonly update?: string;
  }

  function kinesisVideoStreamTimeoutsToTerraform(struct?: KinesisVideoStreamTimeoutsOutputReference | KinesisVideoStreamTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class KinesisVideoStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream}
  */
  export class KinesisVideoStream extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_video_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisVideoStreamConfig
    */
    public constructor(scope: Construct, id: string, config: KinesisVideoStreamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_video_stream',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dataRetentionInHours = config.dataRetentionInHours;
      this._deviceName = config.deviceName;
      this._kmsKeyId = config.kmsKeyId;
      this._mediaType = config.mediaType;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
      return this.getStringAttribute('creation_time');
    }

    // data_retention_in_hours - computed: false, optional: true, required: false
    private _dataRetentionInHours?: number | undefined; 
    public get dataRetentionInHours() {
      return this.getNumberAttribute('data_retention_in_hours');
    }
    public set dataRetentionInHours(value: number | undefined) {
      this._dataRetentionInHours = value;
    }
    public resetDataRetentionInHours() {
      this._dataRetentionInHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataRetentionInHoursInput() {
      return this._dataRetentionInHours
    }

    // device_name - computed: false, optional: true, required: false
    private _deviceName?: string | undefined; 
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }
    public set deviceName(value: string | undefined) {
      this._deviceName = value;
    }
    public resetDeviceName() {
      this._deviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceNameInput() {
      return this._deviceName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // media_type - computed: false, optional: true, required: false
    private _mediaType?: string | undefined; 
    public get mediaType() {
      return this.getStringAttribute('media_type');
    }
    public set mediaType(value: string | undefined) {
      this._mediaType = value;
    }
    public resetMediaType() {
      this._mediaType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaTypeInput() {
      return this._mediaType
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
      return this.getStringAttribute('version');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: KinesisVideoStreamTimeouts | undefined; 
    private __timeoutsOutput = new KinesisVideoStreamTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: KinesisVideoStreamTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        data_retention_in_hours: cdktf.numberToTerraform(this._dataRetentionInHours),
        device_name: cdktf.stringToTerraform(this._deviceName),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        media_type: cdktf.stringToTerraform(this._mediaType),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: kinesisVideoStreamTimeoutsToTerraform(this._timeouts),
      };
    }
  }
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
    readonly applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration;
    /**
    * cloudwatch_logging_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#cloudwatch_logging_options Kinesisanalyticsv2Application#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions;
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      file_key: cdktf.stringToTerraform(struct!.fileKey),
      object_version: cdktf.stringToTerraform(struct!.objectVersion),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_arn - computed: false, optional: false, required: true
    private _bucketArn?: string; 
    public get bucketArn() {
      return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
      this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
      return this._bucketArn
    }

    // file_key - computed: false, optional: false, required: true
    private _fileKey?: string; 
    public get fileKey() {
      return this.getStringAttribute('file_key');
    }
    public set fileKey(value: string) {
      this._fileKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileKeyInput() {
      return this._fileKey
    }

    // object_version - computed: false, optional: true, required: false
    private _objectVersion?: string | undefined; 
    public get objectVersion() {
      return this.getStringAttribute('object_version');
    }
    public set objectVersion(value: string | undefined) {
      this._objectVersion = value;
    }
    public resetObjectVersion() {
      this._objectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectVersionInput() {
      return this._objectVersion
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
    readonly s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      text_content: cdktf.stringToTerraform(struct!.textContent),
      s3_content_location: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct!.s3ContentLocation),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // text_content - computed: false, optional: true, required: false
    private _textContent?: string | undefined; 
    public get textContent() {
      return this.getStringAttribute('text_content');
    }
    public set textContent(value: string | undefined) {
      this._textContent = value;
    }
    public resetTextContent() {
      this._textContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textContentInput() {
      return this._textContent
    }

    // s3_content_location - computed: false, optional: true, required: false
    private _s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | undefined; 
    private __s3ContentLocationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference(this as any, "s3_content_location", true);
    public get s3ContentLocation() {
      return this.__s3ContentLocationOutput;
    }
    public putS3ContentLocation(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | undefined) {
      this._s3ContentLocation = value;
    }
    public resetS3ContentLocation() {
      this._s3ContentLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ContentLocationInput() {
      return this._s3ContentLocation
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
    readonly codeContent?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      code_content_type: cdktf.stringToTerraform(struct!.codeContentType),
      code_content: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct!.codeContent),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // code_content_type - computed: false, optional: false, required: true
    private _codeContentType?: string; 
    public get codeContentType() {
      return this.getStringAttribute('code_content_type');
    }
    public set codeContentType(value: string) {
      this._codeContentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get codeContentTypeInput() {
      return this._codeContentType
    }

    // code_content - computed: false, optional: true, required: false
    private _codeContent?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | undefined; 
    private __codeContentOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference(this as any, "code_content", true);
    public get codeContent() {
      return this.__codeContentOutput;
    }
    public putCodeContent(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | undefined) {
      this._codeContent = value;
    }
    public resetCodeContent() {
      this._codeContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeContentInput() {
      return this._codeContent
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#snapshots_enabled Kinesisanalyticsv2Application#snapshots_enabled}
    */
    readonly snapshotsEnabled: boolean | cdktf.IResolvable;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      snapshots_enabled: cdktf.booleanToTerraform(struct!.snapshotsEnabled),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // snapshots_enabled - computed: false, optional: false, required: true
    private _snapshotsEnabled?: boolean | cdktf.IResolvable; 
    public get snapshotsEnabled() {
      return this.getBooleanAttribute('snapshots_enabled') as any;
    }
    public set snapshotsEnabled(value: boolean | cdktf.IResolvable) {
      this._snapshotsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotsEnabledInput() {
      return this._snapshotsEnabled
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      property_group: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform)(struct!.propertyGroup),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // property_group - computed: false, optional: false, required: true
    private _propertyGroup?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[]; 
    public get propertyGroup() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('property_group') as any;
    }
    public set propertyGroup(value: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[]) {
      this._propertyGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyGroupInput() {
      return this._propertyGroup
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      checkpoint_interval: cdktf.numberToTerraform(struct!.checkpointInterval),
      checkpointing_enabled: cdktf.booleanToTerraform(struct!.checkpointingEnabled),
      configuration_type: cdktf.stringToTerraform(struct!.configurationType),
      min_pause_between_checkpoints: cdktf.numberToTerraform(struct!.minPauseBetweenCheckpoints),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // checkpoint_interval - computed: true, optional: true, required: false
    private _checkpointInterval?: number | undefined; 
    public get checkpointInterval() {
      return this.getNumberAttribute('checkpoint_interval');
    }
    public set checkpointInterval(value: number | undefined) {
      this._checkpointInterval = value;
    }
    public resetCheckpointInterval() {
      this._checkpointInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get checkpointIntervalInput() {
      return this._checkpointInterval
    }

    // checkpointing_enabled - computed: true, optional: true, required: false
    private _checkpointingEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get checkpointingEnabled() {
      return this.getBooleanAttribute('checkpointing_enabled') as any;
    }
    public set checkpointingEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._checkpointingEnabled = value;
    }
    public resetCheckpointingEnabled() {
      this._checkpointingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get checkpointingEnabledInput() {
      return this._checkpointingEnabled
    }

    // configuration_type - computed: false, optional: false, required: true
    private _configurationType?: string; 
    public get configurationType() {
      return this.getStringAttribute('configuration_type');
    }
    public set configurationType(value: string) {
      this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationTypeInput() {
      return this._configurationType
    }

    // min_pause_between_checkpoints - computed: true, optional: true, required: false
    private _minPauseBetweenCheckpoints?: number | undefined; 
    public get minPauseBetweenCheckpoints() {
      return this.getNumberAttribute('min_pause_between_checkpoints');
    }
    public set minPauseBetweenCheckpoints(value: number | undefined) {
      this._minPauseBetweenCheckpoints = value;
    }
    public resetMinPauseBetweenCheckpoints() {
      this._minPauseBetweenCheckpoints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minPauseBetweenCheckpointsInput() {
      return this._minPauseBetweenCheckpoints
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      configuration_type: cdktf.stringToTerraform(struct!.configurationType),
      log_level: cdktf.stringToTerraform(struct!.logLevel),
      metrics_level: cdktf.stringToTerraform(struct!.metricsLevel),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // configuration_type - computed: false, optional: false, required: true
    private _configurationType?: string; 
    public get configurationType() {
      return this.getStringAttribute('configuration_type');
    }
    public set configurationType(value: string) {
      this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationTypeInput() {
      return this._configurationType
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string | undefined; 
    public get logLevel() {
      return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string | undefined) {
      this._logLevel = value;
    }
    public resetLogLevel() {
      this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
      return this._logLevel
    }

    // metrics_level - computed: true, optional: true, required: false
    private _metricsLevel?: string | undefined; 
    public get metricsLevel() {
      return this.getStringAttribute('metrics_level');
    }
    public set metricsLevel(value: string | undefined) {
      this._metricsLevel = value;
    }
    public resetMetricsLevel() {
      this._metricsLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsLevelInput() {
      return this._metricsLevel
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      auto_scaling_enabled: cdktf.booleanToTerraform(struct!.autoScalingEnabled),
      configuration_type: cdktf.stringToTerraform(struct!.configurationType),
      parallelism: cdktf.numberToTerraform(struct!.parallelism),
      parallelism_per_kpu: cdktf.numberToTerraform(struct!.parallelismPerKpu),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // auto_scaling_enabled - computed: true, optional: true, required: false
    private _autoScalingEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get autoScalingEnabled() {
      return this.getBooleanAttribute('auto_scaling_enabled') as any;
    }
    public set autoScalingEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._autoScalingEnabled = value;
    }
    public resetAutoScalingEnabled() {
      this._autoScalingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingEnabledInput() {
      return this._autoScalingEnabled
    }

    // configuration_type - computed: false, optional: false, required: true
    private _configurationType?: string; 
    public get configurationType() {
      return this.getStringAttribute('configuration_type');
    }
    public set configurationType(value: string) {
      this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationTypeInput() {
      return this._configurationType
    }

    // parallelism - computed: true, optional: true, required: false
    private _parallelism?: number | undefined; 
    public get parallelism() {
      return this.getNumberAttribute('parallelism');
    }
    public set parallelism(value: number | undefined) {
      this._parallelism = value;
    }
    public resetParallelism() {
      this._parallelism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelismInput() {
      return this._parallelism
    }

    // parallelism_per_kpu - computed: true, optional: true, required: false
    private _parallelismPerKpu?: number | undefined; 
    public get parallelismPerKpu() {
      return this.getNumberAttribute('parallelism_per_kpu');
    }
    public set parallelismPerKpu(value: number | undefined) {
      this._parallelismPerKpu = value;
    }
    public resetParallelismPerKpu() {
      this._parallelismPerKpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelismPerKpuInput() {
      return this._parallelismPerKpu
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {
    /**
    * checkpoint_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpoint_configuration Kinesisanalyticsv2Application#checkpoint_configuration}
    */
    readonly checkpointConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration;
    /**
    * monitoring_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#monitoring_configuration Kinesisanalyticsv2Application#monitoring_configuration}
    */
    readonly monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration;
    /**
    * parallelism_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism_configuration Kinesisanalyticsv2Application#parallelism_configuration}
    */
    readonly parallelismConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      checkpoint_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct!.checkpointConfiguration),
      monitoring_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct!.monitoringConfiguration),
      parallelism_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct!.parallelismConfiguration),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // checkpoint_configuration - computed: false, optional: true, required: false
    private _checkpointConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | undefined; 
    private __checkpointConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference(this as any, "checkpoint_configuration", true);
    public get checkpointConfiguration() {
      return this.__checkpointConfigurationOutput;
    }
    public putCheckpointConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | undefined) {
      this._checkpointConfiguration = value;
    }
    public resetCheckpointConfiguration() {
      this._checkpointConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get checkpointConfigurationInput() {
      return this._checkpointConfiguration
    }

    // monitoring_configuration - computed: false, optional: true, required: false
    private _monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | undefined; 
    private __monitoringConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference(this as any, "monitoring_configuration", true);
    public get monitoringConfiguration() {
      return this.__monitoringConfigurationOutput;
    }
    public putMonitoringConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | undefined) {
      this._monitoringConfiguration = value;
    }
    public resetMonitoringConfiguration() {
      this._monitoringConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringConfigurationInput() {
      return this._monitoringConfiguration
    }

    // parallelism_configuration - computed: false, optional: true, required: false
    private _parallelismConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | undefined; 
    private __parallelismConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference(this as any, "parallelism_configuration", true);
    public get parallelismConfiguration() {
      return this.__parallelismConfigurationOutput;
    }
    public putParallelismConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | undefined) {
      this._parallelismConfiguration = value;
    }
    public resetParallelismConfiguration() {
      this._parallelismConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelismConfigurationInput() {
      return this._parallelismConfiguration
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      application_restore_type: cdktf.stringToTerraform(struct!.applicationRestoreType),
      snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // application_restore_type - computed: true, optional: true, required: false
    private _applicationRestoreType?: string | undefined; 
    public get applicationRestoreType() {
      return this.getStringAttribute('application_restore_type');
    }
    public set applicationRestoreType(value: string | undefined) {
      this._applicationRestoreType = value;
    }
    public resetApplicationRestoreType() {
      this._applicationRestoreType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationRestoreTypeInput() {
      return this._applicationRestoreType
    }

    // snapshot_name - computed: false, optional: true, required: false
    private _snapshotName?: string | undefined; 
    public get snapshotName() {
      return this.getStringAttribute('snapshot_name');
    }
    public set snapshotName(value: string | undefined) {
      this._snapshotName = value;
    }
    public resetSnapshotName() {
      this._snapshotName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotNameInput() {
      return this._snapshotName
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#allow_non_restored_state Kinesisanalyticsv2Application#allow_non_restored_state}
    */
    readonly allowNonRestoredState?: boolean | cdktf.IResolvable;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_non_restored_state: cdktf.booleanToTerraform(struct!.allowNonRestoredState),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_non_restored_state - computed: true, optional: true, required: false
    private _allowNonRestoredState?: boolean | cdktf.IResolvable | undefined; 
    public get allowNonRestoredState() {
      return this.getBooleanAttribute('allow_non_restored_state') as any;
    }
    public set allowNonRestoredState(value: boolean | cdktf.IResolvable | undefined) {
      this._allowNonRestoredState = value;
    }
    public resetAllowNonRestoredState() {
      this._allowNonRestoredState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowNonRestoredStateInput() {
      return this._allowNonRestoredState
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration {
    /**
    * application_restore_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_restore_configuration Kinesisanalyticsv2Application#application_restore_configuration}
    */
    readonly applicationRestoreConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration;
    /**
    * flink_run_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_run_configuration Kinesisanalyticsv2Application#flink_run_configuration}
    */
    readonly flinkRunConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      application_restore_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct!.applicationRestoreConfiguration),
      flink_run_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct!.flinkRunConfiguration),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // application_restore_configuration - computed: false, optional: true, required: false
    private _applicationRestoreConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration | undefined; 
    private __applicationRestoreConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference(this as any, "application_restore_configuration", true);
    public get applicationRestoreConfiguration() {
      return this.__applicationRestoreConfigurationOutput;
    }
    public putApplicationRestoreConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration | undefined) {
      this._applicationRestoreConfiguration = value;
    }
    public resetApplicationRestoreConfiguration() {
      this._applicationRestoreConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationRestoreConfigurationInput() {
      return this._applicationRestoreConfiguration
    }

    // flink_run_configuration - computed: false, optional: true, required: false
    private _flinkRunConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration | undefined; 
    private __flinkRunConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference(this as any, "flink_run_configuration", true);
    public get flinkRunConfiguration() {
      return this.__flinkRunConfigurationOutput;
    }
    public putFlinkRunConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration | undefined) {
      this._flinkRunConfiguration = value;
    }
    public resetFlinkRunConfiguration() {
      this._flinkRunConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flinkRunConfigurationInput() {
      return this._flinkRunConfiguration
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#count Kinesisanalyticsv2Application#count}
    */
    readonly count?: number;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      count: cdktf.numberToTerraform(struct!.count),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // count - computed: true, optional: true, required: false
    private _count?: number | undefined; 
    public get count() {
      return this.getNumberAttribute('count');
    }
    public set count(value: number | undefined) {
      this._count = value;
    }
    public resetCount() {
      this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
      return this._count
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration {
    /**
    * input_lambda_processor block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_lambda_processor Kinesisanalyticsv2Application#input_lambda_processor}
    */
    readonly inputLambdaProcessor: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      input_lambda_processor: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct!.inputLambdaProcessor),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // input_lambda_processor - computed: false, optional: false, required: true
    private _inputLambdaProcessor?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor; 
    private __inputLambdaProcessorOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference(this as any, "input_lambda_processor", true);
    public get inputLambdaProcessor() {
      return this.__inputLambdaProcessorOutput;
    }
    public putInputLambdaProcessor(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor) {
      this._inputLambdaProcessor = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputLambdaProcessorInput() {
      return this._inputLambdaProcessor
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
      record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_column_delimiter - computed: false, optional: false, required: true
    private _recordColumnDelimiter?: string; 
    public get recordColumnDelimiter() {
      return this.getStringAttribute('record_column_delimiter');
    }
    public set recordColumnDelimiter(value: string) {
      this._recordColumnDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordColumnDelimiterInput() {
      return this._recordColumnDelimiter
    }

    // record_row_delimiter - computed: false, optional: false, required: true
    private _recordRowDelimiter?: string; 
    public get recordRowDelimiter() {
      return this.getStringAttribute('record_row_delimiter');
    }
    public set recordRowDelimiter(value: string) {
      this._recordRowDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordRowDelimiterInput() {
      return this._recordRowDelimiter
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}
    */
    readonly recordRowPath: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_row_path - computed: false, optional: false, required: true
    private _recordRowPath?: string; 
    public get recordRowPath() {
      return this.getStringAttribute('record_row_path');
    }
    public set recordRowPath(value: string) {
      this._recordRowPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordRowPathInput() {
      return this._recordRowPath
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters {
    /**
    * csv_mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
    */
    readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters;
    /**
    * json_mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
    */
    readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      csv_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct!.csvMappingParameters),
      json_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct!.jsonMappingParameters),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // csv_mapping_parameters - computed: false, optional: true, required: false
    private _csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters | undefined; 
    private __csvMappingParametersOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference(this as any, "csv_mapping_parameters", true);
    public get csvMappingParameters() {
      return this.__csvMappingParametersOutput;
    }
    public putCsvMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters | undefined) {
      this._csvMappingParameters = value;
    }
    public resetCsvMappingParameters() {
      this._csvMappingParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvMappingParametersInput() {
      return this._csvMappingParameters
    }

    // json_mapping_parameters - computed: false, optional: true, required: false
    private _jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters | undefined; 
    private __jsonMappingParametersOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference(this as any, "json_mapping_parameters", true);
    public get jsonMappingParameters() {
      return this.__jsonMappingParametersOutput;
    }
    public putJsonMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters | undefined) {
      this._jsonMappingParameters = value;
    }
    public resetJsonMappingParameters() {
      this._jsonMappingParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonMappingParametersInput() {
      return this._jsonMappingParameters
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
    readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
      mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct!.mappingParameters),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_format_type - computed: false, optional: false, required: true
    private _recordFormatType?: string; 
    public get recordFormatType() {
      return this.getStringAttribute('record_format_type');
    }
    public set recordFormatType(value: string) {
      this._recordFormatType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFormatTypeInput() {
      return this._recordFormatType
    }

    // mapping_parameters - computed: false, optional: false, required: true
    private _mappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters; 
    private __mappingParametersOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference(this as any, "mapping_parameters", true);
    public get mappingParameters() {
      return this.__mappingParametersOutput;
    }
    public putMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters) {
      this._mappingParameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mappingParametersInput() {
      return this._mappingParameters
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
    readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
      record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform)(struct!.recordColumn),
      record_format: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct!.recordFormat),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_encoding - computed: false, optional: true, required: false
    private _recordEncoding?: string | undefined; 
    public get recordEncoding() {
      return this.getStringAttribute('record_encoding');
    }
    public set recordEncoding(value: string | undefined) {
      this._recordEncoding = value;
    }
    public resetRecordEncoding() {
      this._recordEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordEncodingInput() {
      return this._recordEncoding
    }

    // record_column - computed: false, optional: false, required: true
    private _recordColumn?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[]; 
    public get recordColumn() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('record_column') as any;
    }
    public set recordColumn(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[]) {
      this._recordColumn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordColumnInput() {
      return this._recordColumn
    }

    // record_format - computed: false, optional: false, required: true
    private _recordFormat?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat; 
    private __recordFormatOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference(this as any, "record_format", true);
    public get recordFormat() {
      return this.__recordFormatOutput;
    }
    public putRecordFormat(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat) {
      this._recordFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFormatInput() {
      return this._recordFormat
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
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
    readonly inputParallelism?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism;
    /**
    * input_processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_processing_configuration Kinesisanalyticsv2Application#input_processing_configuration}
    */
    readonly inputProcessingConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration;
    /**
    * input_schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_schema Kinesisanalyticsv2Application#input_schema}
    */
    readonly inputSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema;
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
    readonly kinesisFirehoseInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput;
    /**
    * kinesis_streams_input block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_input Kinesisanalyticsv2Application#kinesis_streams_input}
    */
    readonly kinesisStreamsInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
      input_parallelism: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct!.inputParallelism),
      input_processing_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct!.inputProcessingConfiguration),
      input_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct!.inputSchema),
      input_starting_position_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform)(struct!.inputStartingPositionConfiguration),
      kinesis_firehose_input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct!.kinesisFirehoseInput),
      kinesis_streams_input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct!.kinesisStreamsInput),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // name_prefix - computed: false, optional: false, required: true
    private _namePrefix?: string; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string) {
      this._namePrefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // input_parallelism - computed: false, optional: true, required: false
    private _inputParallelism?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism | undefined; 
    private __inputParallelismOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference(this as any, "input_parallelism", true);
    public get inputParallelism() {
      return this.__inputParallelismOutput;
    }
    public putInputParallelism(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism | undefined) {
      this._inputParallelism = value;
    }
    public resetInputParallelism() {
      this._inputParallelism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParallelismInput() {
      return this._inputParallelism
    }

    // input_processing_configuration - computed: false, optional: true, required: false
    private _inputProcessingConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration | undefined; 
    private __inputProcessingConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference(this as any, "input_processing_configuration", true);
    public get inputProcessingConfiguration() {
      return this.__inputProcessingConfigurationOutput;
    }
    public putInputProcessingConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration | undefined) {
      this._inputProcessingConfiguration = value;
    }
    public resetInputProcessingConfiguration() {
      this._inputProcessingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputProcessingConfigurationInput() {
      return this._inputProcessingConfiguration
    }

    // input_schema - computed: false, optional: false, required: true
    private _inputSchema?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema; 
    private __inputSchemaOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference(this as any, "input_schema", true);
    public get inputSchema() {
      return this.__inputSchemaOutput;
    }
    public putInputSchema(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema) {
      this._inputSchema = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSchemaInput() {
      return this._inputSchema
    }

    // input_starting_position_configuration - computed: false, optional: true, required: false
    private _inputStartingPositionConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[] | undefined; 
    public get inputStartingPositionConfiguration() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('input_starting_position_configuration') as any;
    }
    public set inputStartingPositionConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[] | undefined) {
      this._inputStartingPositionConfiguration = value;
    }
    public resetInputStartingPositionConfiguration() {
      this._inputStartingPositionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputStartingPositionConfigurationInput() {
      return this._inputStartingPositionConfiguration
    }

    // kinesis_firehose_input - computed: false, optional: true, required: false
    private _kinesisFirehoseInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput | undefined; 
    private __kinesisFirehoseInputOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference(this as any, "kinesis_firehose_input", true);
    public get kinesisFirehoseInput() {
      return this.__kinesisFirehoseInputOutput;
    }
    public putKinesisFirehoseInput(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput | undefined) {
      this._kinesisFirehoseInput = value;
    }
    public resetKinesisFirehoseInput() {
      this._kinesisFirehoseInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisFirehoseInputInput() {
      return this._kinesisFirehoseInput
    }

    // kinesis_streams_input - computed: false, optional: true, required: false
    private _kinesisStreamsInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput | undefined; 
    private __kinesisStreamsInputOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference(this as any, "kinesis_streams_input", true);
    public get kinesisStreamsInput() {
      return this.__kinesisStreamsInputOutput;
    }
    public putKinesisStreamsInput(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput | undefined) {
      this._kinesisStreamsInput = value;
    }
    public resetKinesisStreamsInput() {
      this._kinesisStreamsInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamsInputInput() {
      return this._kinesisStreamsInput
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
    */
    readonly recordFormatType: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_format_type - computed: false, optional: false, required: true
    private _recordFormatType?: string; 
    public get recordFormatType() {
      return this.getStringAttribute('record_format_type');
    }
    public set recordFormatType(value: string) {
      this._recordFormatType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFormatTypeInput() {
      return this._recordFormatType
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
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
    readonly destinationSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema;
    /**
    * kinesis_firehose_output block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_firehose_output Kinesisanalyticsv2Application#kinesis_firehose_output}
    */
    readonly kinesisFirehoseOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput;
    /**
    * kinesis_streams_output block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_output Kinesisanalyticsv2Application#kinesis_streams_output}
    */
    readonly kinesisStreamsOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput;
    /**
    * lambda_output block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#lambda_output Kinesisanalyticsv2Application#lambda_output}
    */
    readonly lambdaOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      destination_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct!.destinationSchema),
      kinesis_firehose_output: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct!.kinesisFirehoseOutput),
      kinesis_streams_output: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct!.kinesisStreamsOutput),
      lambda_output: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct!.lambdaOutput),
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
      record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_column_delimiter - computed: false, optional: false, required: true
    private _recordColumnDelimiter?: string; 
    public get recordColumnDelimiter() {
      return this.getStringAttribute('record_column_delimiter');
    }
    public set recordColumnDelimiter(value: string) {
      this._recordColumnDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordColumnDelimiterInput() {
      return this._recordColumnDelimiter
    }

    // record_row_delimiter - computed: false, optional: false, required: true
    private _recordRowDelimiter?: string; 
    public get recordRowDelimiter() {
      return this.getStringAttribute('record_row_delimiter');
    }
    public set recordRowDelimiter(value: string) {
      this._recordRowDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordRowDelimiterInput() {
      return this._recordRowDelimiter
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}
    */
    readonly recordRowPath: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_row_path - computed: false, optional: false, required: true
    private _recordRowPath?: string; 
    public get recordRowPath() {
      return this.getStringAttribute('record_row_path');
    }
    public set recordRowPath(value: string) {
      this._recordRowPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordRowPathInput() {
      return this._recordRowPath
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters {
    /**
    * csv_mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
    */
    readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters;
    /**
    * json_mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
    */
    readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      csv_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct!.csvMappingParameters),
      json_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct!.jsonMappingParameters),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // csv_mapping_parameters - computed: false, optional: true, required: false
    private _csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters | undefined; 
    private __csvMappingParametersOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference(this as any, "csv_mapping_parameters", true);
    public get csvMappingParameters() {
      return this.__csvMappingParametersOutput;
    }
    public putCsvMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters | undefined) {
      this._csvMappingParameters = value;
    }
    public resetCsvMappingParameters() {
      this._csvMappingParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvMappingParametersInput() {
      return this._csvMappingParameters
    }

    // json_mapping_parameters - computed: false, optional: true, required: false
    private _jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters | undefined; 
    private __jsonMappingParametersOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference(this as any, "json_mapping_parameters", true);
    public get jsonMappingParameters() {
      return this.__jsonMappingParametersOutput;
    }
    public putJsonMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters | undefined) {
      this._jsonMappingParameters = value;
    }
    public resetJsonMappingParameters() {
      this._jsonMappingParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonMappingParametersInput() {
      return this._jsonMappingParameters
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
    readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
      mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct!.mappingParameters),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_format_type - computed: false, optional: false, required: true
    private _recordFormatType?: string; 
    public get recordFormatType() {
      return this.getStringAttribute('record_format_type');
    }
    public set recordFormatType(value: string) {
      this._recordFormatType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFormatTypeInput() {
      return this._recordFormatType
    }

    // mapping_parameters - computed: false, optional: false, required: true
    private _mappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters; 
    private __mappingParametersOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference(this as any, "mapping_parameters", true);
    public get mappingParameters() {
      return this.__mappingParametersOutput;
    }
    public putMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters) {
      this._mappingParameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mappingParametersInput() {
      return this._mappingParameters
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
    readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
      record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform)(struct!.recordColumn),
      record_format: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct!.recordFormat),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // record_encoding - computed: false, optional: true, required: false
    private _recordEncoding?: string | undefined; 
    public get recordEncoding() {
      return this.getStringAttribute('record_encoding');
    }
    public set recordEncoding(value: string | undefined) {
      this._recordEncoding = value;
    }
    public resetRecordEncoding() {
      this._recordEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordEncodingInput() {
      return this._recordEncoding
    }

    // record_column - computed: false, optional: false, required: true
    private _recordColumn?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[]; 
    public get recordColumn() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('record_column') as any;
    }
    public set recordColumn(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[]) {
      this._recordColumn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordColumnInput() {
      return this._recordColumn
    }

    // record_format - computed: false, optional: false, required: true
    private _recordFormat?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat; 
    private __recordFormatOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference(this as any, "record_format", true);
    public get recordFormat() {
      return this.__recordFormatOutput;
    }
    public putRecordFormat(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat) {
      this._recordFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFormatInput() {
      return this._recordFormat
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      file_key: cdktf.stringToTerraform(struct!.fileKey),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_arn - computed: false, optional: false, required: true
    private _bucketArn?: string; 
    public get bucketArn() {
      return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
      this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
      return this._bucketArn
    }

    // file_key - computed: false, optional: false, required: true
    private _fileKey?: string; 
    public get fileKey() {
      return this.getStringAttribute('file_key');
    }
    public set fileKey(value: string) {
      this._fileKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileKeyInput() {
      return this._fileKey
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
    readonly referenceSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema;
    /**
    * s3_reference_data_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#s3_reference_data_source Kinesisanalyticsv2Application#s3_reference_data_source}
    */
    readonly s3ReferenceDataSource: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      table_name: cdktf.stringToTerraform(struct!.tableName),
      reference_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct!.referenceSchema),
      s3_reference_data_source: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct!.s3ReferenceDataSource),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // table_name - computed: false, optional: false, required: true
    private _tableName?: string; 
    public get tableName() {
      return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
      this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
      return this._tableName
    }

    // reference_schema - computed: false, optional: false, required: true
    private _referenceSchema?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema; 
    private __referenceSchemaOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference(this as any, "reference_schema", true);
    public get referenceSchema() {
      return this.__referenceSchemaOutput;
    }
    public putReferenceSchema(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema) {
      this._referenceSchema = value;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceSchemaInput() {
      return this._referenceSchema
    }

    // s3_reference_data_source - computed: false, optional: false, required: true
    private _s3ReferenceDataSource?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource; 
    private __s3ReferenceDataSourceOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference(this as any, "s3_reference_data_source", true);
    public get s3ReferenceDataSource() {
      return this.__s3ReferenceDataSourceOutput;
    }
    public putS3ReferenceDataSource(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource) {
      this._s3ReferenceDataSource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ReferenceDataSourceInput() {
      return this._s3ReferenceDataSource
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration {
    /**
    * input block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input Kinesisanalyticsv2Application#input}
    */
    readonly input?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput;
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
    readonly referenceDataSource?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct!.input),
      output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform)(struct!.output),
      reference_data_source: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct!.referenceDataSource),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // input - computed: false, optional: true, required: false
    private _input?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput | undefined; 
    private __inputOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference(this as any, "input", true);
    public get input() {
      return this.__inputOutput;
    }
    public putInput(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput | undefined) {
      this._input = value;
    }
    public resetInput() {
      this._input = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputInput() {
      return this._input
    }

    // output - computed: false, optional: true, required: false
    private _output?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[] | undefined; 
    public get output() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('output') as any;
    }
    public set output(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[] | undefined) {
      this._output = value;
    }
    public resetOutput() {
      this._output = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputInput() {
      return this._output
    }

    // reference_data_source - computed: false, optional: true, required: false
    private _referenceDataSource?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource | undefined; 
    private __referenceDataSourceOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference(this as any, "reference_data_source", true);
    public get referenceDataSource() {
      return this.__referenceDataSourceOutput;
    }
    public putReferenceDataSource(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource | undefined) {
      this._referenceDataSource = value;
    }
    public resetReferenceDataSource() {
      this._referenceDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceDataSourceInput() {
      return this._referenceDataSource
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

  function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
      this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfiguration {
    /**
    * application_code_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_code_configuration Kinesisanalyticsv2Application#application_code_configuration}
    */
    readonly applicationCodeConfiguration: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration;
    /**
    * application_snapshot_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_snapshot_configuration Kinesisanalyticsv2Application#application_snapshot_configuration}
    */
    readonly applicationSnapshotConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration;
    /**
    * environment_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#environment_properties Kinesisanalyticsv2Application#environment_properties}
    */
    readonly environmentProperties?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties;
    /**
    * flink_application_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_application_configuration Kinesisanalyticsv2Application#flink_application_configuration}
    */
    readonly flinkApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration;
    /**
    * run_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#run_configuration Kinesisanalyticsv2Application#run_configuration}
    */
    readonly runConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration;
    /**
    * sql_application_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_application_configuration Kinesisanalyticsv2Application#sql_application_configuration}
    */
    readonly sqlApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration;
    /**
    * vpc_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#vpc_configuration Kinesisanalyticsv2Application#vpc_configuration}
    */
    readonly vpcConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference | Kinesisanalyticsv2ApplicationApplicationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      application_code_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct!.applicationCodeConfiguration),
      application_snapshot_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct!.applicationSnapshotConfiguration),
      environment_properties: kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct!.environmentProperties),
      flink_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct!.flinkApplicationConfiguration),
      run_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct!.runConfiguration),
      sql_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct!.sqlApplicationConfiguration),
      vpc_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
    }
  }

  export class Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // application_code_configuration - computed: false, optional: false, required: true
    private _applicationCodeConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration; 
    private __applicationCodeConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference(this as any, "application_code_configuration", true);
    public get applicationCodeConfiguration() {
      return this.__applicationCodeConfigurationOutput;
    }
    public putApplicationCodeConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration) {
      this._applicationCodeConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationCodeConfigurationInput() {
      return this._applicationCodeConfiguration
    }

    // application_snapshot_configuration - computed: false, optional: true, required: false
    private _applicationSnapshotConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | undefined; 
    private __applicationSnapshotConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference(this as any, "application_snapshot_configuration", true);
    public get applicationSnapshotConfiguration() {
      return this.__applicationSnapshotConfigurationOutput;
    }
    public putApplicationSnapshotConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | undefined) {
      this._applicationSnapshotConfiguration = value;
    }
    public resetApplicationSnapshotConfiguration() {
      this._applicationSnapshotConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationSnapshotConfigurationInput() {
      return this._applicationSnapshotConfiguration
    }

    // environment_properties - computed: false, optional: true, required: false
    private _environmentProperties?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | undefined; 
    private __environmentPropertiesOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference(this as any, "environment_properties", true);
    public get environmentProperties() {
      return this.__environmentPropertiesOutput;
    }
    public putEnvironmentProperties(value: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | undefined) {
      this._environmentProperties = value;
    }
    public resetEnvironmentProperties() {
      this._environmentProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentPropertiesInput() {
      return this._environmentProperties
    }

    // flink_application_configuration - computed: false, optional: true, required: false
    private _flinkApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | undefined; 
    private __flinkApplicationConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference(this as any, "flink_application_configuration", true);
    public get flinkApplicationConfiguration() {
      return this.__flinkApplicationConfigurationOutput;
    }
    public putFlinkApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | undefined) {
      this._flinkApplicationConfiguration = value;
    }
    public resetFlinkApplicationConfiguration() {
      this._flinkApplicationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flinkApplicationConfigurationInput() {
      return this._flinkApplicationConfiguration
    }

    // run_configuration - computed: false, optional: true, required: false
    private _runConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration | undefined; 
    private __runConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference(this as any, "run_configuration", true);
    public get runConfiguration() {
      return this.__runConfigurationOutput;
    }
    public putRunConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration | undefined) {
      this._runConfiguration = value;
    }
    public resetRunConfiguration() {
      this._runConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runConfigurationInput() {
      return this._runConfiguration
    }

    // sql_application_configuration - computed: false, optional: true, required: false
    private _sqlApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | undefined; 
    private __sqlApplicationConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference(this as any, "sql_application_configuration", true);
    public get sqlApplicationConfiguration() {
      return this.__sqlApplicationConfigurationOutput;
    }
    public putSqlApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | undefined) {
      this._sqlApplicationConfiguration = value;
    }
    public resetSqlApplicationConfiguration() {
      this._sqlApplicationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlApplicationConfigurationInput() {
      return this._sqlApplicationConfiguration
    }

    // vpc_configuration - computed: false, optional: true, required: false
    private _vpcConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration | undefined; 
    private __vpcConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference(this as any, "vpc_configuration", true);
    public get vpcConfiguration() {
      return this.__vpcConfigurationOutput;
    }
    public putVpcConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration | undefined) {
      this._vpcConfiguration = value;
    }
    public resetVpcConfiguration() {
      this._vpcConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
      return this._vpcConfiguration
    }
  }
  export interface Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#log_stream_arn Kinesisanalyticsv2Application#log_stream_arn}
    */
    readonly logStreamArn: string;
  }

  function kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(struct?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference | Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      log_stream_arn: cdktf.stringToTerraform(struct!.logStreamArn),
    }
  }

  export class Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // log_stream_arn - computed: false, optional: false, required: true
    private _logStreamArn?: string; 
    public get logStreamArn() {
      return this.getStringAttribute('log_stream_arn');
    }
    public set logStreamArn(value: string) {
      this._logStreamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamArnInput() {
      return this._logStreamArn
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _forceStop?: boolean | cdktf.IResolvable | undefined; 
    public get forceStop() {
      return this.getBooleanAttribute('force_stop') as any;
    }
    public set forceStop(value: boolean | cdktf.IResolvable | undefined) {
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
    private _name?: string; 
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
    private _runtimeEnvironment?: string; 
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
    private _serviceExecutionRole?: string; 
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
    private _startApplication?: boolean | cdktf.IResolvable | undefined; 
    public get startApplication() {
      return this.getBooleanAttribute('start_application') as any;
    }
    public set startApplication(value: boolean | cdktf.IResolvable | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration | undefined; 
    private __applicationConfigurationOutput = new Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference(this as any, "application_configuration", true);
    public get applicationConfiguration() {
      return this.__applicationConfigurationOutput;
    }
    public putApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfiguration | undefined) {
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
    private _cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions | undefined; 
    private __cloudwatchLoggingOptionsOutput = new Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
    public get cloudwatchLoggingOptions() {
      return this.__cloudwatchLoggingOptionsOutput;
    }
    public putCloudwatchLoggingOptions(value: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions | undefined) {
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
        application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(this._applicationConfiguration),
        cloudwatch_logging_options: kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(this._cloudwatchLoggingOptions),
      };
    }
  }
  export interface Kinesisanalyticsv2ApplicationSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}
    */
    readonly applicationName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}
    */
    readonly snapshotName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot}
  */
  export class Kinesisanalyticsv2ApplicationSnapshot extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesisanalyticsv2_application_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Kinesisanalyticsv2ApplicationSnapshotConfig
    */
    public constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationSnapshotConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesisanalyticsv2_application_snapshot',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationName = config.applicationName;
      this._snapshotName = config.snapshotName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_name - computed: false, optional: false, required: true
    private _applicationName?: string; 
    public get applicationName() {
      return this.getStringAttribute('application_name');
    }
    public set applicationName(value: string) {
      this._applicationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationNameInput() {
      return this._applicationName
    }

    // application_version_id - computed: true, optional: false, required: false
    public get applicationVersionId() {
      return this.getNumberAttribute('application_version_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // snapshot_creation_timestamp - computed: true, optional: false, required: false
    public get snapshotCreationTimestamp() {
      return this.getStringAttribute('snapshot_creation_timestamp');
    }

    // snapshot_name - computed: false, optional: false, required: true
    private _snapshotName?: string; 
    public get snapshotName() {
      return this.getStringAttribute('snapshot_name');
    }
    public set snapshotName(value: string) {
      this._snapshotName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotNameInput() {
      return this._snapshotName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_name: cdktf.stringToTerraform(this._applicationName),
        snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      };
    }
  }
  export interface DataAwsKinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_firehose_delivery_stream.html#name DataAwsKinesisFirehoseDeliveryStream#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}
  */
  export class DataAwsKinesisFirehoseDeliveryStream extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_firehose_delivery_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKinesisFirehoseDeliveryStreamConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKinesisFirehoseDeliveryStreamConfig) {
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
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsKinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html#name DataAwsKinesisStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html#tags DataAwsKinesisStream#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html aws_kinesis_stream}
  */
  export class DataAwsKinesisStream extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html aws_kinesis_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKinesisStreamConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKinesisStreamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_stream',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // closed_shards - computed: true, optional: false, required: false
    public get closedShards() {
      return this.getListAttribute('closed_shards');
    }

    // creation_timestamp - computed: true, optional: false, required: false
    public get creationTimestamp() {
      return this.getNumberAttribute('creation_timestamp');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // open_shards - computed: true, optional: false, required: false
    public get openShards() {
      return this.getListAttribute('open_shards');
    }

    // retention_period - computed: true, optional: false, required: false
    public get retentionPeriod() {
      return this.getNumberAttribute('retention_period');
    }

    // shard_level_metrics - computed: true, optional: false, required: false
    public get shardLevelMetrics() {
      return this.getListAttribute('shard_level_metrics');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsKinesisStreamConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html#name DataAwsKinesisStreamConsumer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html#stream_arn DataAwsKinesisStreamConsumer#stream_arn}
    */
    readonly streamArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html aws_kinesis_stream_consumer}
  */
  export class DataAwsKinesisStreamConsumer extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_stream_consumer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html aws_kinesis_stream_consumer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKinesisStreamConsumerConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKinesisStreamConsumerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_stream_consumer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._streamArn = config.streamArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // creation_timestamp - computed: true, optional: false, required: false
    public get creationTimestamp() {
      return this.getStringAttribute('creation_timestamp');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // stream_arn - computed: false, optional: false, required: true
    private _streamArn?: string; 
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
      this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
      return this._streamArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        stream_arn: cdktf.stringToTerraform(this._streamArn),
      };
    }
  }
}
