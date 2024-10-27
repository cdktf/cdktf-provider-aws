// https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#arn KinesisFirehoseDeliveryStream#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#destination KinesisFirehoseDeliveryStream#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#destination_id KinesisFirehoseDeliveryStream#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#id KinesisFirehoseDeliveryStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#name KinesisFirehoseDeliveryStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#tags KinesisFirehoseDeliveryStream#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#tags_all KinesisFirehoseDeliveryStream#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#version_id KinesisFirehoseDeliveryStream#version_id}
  */
  readonly versionId?: string;
  /**
  * elasticsearch_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#elasticsearch_configuration KinesisFirehoseDeliveryStream#elasticsearch_configuration}
  */
  readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration;
  /**
  * extended_s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#extended_s3_configuration KinesisFirehoseDeliveryStream#extended_s3_configuration}
  */
  readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration;
  /**
  * http_endpoint_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#http_endpoint_configuration KinesisFirehoseDeliveryStream#http_endpoint_configuration}
  */
  readonly httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration;
  /**
  * iceberg_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#iceberg_configuration KinesisFirehoseDeliveryStream#iceberg_configuration}
  */
  readonly icebergConfiguration?: KinesisFirehoseDeliveryStreamIcebergConfiguration;
  /**
  * kinesis_source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kinesis_source_configuration KinesisFirehoseDeliveryStream#kinesis_source_configuration}
  */
  readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration;
  /**
  * msk_source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#msk_source_configuration KinesisFirehoseDeliveryStream#msk_source_configuration}
  */
  readonly mskSourceConfiguration?: KinesisFirehoseDeliveryStreamMskSourceConfiguration;
  /**
  * opensearch_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#opensearch_configuration KinesisFirehoseDeliveryStream#opensearch_configuration}
  */
  readonly opensearchConfiguration?: KinesisFirehoseDeliveryStreamOpensearchConfiguration;
  /**
  * opensearchserverless_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#opensearchserverless_configuration KinesisFirehoseDeliveryStream#opensearchserverless_configuration}
  */
  readonly opensearchserverlessConfiguration?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration;
  /**
  * redshift_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#redshift_configuration KinesisFirehoseDeliveryStream#redshift_configuration}
  */
  readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration;
  /**
  * server_side_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#server_side_encryption KinesisFirehoseDeliveryStream#server_side_encryption}
  */
  readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption;
  /**
  * snowflake_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_configuration KinesisFirehoseDeliveryStream#snowflake_configuration}
  */
  readonly snowflakeConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfiguration;
  /**
  * splunk_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#splunk_configuration KinesisFirehoseDeliveryStream#splunk_configuration}
  */
  readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#timeouts KinesisFirehoseDeliveryStream#timeouts}
  */
  readonly timeouts?: KinesisFirehoseDeliveryStreamTimeouts;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform, true)(struct!.parameters),
  }
}


export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsOutputReference {
    return new KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform, true)(struct!.processors),
  }
}


export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processors: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
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
    return this._roleArn;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cluster_endpoint KinesisFirehoseDeliveryStream#cluster_endpoint}
  */
  readonly clusterEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#domain_arn KinesisFirehoseDeliveryStream#domain_arn}
  */
  readonly domainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#index_name KinesisFirehoseDeliveryStream#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#index_rotation_period KinesisFirehoseDeliveryStream#index_rotation_period}
  */
  readonly indexRotationPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type_name KinesisFirehoseDeliveryStream#type_name}
  */
  readonly typeName?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
  */
  readonly vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    s3_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    vpc_config: kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.clusterEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_arn: {
      value: cdktf.stringToHclTerraform(struct!.domainArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_rotation_period: {
      value: cdktf.stringToHclTerraform(struct!.indexRotationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktf.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_backup_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsList",
    },
    processing_configuration: {
      value: kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationList",
    },
    s3_configuration: {
      value: kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationList",
    },
    vpc_config: {
      value: kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._clusterEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEndpoint = this._clusterEndpoint;
    }
    if (this._domainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainArn = this._domainArn;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._indexRotationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRotationPeriod = this._indexRotationPeriod;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._clusterEndpoint = undefined;
      this._domainArn = undefined;
      this._indexName = undefined;
      this._indexRotationPeriod = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._typeName = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._clusterEndpoint = value.clusterEndpoint;
      this._domainArn = value.domainArn;
      this._indexName = value.indexName;
      this._indexRotationPeriod = value.indexRotationPeriod;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._typeName = value.typeName;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // cluster_endpoint - computed: false, optional: true, required: false
  private _clusterEndpoint?: string; 
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }
  public set clusterEndpoint(value: string) {
    this._clusterEndpoint = value;
  }
  public resetClusterEndpoint() {
    this._clusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointInput() {
    return this._clusterEndpoint;
  }

  // domain_arn - computed: false, optional: true, required: false
  private _domainArn?: string; 
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }
  public set domainArn(value: string) {
    this._domainArn = value;
  }
  public resetDomainArn() {
    this._domainArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainArnInput() {
    return this._domainArn;
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
    return this._indexName;
  }

  // index_rotation_period - computed: false, optional: true, required: false
  private _indexRotationPeriod?: string; 
  public get indexRotationPeriod() {
    return this.getStringAttribute('index_rotation_period');
  }
  public set indexRotationPeriod(value: string) {
    this._indexRotationPeriod = value;
  }
  public resetIndexRotationPeriod() {
    this._indexRotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRotationPeriodInput() {
    return this._indexRotationPeriod;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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
    return this._roleArn;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#timestamp_formats KinesisFirehoseDeliveryStream#timestamp_formats}
  */
  readonly timestampFormats?: string[];
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timestampFormats),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timestamp_formats: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timestampFormats),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestampFormats !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormats = this._timestampFormats;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timestampFormats = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timestampFormats = value.timestampFormats;
    }
  }

  // timestamp_formats - computed: false, optional: true, required: false
  private _timestampFormats?: string[]; 
  public get timestampFormats() {
    return this.getListAttribute('timestamp_formats');
  }
  public set timestampFormats(value: string[]) {
    this._timestampFormats = value;
  }
  public resetTimestampFormats() {
    this._timestampFormats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatsInput() {
    return this._timestampFormats;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#case_insensitive KinesisFirehoseDeliveryStream#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#column_to_json_key_mappings KinesisFirehoseDeliveryStream#column_to_json_key_mappings}
  */
  readonly columnToJsonKeyMappings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#convert_dots_in_json_keys_to_underscores KinesisFirehoseDeliveryStream#convert_dots_in_json_keys_to_underscores}
  */
  readonly convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    column_to_json_key_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.columnToJsonKeyMappings),
    convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct!.convertDotsInJsonKeysToUnderscores),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_insensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_to_json_key_mappings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.columnToJsonKeyMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    convert_dots_in_json_keys_to_underscores: {
      value: cdktf.booleanToHclTerraform(struct!.convertDotsInJsonKeysToUnderscores),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitive = this._caseInsensitive;
    }
    if (this._columnToJsonKeyMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnToJsonKeyMappings = this._columnToJsonKeyMappings;
    }
    if (this._convertDotsInJsonKeysToUnderscores !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertDotsInJsonKeysToUnderscores = this._convertDotsInJsonKeysToUnderscores;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseInsensitive = undefined;
      this._columnToJsonKeyMappings = undefined;
      this._convertDotsInJsonKeysToUnderscores = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseInsensitive = value.caseInsensitive;
      this._columnToJsonKeyMappings = value.columnToJsonKeyMappings;
      this._convertDotsInJsonKeysToUnderscores = value.convertDotsInJsonKeysToUnderscores;
    }
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: boolean | cdktf.IResolvable; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }
  public set caseInsensitive(value: boolean | cdktf.IResolvable) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
  }

  // column_to_json_key_mappings - computed: false, optional: true, required: false
  private _columnToJsonKeyMappings?: { [key: string]: string }; 
  public get columnToJsonKeyMappings() {
    return this.getStringMapAttribute('column_to_json_key_mappings');
  }
  public set columnToJsonKeyMappings(value: { [key: string]: string }) {
    this._columnToJsonKeyMappings = value;
  }
  public resetColumnToJsonKeyMappings() {
    this._columnToJsonKeyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnToJsonKeyMappingsInput() {
    return this._columnToJsonKeyMappings;
  }

  // convert_dots_in_json_keys_to_underscores - computed: false, optional: true, required: false
  private _convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable; 
  public get convertDotsInJsonKeysToUnderscores() {
    return this.getBooleanAttribute('convert_dots_in_json_keys_to_underscores');
  }
  public set convertDotsInJsonKeysToUnderscores(value: boolean | cdktf.IResolvable) {
    this._convertDotsInJsonKeysToUnderscores = value;
  }
  public resetConvertDotsInJsonKeysToUnderscores() {
    this._convertDotsInJsonKeysToUnderscores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertDotsInJsonKeysToUnderscoresInput() {
    return this._convertDotsInJsonKeysToUnderscores;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
  /**
  * hive_json_ser_de block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#hive_json_ser_de KinesisFirehoseDeliveryStream#hive_json_ser_de}
  */
  readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe;
  /**
  * open_x_json_ser_de block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#open_x_json_ser_de KinesisFirehoseDeliveryStream#open_x_json_ser_de}
  */
  readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hive_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct!.hiveJsonSerDe),
    open_x_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct!.openXJsonSerDe),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hive_json_ser_de: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToHclTerraform(struct!.hiveJsonSerDe),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeList",
    },
    open_x_json_ser_de: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToHclTerraform(struct!.openXJsonSerDe),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hiveJsonSerDe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiveJsonSerDe = this._hiveJsonSerDe?.internalValue;
    }
    if (this._openXJsonSerDe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openXJsonSerDe = this._openXJsonSerDe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hiveJsonSerDe.internalValue = undefined;
      this._openXJsonSerDe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hiveJsonSerDe.internalValue = value.hiveJsonSerDe;
      this._openXJsonSerDe.internalValue = value.openXJsonSerDe;
    }
  }

  // hive_json_ser_de - computed: false, optional: true, required: false
  private _hiveJsonSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference(this, "hive_json_ser_de");
  public get hiveJsonSerDe() {
    return this._hiveJsonSerDe;
  }
  public putHiveJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe) {
    this._hiveJsonSerDe.internalValue = value;
  }
  public resetHiveJsonSerDe() {
    this._hiveJsonSerDe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveJsonSerDeInput() {
    return this._hiveJsonSerDe.internalValue;
  }

  // open_x_json_ser_de - computed: false, optional: true, required: false
  private _openXJsonSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference(this, "open_x_json_ser_de");
  public get openXJsonSerDe() {
    return this._openXJsonSerDe;
  }
  public putOpenXJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe) {
    this._openXJsonSerDe.internalValue = value;
  }
  public resetOpenXJsonSerDe() {
    this._openXJsonSerDe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openXJsonSerDeInput() {
    return this._openXJsonSerDe.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
  /**
  * deserializer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#deserializer KinesisFirehoseDeliveryStream#deserializer}
  */
  readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deserializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct!.deserializer),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deserializer: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToHclTerraform(struct!.deserializer),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deserializer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deserializer = this._deserializer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deserializer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deserializer.internalValue = value.deserializer;
    }
  }

  // deserializer - computed: false, optional: false, required: true
  private _deserializer = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference(this, "deserializer");
  public get deserializer() {
    return this._deserializer;
  }
  public putDeserializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer) {
    this._deserializer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deserializerInput() {
    return this._deserializer.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bloom_filter_columns KinesisFirehoseDeliveryStream#bloom_filter_columns}
  */
  readonly bloomFilterColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bloom_filter_false_positive_probability KinesisFirehoseDeliveryStream#bloom_filter_false_positive_probability}
  */
  readonly bloomFilterFalsePositiveProbability?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression KinesisFirehoseDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#dictionary_key_threshold KinesisFirehoseDeliveryStream#dictionary_key_threshold}
  */
  readonly dictionaryKeyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enable_padding KinesisFirehoseDeliveryStream#enable_padding}
  */
  readonly enablePadding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#format_version KinesisFirehoseDeliveryStream#format_version}
  */
  readonly formatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#padding_tolerance KinesisFirehoseDeliveryStream#padding_tolerance}
  */
  readonly paddingTolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#row_index_stride KinesisFirehoseDeliveryStream#row_index_stride}
  */
  readonly rowIndexStride?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#stripe_size_bytes KinesisFirehoseDeliveryStream#stripe_size_bytes}
  */
  readonly stripeSizeBytes?: number;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size_bytes: cdktf.numberToTerraform(struct!.blockSizeBytes),
    bloom_filter_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bloomFilterColumns),
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


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.blockSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bloom_filter_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bloomFilterColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bloom_filter_false_positive_probability: {
      value: cdktf.numberToHclTerraform(struct!.bloomFilterFalsePositiveProbability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary_key_threshold: {
      value: cdktf.numberToHclTerraform(struct!.dictionaryKeyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_padding: {
      value: cdktf.booleanToHclTerraform(struct!.enablePadding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format_version: {
      value: cdktf.stringToHclTerraform(struct!.formatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding_tolerance: {
      value: cdktf.numberToHclTerraform(struct!.paddingTolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    row_index_stride: {
      value: cdktf.numberToHclTerraform(struct!.rowIndexStride),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stripe_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.stripeSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSizeBytes = this._blockSizeBytes;
    }
    if (this._bloomFilterColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.bloomFilterColumns = this._bloomFilterColumns;
    }
    if (this._bloomFilterFalsePositiveProbability !== undefined) {
      hasAnyValues = true;
      internalValueResult.bloomFilterFalsePositiveProbability = this._bloomFilterFalsePositiveProbability;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._dictionaryKeyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryKeyThreshold = this._dictionaryKeyThreshold;
    }
    if (this._enablePadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePadding = this._enablePadding;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
    }
    if (this._paddingTolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.paddingTolerance = this._paddingTolerance;
    }
    if (this._rowIndexStride !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowIndexStride = this._rowIndexStride;
    }
    if (this._stripeSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripeSizeBytes = this._stripeSizeBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSizeBytes = undefined;
      this._bloomFilterColumns = undefined;
      this._bloomFilterFalsePositiveProbability = undefined;
      this._compression = undefined;
      this._dictionaryKeyThreshold = undefined;
      this._enablePadding = undefined;
      this._formatVersion = undefined;
      this._paddingTolerance = undefined;
      this._rowIndexStride = undefined;
      this._stripeSizeBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSizeBytes = value.blockSizeBytes;
      this._bloomFilterColumns = value.bloomFilterColumns;
      this._bloomFilterFalsePositiveProbability = value.bloomFilterFalsePositiveProbability;
      this._compression = value.compression;
      this._dictionaryKeyThreshold = value.dictionaryKeyThreshold;
      this._enablePadding = value.enablePadding;
      this._formatVersion = value.formatVersion;
      this._paddingTolerance = value.paddingTolerance;
      this._rowIndexStride = value.rowIndexStride;
      this._stripeSizeBytes = value.stripeSizeBytes;
    }
  }

  // block_size_bytes - computed: false, optional: true, required: false
  private _blockSizeBytes?: number; 
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }
  public set blockSizeBytes(value: number) {
    this._blockSizeBytes = value;
  }
  public resetBlockSizeBytes() {
    this._blockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeBytesInput() {
    return this._blockSizeBytes;
  }

  // bloom_filter_columns - computed: false, optional: true, required: false
  private _bloomFilterColumns?: string[]; 
  public get bloomFilterColumns() {
    return this.getListAttribute('bloom_filter_columns');
  }
  public set bloomFilterColumns(value: string[]) {
    this._bloomFilterColumns = value;
  }
  public resetBloomFilterColumns() {
    this._bloomFilterColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bloomFilterColumnsInput() {
    return this._bloomFilterColumns;
  }

  // bloom_filter_false_positive_probability - computed: false, optional: true, required: false
  private _bloomFilterFalsePositiveProbability?: number; 
  public get bloomFilterFalsePositiveProbability() {
    return this.getNumberAttribute('bloom_filter_false_positive_probability');
  }
  public set bloomFilterFalsePositiveProbability(value: number) {
    this._bloomFilterFalsePositiveProbability = value;
  }
  public resetBloomFilterFalsePositiveProbability() {
    this._bloomFilterFalsePositiveProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bloomFilterFalsePositiveProbabilityInput() {
    return this._bloomFilterFalsePositiveProbability;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // dictionary_key_threshold - computed: false, optional: true, required: false
  private _dictionaryKeyThreshold?: number; 
  public get dictionaryKeyThreshold() {
    return this.getNumberAttribute('dictionary_key_threshold');
  }
  public set dictionaryKeyThreshold(value: number) {
    this._dictionaryKeyThreshold = value;
  }
  public resetDictionaryKeyThreshold() {
    this._dictionaryKeyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryKeyThresholdInput() {
    return this._dictionaryKeyThreshold;
  }

  // enable_padding - computed: false, optional: true, required: false
  private _enablePadding?: boolean | cdktf.IResolvable; 
  public get enablePadding() {
    return this.getBooleanAttribute('enable_padding');
  }
  public set enablePadding(value: boolean | cdktf.IResolvable) {
    this._enablePadding = value;
  }
  public resetEnablePadding() {
    this._enablePadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePaddingInput() {
    return this._enablePadding;
  }

  // format_version - computed: false, optional: true, required: false
  private _formatVersion?: string; 
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }
  public set formatVersion(value: string) {
    this._formatVersion = value;
  }
  public resetFormatVersion() {
    this._formatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatVersionInput() {
    return this._formatVersion;
  }

  // padding_tolerance - computed: false, optional: true, required: false
  private _paddingTolerance?: number; 
  public get paddingTolerance() {
    return this.getNumberAttribute('padding_tolerance');
  }
  public set paddingTolerance(value: number) {
    this._paddingTolerance = value;
  }
  public resetPaddingTolerance() {
    this._paddingTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingToleranceInput() {
    return this._paddingTolerance;
  }

  // row_index_stride - computed: false, optional: true, required: false
  private _rowIndexStride?: number; 
  public get rowIndexStride() {
    return this.getNumberAttribute('row_index_stride');
  }
  public set rowIndexStride(value: number) {
    this._rowIndexStride = value;
  }
  public resetRowIndexStride() {
    this._rowIndexStride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIndexStrideInput() {
    return this._rowIndexStride;
  }

  // stripe_size_bytes - computed: false, optional: true, required: false
  private _stripeSizeBytes?: number; 
  public get stripeSizeBytes() {
    return this.getNumberAttribute('stripe_size_bytes');
  }
  public set stripeSizeBytes(value: number) {
    this._stripeSizeBytes = value;
  }
  public resetStripeSizeBytes() {
    this._stripeSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripeSizeBytesInput() {
    return this._stripeSizeBytes;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression KinesisFirehoseDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enable_dictionary_compression KinesisFirehoseDeliveryStream#enable_dictionary_compression}
  */
  readonly enableDictionaryCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#max_padding_bytes KinesisFirehoseDeliveryStream#max_padding_bytes}
  */
  readonly maxPaddingBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#page_size_bytes KinesisFirehoseDeliveryStream#page_size_bytes}
  */
  readonly pageSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#writer_version KinesisFirehoseDeliveryStream#writer_version}
  */
  readonly writerVersion?: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.blockSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dictionary_compression: {
      value: cdktf.booleanToHclTerraform(struct!.enableDictionaryCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_padding_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxPaddingBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.pageSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writer_version: {
      value: cdktf.stringToHclTerraform(struct!.writerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSizeBytes = this._blockSizeBytes;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._enableDictionaryCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDictionaryCompression = this._enableDictionaryCompression;
    }
    if (this._maxPaddingBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPaddingBytes = this._maxPaddingBytes;
    }
    if (this._pageSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSizeBytes = this._pageSizeBytes;
    }
    if (this._writerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.writerVersion = this._writerVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSizeBytes = undefined;
      this._compression = undefined;
      this._enableDictionaryCompression = undefined;
      this._maxPaddingBytes = undefined;
      this._pageSizeBytes = undefined;
      this._writerVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSizeBytes = value.blockSizeBytes;
      this._compression = value.compression;
      this._enableDictionaryCompression = value.enableDictionaryCompression;
      this._maxPaddingBytes = value.maxPaddingBytes;
      this._pageSizeBytes = value.pageSizeBytes;
      this._writerVersion = value.writerVersion;
    }
  }

  // block_size_bytes - computed: false, optional: true, required: false
  private _blockSizeBytes?: number; 
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }
  public set blockSizeBytes(value: number) {
    this._blockSizeBytes = value;
  }
  public resetBlockSizeBytes() {
    this._blockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeBytesInput() {
    return this._blockSizeBytes;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // enable_dictionary_compression - computed: false, optional: true, required: false
  private _enableDictionaryCompression?: boolean | cdktf.IResolvable; 
  public get enableDictionaryCompression() {
    return this.getBooleanAttribute('enable_dictionary_compression');
  }
  public set enableDictionaryCompression(value: boolean | cdktf.IResolvable) {
    this._enableDictionaryCompression = value;
  }
  public resetEnableDictionaryCompression() {
    this._enableDictionaryCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDictionaryCompressionInput() {
    return this._enableDictionaryCompression;
  }

  // max_padding_bytes - computed: false, optional: true, required: false
  private _maxPaddingBytes?: number; 
  public get maxPaddingBytes() {
    return this.getNumberAttribute('max_padding_bytes');
  }
  public set maxPaddingBytes(value: number) {
    this._maxPaddingBytes = value;
  }
  public resetMaxPaddingBytes() {
    this._maxPaddingBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPaddingBytesInput() {
    return this._maxPaddingBytes;
  }

  // page_size_bytes - computed: false, optional: true, required: false
  private _pageSizeBytes?: number; 
  public get pageSizeBytes() {
    return this.getNumberAttribute('page_size_bytes');
  }
  public set pageSizeBytes(value: number) {
    this._pageSizeBytes = value;
  }
  public resetPageSizeBytes() {
    this._pageSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeBytesInput() {
    return this._pageSizeBytes;
  }

  // writer_version - computed: false, optional: true, required: false
  private _writerVersion?: string; 
  public get writerVersion() {
    return this.getStringAttribute('writer_version');
  }
  public set writerVersion(value: string) {
    this._writerVersion = value;
  }
  public resetWriterVersion() {
    this._writerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writerVersionInput() {
    return this._writerVersion;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
  /**
  * orc_ser_de block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#orc_ser_de KinesisFirehoseDeliveryStream#orc_ser_de}
  */
  readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe;
  /**
  * parquet_ser_de block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parquet_ser_de KinesisFirehoseDeliveryStream#parquet_ser_de}
  */
  readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orc_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct!.orcSerDe),
    parquet_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct!.parquetSerDe),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    orc_ser_de: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToHclTerraform(struct!.orcSerDe),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeList",
    },
    parquet_ser_de: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToHclTerraform(struct!.parquetSerDe),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orcSerDe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orcSerDe = this._orcSerDe?.internalValue;
    }
    if (this._parquetSerDe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetSerDe = this._parquetSerDe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._orcSerDe.internalValue = undefined;
      this._parquetSerDe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._orcSerDe.internalValue = value.orcSerDe;
      this._parquetSerDe.internalValue = value.parquetSerDe;
    }
  }

  // orc_ser_de - computed: false, optional: true, required: false
  private _orcSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference(this, "orc_ser_de");
  public get orcSerDe() {
    return this._orcSerDe;
  }
  public putOrcSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe) {
    this._orcSerDe.internalValue = value;
  }
  public resetOrcSerDe() {
    this._orcSerDe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orcSerDeInput() {
    return this._orcSerDe.internalValue;
  }

  // parquet_ser_de - computed: false, optional: true, required: false
  private _parquetSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference(this, "parquet_ser_de");
  public get parquetSerDe() {
    return this._parquetSerDe;
  }
  public putParquetSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe) {
    this._parquetSerDe.internalValue = value;
  }
  public resetParquetSerDe() {
    this._parquetSerDe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetSerDeInput() {
    return this._parquetSerDe.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
  /**
  * serializer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#serializer KinesisFirehoseDeliveryStream#serializer}
  */
  readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct!.serializer),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serializer: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToHclTerraform(struct!.serializer),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serializer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializer = this._serializer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serializer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serializer.internalValue = value.serializer;
    }
  }

  // serializer - computed: false, optional: false, required: true
  private _serializer = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference(this, "serializer");
  public get serializer() {
    return this._serializer;
  }
  public putSerializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer) {
    this._serializer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerInput() {
    return this._serializer.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#catalog_id KinesisFirehoseDeliveryStream#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#database_name KinesisFirehoseDeliveryStream#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#region KinesisFirehoseDeliveryStream#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#table_name KinesisFirehoseDeliveryStream#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#version_id KinesisFirehoseDeliveryStream#version_id}
  */
  readonly versionId?: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
      this._versionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
      this._versionId = value.versionId;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
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
    return this._databaseName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
    return this._roleArn;
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
    return this._tableName;
  }

  // version_id - computed: false, optional: true, required: false
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
    return this._versionId;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * input_format_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#input_format_configuration KinesisFirehoseDeliveryStream#input_format_configuration}
  */
  readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
  /**
  * output_format_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#output_format_configuration KinesisFirehoseDeliveryStream#output_format_configuration}
  */
  readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
  /**
  * schema_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#schema_configuration KinesisFirehoseDeliveryStream#schema_configuration}
  */
  readonly schemaConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_configuration: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToHclTerraform(struct!.inputFormatConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationList",
    },
    output_format_configuration: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToHclTerraform(struct!.outputFormatConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationList",
    },
    schema_configuration: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToHclTerraform(struct!.schemaConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inputFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatConfiguration = this._inputFormatConfiguration?.internalValue;
    }
    if (this._outputFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormatConfiguration = this._outputFormatConfiguration?.internalValue;
    }
    if (this._schemaConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaConfiguration = this._schemaConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._inputFormatConfiguration.internalValue = undefined;
      this._outputFormatConfiguration.internalValue = undefined;
      this._schemaConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._inputFormatConfiguration.internalValue = value.inputFormatConfiguration;
      this._outputFormatConfiguration.internalValue = value.outputFormatConfiguration;
      this._schemaConfiguration.internalValue = value.schemaConfiguration;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // input_format_configuration - computed: false, optional: false, required: true
  private _inputFormatConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference(this, "input_format_configuration");
  public get inputFormatConfiguration() {
    return this._inputFormatConfiguration;
  }
  public putInputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration) {
    this._inputFormatConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatConfigurationInput() {
    return this._inputFormatConfiguration.internalValue;
  }

  // output_format_configuration - computed: false, optional: false, required: true
  private _outputFormatConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference(this, "output_format_configuration");
  public get outputFormatConfiguration() {
    return this._outputFormatConfiguration;
  }
  public putOutputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration) {
    this._outputFormatConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatConfigurationInput() {
    return this._outputFormatConfiguration.internalValue;
  }

  // schema_configuration - computed: false, optional: false, required: true
  private _schemaConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference(this, "schema_configuration");
  public get schemaConfiguration() {
    return this._schemaConfiguration;
  }
  public putSchemaConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration) {
    this._schemaConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConfigurationInput() {
    return this._schemaConfiguration.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_duration: {
      value: cdktf.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retryDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retryDuration = value.retryDuration;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform, true)(struct!.parameters),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsOutputReference {
    return new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform, true)(struct!.processors),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processors: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#custom_time_zone KinesisFirehoseDeliveryStream#custom_time_zone}
  */
  readonly customTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#file_extension KinesisFirehoseDeliveryStream#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions;
  /**
  * data_format_conversion_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#data_format_conversion_configuration KinesisFirehoseDeliveryStream#data_format_conversion_configuration}
  */
  readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration;
  /**
  * dynamic_partitioning_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#dynamic_partitioning_configuration KinesisFirehoseDeliveryStream#dynamic_partitioning_configuration}
  */
  readonly dynamicPartitioningConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration;
  /**
  * s3_backup_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
  */
  readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    custom_time_zone: cdktf.stringToTerraform(struct!.customTimeZone),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    file_extension: cdktf.stringToTerraform(struct!.fileExtension),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    data_format_conversion_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct!.dataFormatConversionConfiguration),
    dynamic_partitioning_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform(struct!.dynamicPartitioningConfiguration),
    processing_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    s3_backup_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct!.s3BackupConfiguration),
  }
}


export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.customTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_extension: {
      value: cdktf.stringToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_backup_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsList",
    },
    data_format_conversion_configuration: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToHclTerraform(struct!.dataFormatConversionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationList",
    },
    dynamic_partitioning_configuration: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToHclTerraform(struct!.dynamicPartitioningConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationList",
    },
    processing_configuration: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationList",
    },
    s3_backup_configuration: {
      value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToHclTerraform(struct!.s3BackupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._customTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTimeZone = this._customTimeZone;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._dataFormatConversionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormatConversionConfiguration = this._dataFormatConversionConfiguration?.internalValue;
    }
    if (this._dynamicPartitioningConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicPartitioningConfiguration = this._dynamicPartitioningConfiguration?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3BackupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupConfiguration = this._s3BackupConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._customTimeZone = undefined;
      this._errorOutputPrefix = undefined;
      this._fileExtension = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._dataFormatConversionConfiguration.internalValue = undefined;
      this._dynamicPartitioningConfiguration.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3BackupConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._customTimeZone = value.customTimeZone;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._fileExtension = value.fileExtension;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._dataFormatConversionConfiguration.internalValue = value.dataFormatConversionConfiguration;
      this._dynamicPartitioningConfiguration.internalValue = value.dynamicPartitioningConfiguration;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3BackupConfiguration.internalValue = value.s3BackupConfiguration;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // custom_time_zone - computed: false, optional: true, required: false
  private _customTimeZone?: string; 
  public get customTimeZone() {
    return this.getStringAttribute('custom_time_zone');
  }
  public set customTimeZone(value: string) {
    this._customTimeZone = value;
  }
  public resetCustomTimeZone() {
    this._customTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimeZoneInput() {
    return this._customTimeZone;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string; 
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // data_format_conversion_configuration - computed: false, optional: true, required: false
  private _dataFormatConversionConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference(this, "data_format_conversion_configuration");
  public get dataFormatConversionConfiguration() {
    return this._dataFormatConversionConfiguration;
  }
  public putDataFormatConversionConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration) {
    this._dataFormatConversionConfiguration.internalValue = value;
  }
  public resetDataFormatConversionConfiguration() {
    this._dataFormatConversionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatConversionConfigurationInput() {
    return this._dataFormatConversionConfiguration.internalValue;
  }

  // dynamic_partitioning_configuration - computed: false, optional: true, required: false
  private _dynamicPartitioningConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference(this, "dynamic_partitioning_configuration");
  public get dynamicPartitioningConfiguration() {
    return this._dynamicPartitioningConfiguration;
  }
  public putDynamicPartitioningConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration) {
    this._dynamicPartitioningConfiguration.internalValue = value;
  }
  public resetDynamicPartitioningConfiguration() {
    this._dynamicPartitioningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPartitioningConfigurationInput() {
    return this._dynamicPartitioningConfiguration.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_backup_configuration - computed: false, optional: true, required: false
  private _s3BackupConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference(this, "s3_backup_configuration");
  public get s3BackupConfiguration() {
    return this._s3BackupConfiguration;
  }
  public putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration) {
    this._s3BackupConfiguration.internalValue = value;
  }
  public resetS3BackupConfiguration() {
    this._s3BackupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupConfigurationInput() {
    return this._s3BackupConfiguration.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform, true)(struct!.parameters),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsOutputReference {
    return new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform, true)(struct!.processors),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processors: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#name KinesisFirehoseDeliveryStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#value KinesisFirehoseDeliveryStream#value}
  */
  readonly value: string;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesOutputReference {
    return new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#content_encoding KinesisFirehoseDeliveryStream#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * common_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#common_attributes KinesisFirehoseDeliveryStream#common_attributes}
  */
  readonly commonAttributes?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
    common_attributes: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform, true)(struct!.commonAttributes),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.contentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_attributes: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToHclTerraform, true)(struct!.commonAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentEncoding = this._contentEncoding;
    }
    if (this._commonAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAttributes = this._commonAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentEncoding = undefined;
      this._commonAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentEncoding = value.contentEncoding;
      this._commonAttributes.internalValue = value.commonAttributes;
    }
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // common_attributes - computed: false, optional: true, required: false
  private _commonAttributes = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesList(this, "common_attributes", false);
  public get commonAttributes() {
    return this._commonAttributes;
  }
  public putCommonAttributes(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | cdktf.IResolvable) {
    this._commonAttributes.internalValue = value;
  }
  public resetCommonAttributes() {
    this._commonAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAttributesInput() {
    return this._commonAttributes.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
  */
  readonly secretArn?: string;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#access_key KinesisFirehoseDeliveryStream#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#name KinesisFirehoseDeliveryStream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#url KinesisFirehoseDeliveryStream#url}
  */
  readonly url: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration;
  /**
  * request_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#request_configuration KinesisFirehoseDeliveryStream#request_configuration}
  */
  readonly requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration;
  /**
  * secrets_manager_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration KinesisFirehoseDeliveryStream#secrets_manager_configuration}
  */
  readonly secretsManagerConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    s3_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    secrets_manager_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationToTerraform(struct!.secretsManagerConfiguration),
  }
}


export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktf.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_backup_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsList",
    },
    processing_configuration: {
      value: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationList",
    },
    request_configuration: {
      value: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToHclTerraform(struct!.requestConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationList",
    },
    s3_configuration: {
      value: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationList",
    },
    secrets_manager_configuration: {
      value: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationToHclTerraform(struct!.secretsManagerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._requestConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestConfiguration = this._requestConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._secretsManagerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerConfiguration = this._secretsManagerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._name = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._url = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._requestConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._secretsManagerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._name = value.name;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._url = value.url;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._requestConfiguration.internalValue = value.requestConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._secretsManagerConfiguration.internalValue = value.secretsManagerConfiguration;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
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
    return this._url;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // request_configuration - computed: false, optional: true, required: false
  private _requestConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference(this, "request_configuration");
  public get requestConfiguration() {
    return this._requestConfiguration;
  }
  public putRequestConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration) {
    this._requestConfiguration.internalValue = value;
  }
  public resetRequestConfiguration() {
    this._requestConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigurationInput() {
    return this._requestConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // secrets_manager_configuration - computed: false, optional: true, required: false
  private _secretsManagerConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
  public putSecretsManagerConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration) {
    this._secretsManagerConfiguration.internalValue = value;
  }
  public resetSecretsManagerConfiguration() {
    this._secretsManagerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerConfigurationInput() {
    return this._secretsManagerConfiguration.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#database_name KinesisFirehoseDeliveryStream#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_error_output_prefix KinesisFirehoseDeliveryStream#s3_error_output_prefix}
  */
  readonly s3ErrorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#table_name KinesisFirehoseDeliveryStream#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#unique_keys KinesisFirehoseDeliveryStream#unique_keys}
  */
  readonly uniqueKeys?: string[];
}

export function kinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    s3_error_output_prefix: cdktf.stringToTerraform(struct!.s3ErrorOutputPrefix),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    unique_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uniqueKeys),
  }
}


export function kinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.s3ErrorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uniqueKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._s3ErrorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ErrorOutputPrefix = this._s3ErrorOutputPrefix;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._uniqueKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueKeys = this._uniqueKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._s3ErrorOutputPrefix = undefined;
      this._tableName = undefined;
      this._uniqueKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._s3ErrorOutputPrefix = value.s3ErrorOutputPrefix;
      this._tableName = value.tableName;
      this._uniqueKeys = value.uniqueKeys;
    }
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
    return this._databaseName;
  }

  // s3_error_output_prefix - computed: false, optional: true, required: false
  private _s3ErrorOutputPrefix?: string; 
  public get s3ErrorOutputPrefix() {
    return this.getStringAttribute('s3_error_output_prefix');
  }
  public set s3ErrorOutputPrefix(value: string) {
    this._s3ErrorOutputPrefix = value;
  }
  public resetS3ErrorOutputPrefix() {
    this._s3ErrorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ErrorOutputPrefixInput() {
    return this._s3ErrorOutputPrefix;
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
    return this._tableName;
  }

  // unique_keys - computed: false, optional: true, required: false
  private _uniqueKeys?: string[]; 
  public get uniqueKeys() {
    return this.getListAttribute('unique_keys');
  }
  public set uniqueKeys(value: string[]) {
    this._uniqueKeys = value;
  }
  public resetUniqueKeys() {
    this._uniqueKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeysInput() {
    return this._uniqueKeys;
  }
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationOutputReference {
    return new KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersToTerraform, true)(struct!.parameters),
  }
}


export function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsOutputReference {
    return new KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsToTerraform, true)(struct!.processors),
  }
}


export function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processors: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamIcebergConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#catalog_arn KinesisFirehoseDeliveryStream#catalog_arn}
  */
  readonly catalogArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions;
  /**
  * destination_table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#destination_table_configuration KinesisFirehoseDeliveryStream#destination_table_configuration}
  */
  readonly destinationTableConfiguration?: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration[] | cdktf.IResolvable;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration;
}

export function kinesisFirehoseDeliveryStreamIcebergConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    catalog_arn: cdktf.stringToTerraform(struct!.catalogArn),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    destination_table_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationToTerraform, true)(struct!.destinationTableConfiguration),
    processing_configuration: kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    s3_configuration: kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}


export function kinesisFirehoseDeliveryStreamIcebergConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    catalog_arn: {
      value: cdktf.stringToHclTerraform(struct!.catalogArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktf.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_backup_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsList",
    },
    destination_table_configuration: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationToHclTerraform, true)(struct!.destinationTableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationList",
    },
    processing_configuration: {
      value: kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationList",
    },
    s3_configuration: {
      value: kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamIcebergConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._catalogArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogArn = this._catalogArn;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._destinationTableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTableConfiguration = this._destinationTableConfiguration?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._catalogArn = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._destinationTableConfiguration.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._catalogArn = value.catalogArn;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._destinationTableConfiguration.internalValue = value.destinationTableConfiguration;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // catalog_arn - computed: false, optional: false, required: true
  private _catalogArn?: string; 
  public get catalogArn() {
    return this.getStringAttribute('catalog_arn');
  }
  public set catalogArn(value: string) {
    this._catalogArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogArnInput() {
    return this._catalogArn;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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
    return this._roleArn;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // destination_table_configuration - computed: false, optional: true, required: false
  private _destinationTableConfiguration = new KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationList(this, "destination_table_configuration", false);
  public get destinationTableConfiguration() {
    return this._destinationTableConfiguration;
  }
  public putDestinationTableConfiguration(value: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration[] | cdktf.IResolvable) {
    this._destinationTableConfiguration.internalValue = value;
  }
  public resetDestinationTableConfiguration() {
    this._destinationTableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableConfigurationInput() {
    return this._destinationTableConfiguration.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamKinesisSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kinesis_stream_arn KinesisFirehoseDeliveryStream#kinesis_stream_arn}
  */
  readonly kinesisStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kinesis_stream_arn: cdktf.stringToTerraform(struct!.kinesisStreamArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kinesis_stream_arn: {
      value: cdktf.stringToHclTerraform(struct!.kinesisStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesisStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamArn = this._kinesisStreamArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kinesisStreamArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kinesisStreamArn = value.kinesisStreamArn;
      this._roleArn = value.roleArn;
    }
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
    return this._kinesisStreamArn;
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
    return this._roleArn;
  }
}
export interface KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#connectivity KinesisFirehoseDeliveryStream#connectivity}
  */
  readonly connectivity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference | KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity: cdktf.stringToTerraform(struct!.connectivity),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function kinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference | KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity: {
      value: cdktf.stringToHclTerraform(struct!.connectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivity = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivity = value.connectivity;
      this._roleArn = value.roleArn;
    }
  }

  // connectivity - computed: false, optional: false, required: true
  private _connectivity?: string; 
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }
  public set connectivity(value: string) {
    this._connectivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity;
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
    return this._roleArn;
  }
}
export interface KinesisFirehoseDeliveryStreamMskSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#msk_cluster_arn KinesisFirehoseDeliveryStream#msk_cluster_arn}
  */
  readonly mskClusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#topic_name KinesisFirehoseDeliveryStream#topic_name}
  */
  readonly topicName: string;
  /**
  * authentication_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#authentication_configuration KinesisFirehoseDeliveryStream#authentication_configuration}
  */
  readonly authenticationConfiguration: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration;
}

export function kinesisFirehoseDeliveryStreamMskSourceConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamMskSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamMskSourceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msk_cluster_arn: cdktf.stringToTerraform(struct!.mskClusterArn),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
    authentication_configuration: kinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationToTerraform(struct!.authenticationConfiguration),
  }
}


export function kinesisFirehoseDeliveryStreamMskSourceConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamMskSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamMskSourceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msk_cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.mskClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_configuration: {
      value: kinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationToHclTerraform(struct!.authenticationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamMskSourceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamMskSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mskClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mskClusterArn = this._mskClusterArn;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._authenticationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamMskSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mskClusterArn = undefined;
      this._topicName = undefined;
      this._authenticationConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mskClusterArn = value.mskClusterArn;
      this._topicName = value.topicName;
      this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
    }
  }

  // msk_cluster_arn - computed: false, optional: false, required: true
  private _mskClusterArn?: string; 
  public get mskClusterArn() {
    return this.getStringAttribute('msk_cluster_arn');
  }
  public set mskClusterArn(value: string) {
    this._mskClusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mskClusterArnInput() {
    return this._mskClusterArn;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // authentication_configuration - computed: false, optional: false, required: true
  private _authenticationConfiguration = new KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration) {
    this._authenticationConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#default_document_id_format KinesisFirehoseDeliveryStream#default_document_id_format}
  */
  readonly defaultDocumentIdFormat: string;
}

export function kinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_document_id_format: cdktf.stringToTerraform(struct!.defaultDocumentIdFormat),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_document_id_format: {
      value: cdktf.stringToHclTerraform(struct!.defaultDocumentIdFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDocumentIdFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDocumentIdFormat = this._defaultDocumentIdFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultDocumentIdFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultDocumentIdFormat = value.defaultDocumentIdFormat;
    }
  }

  // default_document_id_format - computed: false, optional: false, required: true
  private _defaultDocumentIdFormat?: string; 
  public get defaultDocumentIdFormat() {
    return this.getStringAttribute('default_document_id_format');
  }
  public set defaultDocumentIdFormat(value: string) {
    this._defaultDocumentIdFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDocumentIdFormatInput() {
    return this._defaultDocumentIdFormat;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersToTerraform, true)(struct!.parameters),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsOutputReference {
    return new KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsToTerraform, true)(struct!.processors),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processors: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function kinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
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
    return this._roleArn;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cluster_endpoint KinesisFirehoseDeliveryStream#cluster_endpoint}
  */
  readonly clusterEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#domain_arn KinesisFirehoseDeliveryStream#domain_arn}
  */
  readonly domainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#index_name KinesisFirehoseDeliveryStream#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#index_rotation_period KinesisFirehoseDeliveryStream#index_rotation_period}
  */
  readonly indexRotationPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type_name KinesisFirehoseDeliveryStream#type_name}
  */
  readonly typeName?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions;
  /**
  * document_id_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#document_id_options KinesisFirehoseDeliveryStream#document_id_options}
  */
  readonly documentIdOptions?: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
  */
  readonly vpcConfig?: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig;
}

export function kinesisFirehoseDeliveryStreamOpensearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    document_id_options: kinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsToTerraform(struct!.documentIdOptions),
    processing_configuration: kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    s3_configuration: kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    vpc_config: kinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.clusterEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_arn: {
      value: cdktf.stringToHclTerraform(struct!.domainArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_rotation_period: {
      value: cdktf.stringToHclTerraform(struct!.indexRotationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktf.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_backup_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsList",
    },
    document_id_options: {
      value: kinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsToHclTerraform(struct!.documentIdOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsList",
    },
    processing_configuration: {
      value: kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationList",
    },
    s3_configuration: {
      value: kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationList",
    },
    vpc_config: {
      value: kinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._clusterEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEndpoint = this._clusterEndpoint;
    }
    if (this._domainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainArn = this._domainArn;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._indexRotationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRotationPeriod = this._indexRotationPeriod;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._documentIdOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentIdOptions = this._documentIdOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._clusterEndpoint = undefined;
      this._domainArn = undefined;
      this._indexName = undefined;
      this._indexRotationPeriod = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._typeName = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._documentIdOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._clusterEndpoint = value.clusterEndpoint;
      this._domainArn = value.domainArn;
      this._indexName = value.indexName;
      this._indexRotationPeriod = value.indexRotationPeriod;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._typeName = value.typeName;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._documentIdOptions.internalValue = value.documentIdOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // cluster_endpoint - computed: false, optional: true, required: false
  private _clusterEndpoint?: string; 
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }
  public set clusterEndpoint(value: string) {
    this._clusterEndpoint = value;
  }
  public resetClusterEndpoint() {
    this._clusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointInput() {
    return this._clusterEndpoint;
  }

  // domain_arn - computed: false, optional: true, required: false
  private _domainArn?: string; 
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }
  public set domainArn(value: string) {
    this._domainArn = value;
  }
  public resetDomainArn() {
    this._domainArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainArnInput() {
    return this._domainArn;
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
    return this._indexName;
  }

  // index_rotation_period - computed: false, optional: true, required: false
  private _indexRotationPeriod?: string; 
  public get indexRotationPeriod() {
    return this.getStringAttribute('index_rotation_period');
  }
  public set indexRotationPeriod(value: string) {
    this._indexRotationPeriod = value;
  }
  public resetIndexRotationPeriod() {
    this._indexRotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRotationPeriodInput() {
    return this._indexRotationPeriod;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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
    return this._roleArn;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // document_id_options - computed: false, optional: true, required: false
  private _documentIdOptions = new KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsOutputReference(this, "document_id_options");
  public get documentIdOptions() {
    return this._documentIdOptions;
  }
  public putDocumentIdOptions(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions) {
    this._documentIdOptions.internalValue = value;
  }
  public resetDocumentIdOptions() {
    this._documentIdOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentIdOptionsInput() {
    return this._documentIdOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersToTerraform, true)(struct!.parameters),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsOutputReference {
    return new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsToTerraform, true)(struct!.processors),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processors: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
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
    return this._roleArn;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#collection_endpoint KinesisFirehoseDeliveryStream#collection_endpoint}
  */
  readonly collectionEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#index_name KinesisFirehoseDeliveryStream#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
  */
  readonly vpcConfig?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig;
}

export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    collection_endpoint: cdktf.stringToTerraform(struct!.collectionEndpoint),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    s3_configuration: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    vpc_config: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collection_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.collectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktf.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_backup_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsList",
    },
    processing_configuration: {
      value: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationList",
    },
    s3_configuration: {
      value: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationList",
    },
    vpc_config: {
      value: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._collectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionEndpoint = this._collectionEndpoint;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._collectionEndpoint = undefined;
      this._indexName = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._collectionEndpoint = value.collectionEndpoint;
      this._indexName = value.indexName;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // collection_endpoint - computed: false, optional: false, required: true
  private _collectionEndpoint?: string; 
  public get collectionEndpoint() {
    return this.getStringAttribute('collection_endpoint');
  }
  public set collectionEndpoint(value: string) {
    this._collectionEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionEndpointInput() {
    return this._collectionEndpoint;
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
    return this._indexName;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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
    return this._roleArn;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform, true)(struct!.parameters),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsOutputReference {
    return new KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform, true)(struct!.processors),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processors: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
  */
  readonly secretArn?: string;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cluster_jdbcurl KinesisFirehoseDeliveryStream#cluster_jdbcurl}
  */
  readonly clusterJdbcurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#copy_options KinesisFirehoseDeliveryStream#copy_options}
  */
  readonly copyOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#data_table_columns KinesisFirehoseDeliveryStream#data_table_columns}
  */
  readonly dataTableColumns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#data_table_name KinesisFirehoseDeliveryStream#data_table_name}
  */
  readonly dataTableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#password KinesisFirehoseDeliveryStream#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#username KinesisFirehoseDeliveryStream#username}
  */
  readonly username?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration;
  /**
  * s3_backup_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
  */
  readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration;
  /**
  * secrets_manager_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration KinesisFirehoseDeliveryStream#secrets_manager_configuration}
  */
  readonly secretsManagerConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    s3_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    secrets_manager_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationToTerraform(struct!.secretsManagerConfiguration),
  }
}


export function kinesisFirehoseDeliveryStreamRedshiftConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_jdbcurl: {
      value: cdktf.stringToHclTerraform(struct!.clusterJdbcurl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_options: {
      value: cdktf.stringToHclTerraform(struct!.copyOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_table_columns: {
      value: cdktf.stringToHclTerraform(struct!.dataTableColumns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_table_name: {
      value: cdktf.stringToHclTerraform(struct!.dataTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktf.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_backup_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsList",
    },
    processing_configuration: {
      value: kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationList",
    },
    s3_backup_configuration: {
      value: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToHclTerraform(struct!.s3BackupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationList",
    },
    s3_configuration: {
      value: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationList",
    },
    secrets_manager_configuration: {
      value: kinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationToHclTerraform(struct!.secretsManagerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterJdbcurl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterJdbcurl = this._clusterJdbcurl;
    }
    if (this._copyOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyOptions = this._copyOptions;
    }
    if (this._dataTableColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTableColumns = this._dataTableColumns;
    }
    if (this._dataTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTableName = this._dataTableName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3BackupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupConfiguration = this._s3BackupConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._secretsManagerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerConfiguration = this._secretsManagerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterJdbcurl = undefined;
      this._copyOptions = undefined;
      this._dataTableColumns = undefined;
      this._dataTableName = undefined;
      this._password = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._username = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3BackupConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._secretsManagerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterJdbcurl = value.clusterJdbcurl;
      this._copyOptions = value.copyOptions;
      this._dataTableColumns = value.dataTableColumns;
      this._dataTableName = value.dataTableName;
      this._password = value.password;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._username = value.username;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3BackupConfiguration.internalValue = value.s3BackupConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._secretsManagerConfiguration.internalValue = value.secretsManagerConfiguration;
    }
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
    return this._clusterJdbcurl;
  }

  // copy_options - computed: false, optional: true, required: false
  private _copyOptions?: string; 
  public get copyOptions() {
    return this.getStringAttribute('copy_options');
  }
  public set copyOptions(value: string) {
    this._copyOptions = value;
  }
  public resetCopyOptions() {
    this._copyOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyOptionsInput() {
    return this._copyOptions;
  }

  // data_table_columns - computed: false, optional: true, required: false
  private _dataTableColumns?: string; 
  public get dataTableColumns() {
    return this.getStringAttribute('data_table_columns');
  }
  public set dataTableColumns(value: string) {
    this._dataTableColumns = value;
  }
  public resetDataTableColumns() {
    this._dataTableColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTableColumnsInput() {
    return this._dataTableColumns;
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
    return this._dataTableName;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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
    return this._roleArn;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_backup_configuration - computed: false, optional: true, required: false
  private _s3BackupConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference(this, "s3_backup_configuration");
  public get s3BackupConfiguration() {
    return this._s3BackupConfiguration;
  }
  public putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration) {
    this._s3BackupConfiguration.internalValue = value;
  }
  public resetS3BackupConfiguration() {
    this._s3BackupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupConfigurationInput() {
    return this._s3BackupConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // secrets_manager_configuration - computed: false, optional: true, required: false
  private _secretsManagerConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
  public putSecretsManagerConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration) {
    this._secretsManagerConfiguration.internalValue = value;
  }
  public resetSecretsManagerConfiguration() {
    this._secretsManagerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerConfigurationInput() {
    return this._secretsManagerConfiguration.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamServerSideEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#key_arn KinesisFirehoseDeliveryStream#key_arn}
  */
  readonly keyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#key_type KinesisFirehoseDeliveryStream#key_type}
  */
  readonly keyType?: string;
}

export function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference | KinesisFirehoseDeliveryStreamServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


export function kinesisFirehoseDeliveryStreamServerSideEncryptionToHclTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference | KinesisFirehoseDeliveryStreamServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_arn: {
      value: cdktf.stringToHclTerraform(struct!.keyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamServerSideEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArn = this._keyArn;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamServerSideEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._keyArn = undefined;
      this._keyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._keyArn = value.keyArn;
      this._keyType = value.keyType;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // key_arn - computed: false, optional: true, required: false
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  public resetKeyArn() {
    this._keyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersToTerraform, true)(struct!.parameters),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsOutputReference {
    return new KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsToTerraform, true)(struct!.processors),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processors: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
  */
  readonly secretArn?: string;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_role KinesisFirehoseDeliveryStream#snowflake_role}
  */
  readonly snowflakeRole?: string;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    snowflake_role: cdktf.stringToTerraform(struct!.snowflakeRole),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snowflake_role: {
      value: cdktf.stringToHclTerraform(struct!.snowflakeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._snowflakeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeRole = this._snowflakeRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._snowflakeRole = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._snowflakeRole = value.snowflakeRole;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // snowflake_role - computed: false, optional: true, required: false
  private _snowflakeRole?: string; 
  public get snowflakeRole() {
    return this.getStringAttribute('snowflake_role');
  }
  public set snowflakeRole(value: string) {
    this._snowflakeRole = value;
  }
  public resetSnowflakeRole() {
    this._snowflakeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeRoleInput() {
    return this._snowflakeRole;
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#private_link_vpce_id KinesisFirehoseDeliveryStream#private_link_vpce_id}
  */
  readonly privateLinkVpceId: string;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_link_vpce_id: cdktf.stringToTerraform(struct!.privateLinkVpceId),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_link_vpce_id: {
      value: cdktf.stringToHclTerraform(struct!.privateLinkVpceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateLinkVpceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkVpceId = this._privateLinkVpceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateLinkVpceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateLinkVpceId = value.privateLinkVpceId;
    }
  }

  // private_link_vpce_id - computed: false, optional: false, required: true
  private _privateLinkVpceId?: string; 
  public get privateLinkVpceId() {
    return this.getStringAttribute('private_link_vpce_id');
  }
  public set privateLinkVpceId(value: string) {
    this._privateLinkVpceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkVpceIdInput() {
    return this._privateLinkVpceId;
  }
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#account_url KinesisFirehoseDeliveryStream#account_url}
  */
  readonly accountUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#content_column_name KinesisFirehoseDeliveryStream#content_column_name}
  */
  readonly contentColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#data_loading_option KinesisFirehoseDeliveryStream#data_loading_option}
  */
  readonly dataLoadingOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#database KinesisFirehoseDeliveryStream#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#key_passphrase KinesisFirehoseDeliveryStream#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#metadata_column_name KinesisFirehoseDeliveryStream#metadata_column_name}
  */
  readonly metadataColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#private_key KinesisFirehoseDeliveryStream#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#schema KinesisFirehoseDeliveryStream#schema}
  */
  readonly schema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#table KinesisFirehoseDeliveryStream#table}
  */
  readonly table: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#user KinesisFirehoseDeliveryStream#user}
  */
  readonly user?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration;
  /**
  * secrets_manager_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration KinesisFirehoseDeliveryStream#secrets_manager_configuration}
  */
  readonly secretsManagerConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration;
  /**
  * snowflake_role_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_role_configuration KinesisFirehoseDeliveryStream#snowflake_role_configuration}
  */
  readonly snowflakeRoleConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration;
  /**
  * snowflake_vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_vpc_configuration KinesisFirehoseDeliveryStream#snowflake_vpc_configuration}
  */
  readonly snowflakeVpcConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration;
}

export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_url: cdktf.stringToTerraform(struct!.accountUrl),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    content_column_name: cdktf.stringToTerraform(struct!.contentColumnName),
    data_loading_option: cdktf.stringToTerraform(struct!.dataLoadingOption),
    database: cdktf.stringToTerraform(struct!.database),
    key_passphrase: cdktf.stringToTerraform(struct!.keyPassphrase),
    metadata_column_name: cdktf.stringToTerraform(struct!.metadataColumnName),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
    user: cdktf.stringToTerraform(struct!.user),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    s3_configuration: kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    secrets_manager_configuration: kinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationToTerraform(struct!.secretsManagerConfiguration),
    snowflake_role_configuration: kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationToTerraform(struct!.snowflakeRoleConfiguration),
    snowflake_vpc_configuration: kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationToTerraform(struct!.snowflakeVpcConfiguration),
  }
}


export function kinesisFirehoseDeliveryStreamSnowflakeConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_url: {
      value: cdktf.stringToHclTerraform(struct!.accountUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_column_name: {
      value: cdktf.stringToHclTerraform(struct!.contentColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_loading_option: {
      value: cdktf.stringToHclTerraform(struct!.dataLoadingOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.keyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_column_name: {
      value: cdktf.stringToHclTerraform(struct!.metadataColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktf.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_backup_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsList",
    },
    processing_configuration: {
      value: kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationList",
    },
    s3_configuration: {
      value: kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationList",
    },
    secrets_manager_configuration: {
      value: kinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationToHclTerraform(struct!.secretsManagerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationList",
    },
    snowflake_role_configuration: {
      value: kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationToHclTerraform(struct!.snowflakeRoleConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationList",
    },
    snowflake_vpc_configuration: {
      value: kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationToHclTerraform(struct!.snowflakeVpcConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSnowflakeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUrl = this._accountUrl;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._contentColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentColumnName = this._contentColumnName;
    }
    if (this._dataLoadingOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLoadingOption = this._dataLoadingOption;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._keyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassphrase = this._keyPassphrase;
    }
    if (this._metadataColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataColumnName = this._metadataColumnName;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._secretsManagerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerConfiguration = this._secretsManagerConfiguration?.internalValue;
    }
    if (this._snowflakeRoleConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeRoleConfiguration = this._snowflakeRoleConfiguration?.internalValue;
    }
    if (this._snowflakeVpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeVpcConfiguration = this._snowflakeVpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountUrl = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._contentColumnName = undefined;
      this._dataLoadingOption = undefined;
      this._database = undefined;
      this._keyPassphrase = undefined;
      this._metadataColumnName = undefined;
      this._privateKey = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._schema = undefined;
      this._table = undefined;
      this._user = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._secretsManagerConfiguration.internalValue = undefined;
      this._snowflakeRoleConfiguration.internalValue = undefined;
      this._snowflakeVpcConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountUrl = value.accountUrl;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._contentColumnName = value.contentColumnName;
      this._dataLoadingOption = value.dataLoadingOption;
      this._database = value.database;
      this._keyPassphrase = value.keyPassphrase;
      this._metadataColumnName = value.metadataColumnName;
      this._privateKey = value.privateKey;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._schema = value.schema;
      this._table = value.table;
      this._user = value.user;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._secretsManagerConfiguration.internalValue = value.secretsManagerConfiguration;
      this._snowflakeRoleConfiguration.internalValue = value.snowflakeRoleConfiguration;
      this._snowflakeVpcConfiguration.internalValue = value.snowflakeVpcConfiguration;
    }
  }

  // account_url - computed: false, optional: false, required: true
  private _accountUrl?: string; 
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }
  public set accountUrl(value: string) {
    this._accountUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUrlInput() {
    return this._accountUrl;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // content_column_name - computed: false, optional: true, required: false
  private _contentColumnName?: string; 
  public get contentColumnName() {
    return this.getStringAttribute('content_column_name');
  }
  public set contentColumnName(value: string) {
    this._contentColumnName = value;
  }
  public resetContentColumnName() {
    this._contentColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentColumnNameInput() {
    return this._contentColumnName;
  }

  // data_loading_option - computed: false, optional: true, required: false
  private _dataLoadingOption?: string; 
  public get dataLoadingOption() {
    return this.getStringAttribute('data_loading_option');
  }
  public set dataLoadingOption(value: string) {
    this._dataLoadingOption = value;
  }
  public resetDataLoadingOption() {
    this._dataLoadingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLoadingOptionInput() {
    return this._dataLoadingOption;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
  }

  // metadata_column_name - computed: false, optional: true, required: false
  private _metadataColumnName?: string; 
  public get metadataColumnName() {
    return this.getStringAttribute('metadata_column_name');
  }
  public set metadataColumnName(value: string) {
    this._metadataColumnName = value;
  }
  public resetMetadataColumnName() {
    this._metadataColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataColumnNameInput() {
    return this._metadataColumnName;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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
    return this._roleArn;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // secrets_manager_configuration - computed: false, optional: true, required: false
  private _secretsManagerConfiguration = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
  public putSecretsManagerConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration) {
    this._secretsManagerConfiguration.internalValue = value;
  }
  public resetSecretsManagerConfiguration() {
    this._secretsManagerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerConfigurationInput() {
    return this._secretsManagerConfiguration.internalValue;
  }

  // snowflake_role_configuration - computed: false, optional: true, required: false
  private _snowflakeRoleConfiguration = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationOutputReference(this, "snowflake_role_configuration");
  public get snowflakeRoleConfiguration() {
    return this._snowflakeRoleConfiguration;
  }
  public putSnowflakeRoleConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration) {
    this._snowflakeRoleConfiguration.internalValue = value;
  }
  public resetSnowflakeRoleConfiguration() {
    this._snowflakeRoleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeRoleConfigurationInput() {
    return this._snowflakeRoleConfiguration.internalValue;
  }

  // snowflake_vpc_configuration - computed: false, optional: true, required: false
  private _snowflakeVpcConfiguration = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationOutputReference(this, "snowflake_vpc_configuration");
  public get snowflakeVpcConfiguration() {
    return this._snowflakeVpcConfiguration;
  }
  public putSnowflakeVpcConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration) {
    this._snowflakeVpcConfiguration.internalValue = value;
  }
  public resetSnowflakeVpcConfiguration() {
    this._snowflakeVpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeVpcConfigurationInput() {
    return this._snowflakeVpcConfiguration.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersOutputReference {
    return new KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform, true)(struct!.parameters),
  }
}


export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
  public internalValue? : KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsOutputReference {
    return new KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform, true)(struct!.processors),
  }
}


export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processors: {
      value: cdktf.listMapperHcl(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}


export function kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktf.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktf.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
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
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
    return this._roleArn;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
  */
  readonly secretArn?: string;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}


export function kinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#hec_acknowledgment_timeout KinesisFirehoseDeliveryStream#hec_acknowledgment_timeout}
  */
  readonly hecAcknowledgmentTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#hec_endpoint KinesisFirehoseDeliveryStream#hec_endpoint}
  */
  readonly hecEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#hec_endpoint_type KinesisFirehoseDeliveryStream#hec_endpoint_type}
  */
  readonly hecEndpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#hec_token KinesisFirehoseDeliveryStream#hec_token}
  */
  readonly hecToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration;
  /**
  * secrets_manager_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration KinesisFirehoseDeliveryStream#secrets_manager_configuration}
  */
  readonly secretsManagerConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    hec_acknowledgment_timeout: cdktf.numberToTerraform(struct!.hecAcknowledgmentTimeout),
    hec_endpoint: cdktf.stringToTerraform(struct!.hecEndpoint),
    hec_endpoint_type: cdktf.stringToTerraform(struct!.hecEndpointType),
    hec_token: cdktf.stringToTerraform(struct!.hecToken),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    s3_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    secrets_manager_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationToTerraform(struct!.secretsManagerConfiguration),
  }
}


export function kinesisFirehoseDeliveryStreamSplunkConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffering_interval: {
      value: cdktf.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hec_acknowledgment_timeout: {
      value: cdktf.numberToHclTerraform(struct!.hecAcknowledgmentTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hec_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.hecEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hec_endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.hecEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hec_token: {
      value: cdktf.stringToHclTerraform(struct!.hecToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktf.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_backup_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsList",
    },
    processing_configuration: {
      value: kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationList",
    },
    s3_configuration: {
      value: kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationList",
    },
    secrets_manager_configuration: {
      value: kinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationToHclTerraform(struct!.secretsManagerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._hecAcknowledgmentTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecAcknowledgmentTimeout = this._hecAcknowledgmentTimeout;
    }
    if (this._hecEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecEndpoint = this._hecEndpoint;
    }
    if (this._hecEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecEndpointType = this._hecEndpointType;
    }
    if (this._hecToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecToken = this._hecToken;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._secretsManagerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerConfiguration = this._secretsManagerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._hecAcknowledgmentTimeout = undefined;
      this._hecEndpoint = undefined;
      this._hecEndpointType = undefined;
      this._hecToken = undefined;
      this._retryDuration = undefined;
      this._s3BackupMode = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._secretsManagerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._hecAcknowledgmentTimeout = value.hecAcknowledgmentTimeout;
      this._hecEndpoint = value.hecEndpoint;
      this._hecEndpointType = value.hecEndpointType;
      this._hecToken = value.hecToken;
      this._retryDuration = value.retryDuration;
      this._s3BackupMode = value.s3BackupMode;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._secretsManagerConfiguration.internalValue = value.secretsManagerConfiguration;
    }
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // hec_acknowledgment_timeout - computed: false, optional: true, required: false
  private _hecAcknowledgmentTimeout?: number; 
  public get hecAcknowledgmentTimeout() {
    return this.getNumberAttribute('hec_acknowledgment_timeout');
  }
  public set hecAcknowledgmentTimeout(value: number) {
    this._hecAcknowledgmentTimeout = value;
  }
  public resetHecAcknowledgmentTimeout() {
    this._hecAcknowledgmentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecAcknowledgmentTimeoutInput() {
    return this._hecAcknowledgmentTimeout;
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
    return this._hecEndpoint;
  }

  // hec_endpoint_type - computed: false, optional: true, required: false
  private _hecEndpointType?: string; 
  public get hecEndpointType() {
    return this.getStringAttribute('hec_endpoint_type');
  }
  public set hecEndpointType(value: string) {
    this._hecEndpointType = value;
  }
  public resetHecEndpointType() {
    this._hecEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecEndpointTypeInput() {
    return this._hecEndpointType;
  }

  // hec_token - computed: false, optional: true, required: false
  private _hecToken?: string; 
  public get hecToken() {
    return this.getStringAttribute('hec_token');
  }
  public set hecToken(value: string) {
    this._hecToken = value;
  }
  public resetHecToken() {
    this._hecToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecTokenInput() {
    return this._hecToken;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // secrets_manager_configuration - computed: false, optional: true, required: false
  private _secretsManagerConfiguration = new KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
  public putSecretsManagerConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration) {
    this._secretsManagerConfiguration.internalValue = value;
  }
  public resetSecretsManagerConfiguration() {
    this._secretsManagerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerConfigurationInput() {
    return this._secretsManagerConfiguration.internalValue;
  }
}
export interface KinesisFirehoseDeliveryStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#create KinesisFirehoseDeliveryStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#delete KinesisFirehoseDeliveryStream#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#update KinesisFirehoseDeliveryStream#update}
  */
  readonly update?: string;
}

export function kinesisFirehoseDeliveryStreamTimeoutsToTerraform(struct?: KinesisFirehoseDeliveryStreamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kinesisFirehoseDeliveryStreamTimeoutsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisFirehoseDeliveryStreamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KinesisFirehoseDeliveryStreamTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDeliveryStreamTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream}
*/
export class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kinesis_firehose_delivery_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KinesisFirehoseDeliveryStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KinesisFirehoseDeliveryStream to import
  * @param importFromId The id of the existing KinesisFirehoseDeliveryStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KinesisFirehoseDeliveryStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_kinesis_firehose_delivery_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisFirehoseDeliveryStreamConfig
  */
  public constructor(scope: Construct, id: string, config: KinesisFirehoseDeliveryStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_firehose_delivery_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.73.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arn = config.arn;
    this._destination = config.destination;
    this._destinationId = config.destinationId;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._versionId = config.versionId;
    this._elasticsearchConfiguration.internalValue = config.elasticsearchConfiguration;
    this._extendedS3Configuration.internalValue = config.extendedS3Configuration;
    this._httpEndpointConfiguration.internalValue = config.httpEndpointConfiguration;
    this._icebergConfiguration.internalValue = config.icebergConfiguration;
    this._kinesisSourceConfiguration.internalValue = config.kinesisSourceConfiguration;
    this._mskSourceConfiguration.internalValue = config.mskSourceConfiguration;
    this._opensearchConfiguration.internalValue = config.opensearchConfiguration;
    this._opensearchserverlessConfiguration.internalValue = config.opensearchserverlessConfiguration;
    this._redshiftConfiguration.internalValue = config.redshiftConfiguration;
    this._serverSideEncryption.internalValue = config.serverSideEncryption;
    this._snowflakeConfiguration.internalValue = config.snowflakeConfiguration;
    this._splunkConfiguration.internalValue = config.splunkConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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
    return this._destination;
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
    return this._destinationId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
    return this._versionId;
  }

  // elasticsearch_configuration - computed: false, optional: true, required: false
  private _elasticsearchConfiguration = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference(this, "elasticsearch_configuration");
  public get elasticsearchConfiguration() {
    return this._elasticsearchConfiguration;
  }
  public putElasticsearchConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration) {
    this._elasticsearchConfiguration.internalValue = value;
  }
  public resetElasticsearchConfiguration() {
    this._elasticsearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConfigurationInput() {
    return this._elasticsearchConfiguration.internalValue;
  }

  // extended_s3_configuration - computed: false, optional: true, required: false
  private _extendedS3Configuration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference(this, "extended_s3_configuration");
  public get extendedS3Configuration() {
    return this._extendedS3Configuration;
  }
  public putExtendedS3Configuration(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration) {
    this._extendedS3Configuration.internalValue = value;
  }
  public resetExtendedS3Configuration() {
    this._extendedS3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedS3ConfigurationInput() {
    return this._extendedS3Configuration.internalValue;
  }

  // http_endpoint_configuration - computed: false, optional: true, required: false
  private _httpEndpointConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference(this, "http_endpoint_configuration");
  public get httpEndpointConfiguration() {
    return this._httpEndpointConfiguration;
  }
  public putHttpEndpointConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration) {
    this._httpEndpointConfiguration.internalValue = value;
  }
  public resetHttpEndpointConfiguration() {
    this._httpEndpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointConfigurationInput() {
    return this._httpEndpointConfiguration.internalValue;
  }

  // iceberg_configuration - computed: false, optional: true, required: false
  private _icebergConfiguration = new KinesisFirehoseDeliveryStreamIcebergConfigurationOutputReference(this, "iceberg_configuration");
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: KinesisFirehoseDeliveryStreamIcebergConfiguration) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }

  // kinesis_source_configuration - computed: false, optional: true, required: false
  private _kinesisSourceConfiguration = new KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference(this, "kinesis_source_configuration");
  public get kinesisSourceConfiguration() {
    return this._kinesisSourceConfiguration;
  }
  public putKinesisSourceConfiguration(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration) {
    this._kinesisSourceConfiguration.internalValue = value;
  }
  public resetKinesisSourceConfiguration() {
    this._kinesisSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisSourceConfigurationInput() {
    return this._kinesisSourceConfiguration.internalValue;
  }

  // msk_source_configuration - computed: false, optional: true, required: false
  private _mskSourceConfiguration = new KinesisFirehoseDeliveryStreamMskSourceConfigurationOutputReference(this, "msk_source_configuration");
  public get mskSourceConfiguration() {
    return this._mskSourceConfiguration;
  }
  public putMskSourceConfiguration(value: KinesisFirehoseDeliveryStreamMskSourceConfiguration) {
    this._mskSourceConfiguration.internalValue = value;
  }
  public resetMskSourceConfiguration() {
    this._mskSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mskSourceConfigurationInput() {
    return this._mskSourceConfiguration.internalValue;
  }

  // opensearch_configuration - computed: false, optional: true, required: false
  private _opensearchConfiguration = new KinesisFirehoseDeliveryStreamOpensearchConfigurationOutputReference(this, "opensearch_configuration");
  public get opensearchConfiguration() {
    return this._opensearchConfiguration;
  }
  public putOpensearchConfiguration(value: KinesisFirehoseDeliveryStreamOpensearchConfiguration) {
    this._opensearchConfiguration.internalValue = value;
  }
  public resetOpensearchConfiguration() {
    this._opensearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchConfigurationInput() {
    return this._opensearchConfiguration.internalValue;
  }

  // opensearchserverless_configuration - computed: false, optional: true, required: false
  private _opensearchserverlessConfiguration = new KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationOutputReference(this, "opensearchserverless_configuration");
  public get opensearchserverlessConfiguration() {
    return this._opensearchserverlessConfiguration;
  }
  public putOpensearchserverlessConfiguration(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration) {
    this._opensearchserverlessConfiguration.internalValue = value;
  }
  public resetOpensearchserverlessConfiguration() {
    this._opensearchserverlessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchserverlessConfigurationInput() {
    return this._opensearchserverlessConfiguration.internalValue;
  }

  // redshift_configuration - computed: false, optional: true, required: false
  private _redshiftConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference(this, "redshift_configuration");
  public get redshiftConfiguration() {
    return this._redshiftConfiguration;
  }
  public putRedshiftConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration) {
    this._redshiftConfiguration.internalValue = value;
  }
  public resetRedshiftConfiguration() {
    this._redshiftConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigurationInput() {
    return this._redshiftConfiguration.internalValue;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption = new KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference(this, "server_side_encryption");
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public putServerSideEncryption(value: KinesisFirehoseDeliveryStreamServerSideEncryption) {
    this._serverSideEncryption.internalValue = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption.internalValue;
  }

  // snowflake_configuration - computed: false, optional: true, required: false
  private _snowflakeConfiguration = new KinesisFirehoseDeliveryStreamSnowflakeConfigurationOutputReference(this, "snowflake_configuration");
  public get snowflakeConfiguration() {
    return this._snowflakeConfiguration;
  }
  public putSnowflakeConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfiguration) {
    this._snowflakeConfiguration.internalValue = value;
  }
  public resetSnowflakeConfiguration() {
    this._snowflakeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeConfigurationInput() {
    return this._snowflakeConfiguration.internalValue;
  }

  // splunk_configuration - computed: false, optional: true, required: false
  private _splunkConfiguration = new KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference(this, "splunk_configuration");
  public get splunkConfiguration() {
    return this._splunkConfiguration;
  }
  public putSplunkConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfiguration) {
    this._splunkConfiguration.internalValue = value;
  }
  public resetSplunkConfiguration() {
    this._splunkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkConfigurationInput() {
    return this._splunkConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KinesisFirehoseDeliveryStreamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KinesisFirehoseDeliveryStreamTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      destination: cdktf.stringToTerraform(this._destination),
      destination_id: cdktf.stringToTerraform(this._destinationId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      version_id: cdktf.stringToTerraform(this._versionId),
      elasticsearch_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(this._elasticsearchConfiguration.internalValue),
      extended_s3_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(this._extendedS3Configuration.internalValue),
      http_endpoint_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(this._httpEndpointConfiguration.internalValue),
      iceberg_configuration: kinesisFirehoseDeliveryStreamIcebergConfigurationToTerraform(this._icebergConfiguration.internalValue),
      kinesis_source_configuration: kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(this._kinesisSourceConfiguration.internalValue),
      msk_source_configuration: kinesisFirehoseDeliveryStreamMskSourceConfigurationToTerraform(this._mskSourceConfiguration.internalValue),
      opensearch_configuration: kinesisFirehoseDeliveryStreamOpensearchConfigurationToTerraform(this._opensearchConfiguration.internalValue),
      opensearchserverless_configuration: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationToTerraform(this._opensearchserverlessConfiguration.internalValue),
      redshift_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(this._redshiftConfiguration.internalValue),
      server_side_encryption: kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(this._serverSideEncryption.internalValue),
      snowflake_configuration: kinesisFirehoseDeliveryStreamSnowflakeConfigurationToTerraform(this._snowflakeConfiguration.internalValue),
      splunk_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(this._splunkConfiguration.internalValue),
      timeouts: kinesisFirehoseDeliveryStreamTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_id: {
        value: cdktf.stringToHclTerraform(this._destinationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version_id: {
        value: cdktf.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_configuration: {
        value: kinesisFirehoseDeliveryStreamElasticsearchConfigurationToHclTerraform(this._elasticsearchConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamElasticsearchConfigurationList",
      },
      extended_s3_configuration: {
        value: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToHclTerraform(this._extendedS3Configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamExtendedS3ConfigurationList",
      },
      http_endpoint_configuration: {
        value: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToHclTerraform(this._httpEndpointConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamHttpEndpointConfigurationList",
      },
      iceberg_configuration: {
        value: kinesisFirehoseDeliveryStreamIcebergConfigurationToHclTerraform(this._icebergConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamIcebergConfigurationList",
      },
      kinesis_source_configuration: {
        value: kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToHclTerraform(this._kinesisSourceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamKinesisSourceConfigurationList",
      },
      msk_source_configuration: {
        value: kinesisFirehoseDeliveryStreamMskSourceConfigurationToHclTerraform(this._mskSourceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamMskSourceConfigurationList",
      },
      opensearch_configuration: {
        value: kinesisFirehoseDeliveryStreamOpensearchConfigurationToHclTerraform(this._opensearchConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamOpensearchConfigurationList",
      },
      opensearchserverless_configuration: {
        value: kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationToHclTerraform(this._opensearchserverlessConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationList",
      },
      redshift_configuration: {
        value: kinesisFirehoseDeliveryStreamRedshiftConfigurationToHclTerraform(this._redshiftConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamRedshiftConfigurationList",
      },
      server_side_encryption: {
        value: kinesisFirehoseDeliveryStreamServerSideEncryptionToHclTerraform(this._serverSideEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamServerSideEncryptionList",
      },
      snowflake_configuration: {
        value: kinesisFirehoseDeliveryStreamSnowflakeConfigurationToHclTerraform(this._snowflakeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamSnowflakeConfigurationList",
      },
      splunk_configuration: {
        value: kinesisFirehoseDeliveryStreamSplunkConfigurationToHclTerraform(this._splunkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisFirehoseDeliveryStreamSplunkConfigurationList",
      },
      timeouts: {
        value: kinesisFirehoseDeliveryStreamTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KinesisFirehoseDeliveryStreamTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
