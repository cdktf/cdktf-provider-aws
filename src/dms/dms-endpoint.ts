// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Database Migration Service
*/
export interface DmsEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#database_name DmsEndpoint#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#engine_name DmsEndpoint#engine_name}
  */
  readonly engineName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}
  */
  readonly extraConnectionAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#password DmsEndpoint#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}
  */
  readonly secretsManagerAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}
  */
  readonly secretsManagerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role DmsEndpoint#service_access_role}
  */
  readonly serviceAccessRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags DmsEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags_all DmsEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#username DmsEndpoint#username}
  */
  readonly username?: string;
  /**
  * elasticsearch_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}
  */
  readonly elasticsearchSettings?: DmsEndpointElasticsearchSettings;
  /**
  * kafka_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}
  */
  readonly kafkaSettings?: DmsEndpointKafkaSettings;
  /**
  * kinesis_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}
  */
  readonly kinesisSettings?: DmsEndpointKinesisSettings;
  /**
  * mongodb_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}
  */
  readonly mongodbSettings?: DmsEndpointMongodbSettings;
  /**
  * s3_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#s3_settings DmsEndpoint#s3_settings}
  */
  readonly s3Settings?: DmsEndpointS3Settings;
}
export interface DmsEndpointElasticsearchSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}
  */
  readonly endpointUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}
  */
  readonly errorRetryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}
  */
  readonly fullLoadErrorPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn: string;
}

export function dmsEndpointElasticsearchSettingsToTerraform(struct?: DmsEndpointElasticsearchSettingsOutputReference | DmsEndpointElasticsearchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_uri: cdktf.stringToTerraform(struct!.endpointUri),
    error_retry_duration: cdktf.numberToTerraform(struct!.errorRetryDuration),
    full_load_error_percentage: cdktf.numberToTerraform(struct!.fullLoadErrorPercentage),
    service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
  }
}

export class DmsEndpointElasticsearchSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DmsEndpointElasticsearchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUri = this._endpointUri;
    }
    if (this._errorRetryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRetryDuration = this._errorRetryDuration;
    }
    if (this._fullLoadErrorPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullLoadErrorPercentage = this._fullLoadErrorPercentage;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointElasticsearchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointUri = undefined;
      this._errorRetryDuration = undefined;
      this._fullLoadErrorPercentage = undefined;
      this._serviceAccessRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointUri = value.endpointUri;
      this._errorRetryDuration = value.errorRetryDuration;
      this._fullLoadErrorPercentage = value.fullLoadErrorPercentage;
      this._serviceAccessRoleArn = value.serviceAccessRoleArn;
    }
  }

  // endpoint_uri - computed: false, optional: false, required: true
  private _endpointUri?: string; 
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }
  public set endpointUri(value: string) {
    this._endpointUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUriInput() {
    return this._endpointUri;
  }

  // error_retry_duration - computed: false, optional: true, required: false
  private _errorRetryDuration?: number; 
  public get errorRetryDuration() {
    return this.getNumberAttribute('error_retry_duration');
  }
  public set errorRetryDuration(value: number) {
    this._errorRetryDuration = value;
  }
  public resetErrorRetryDuration() {
    this._errorRetryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRetryDurationInput() {
    return this._errorRetryDuration;
  }

  // full_load_error_percentage - computed: false, optional: true, required: false
  private _fullLoadErrorPercentage?: number; 
  public get fullLoadErrorPercentage() {
    return this.getNumberAttribute('full_load_error_percentage');
  }
  public set fullLoadErrorPercentage(value: number) {
    this._fullLoadErrorPercentage = value;
  }
  public resetFullLoadErrorPercentage() {
    this._fullLoadErrorPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullLoadErrorPercentageInput() {
    return this._fullLoadErrorPercentage;
  }

  // service_access_role_arn - computed: false, optional: false, required: true
  private _serviceAccessRoleArn?: string; 
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
  public set serviceAccessRoleArn(value: string) {
    this._serviceAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleArnInput() {
    return this._serviceAccessRoleArn;
  }
}
export interface DmsEndpointKafkaSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#broker DmsEndpoint#broker}
  */
  readonly broker: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}
  */
  readonly includeControlDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}
  */
  readonly includeNullAndEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}
  */
  readonly includePartitionValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}
  */
  readonly includeTableAlterOperations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}
  */
  readonly includeTransactionDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}
  */
  readonly messageMaxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}
  */
  readonly noHexPrefix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}
  */
  readonly partitionIncludeSchemaTable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_password DmsEndpoint#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_username DmsEndpoint#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#security_protocol DmsEndpoint#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}
  */
  readonly sslCaCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}
  */
  readonly sslClientCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}
  */
  readonly sslClientKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}
  */
  readonly sslClientKeyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#topic DmsEndpoint#topic}
  */
  readonly topic?: string;
}

export function dmsEndpointKafkaSettingsToTerraform(struct?: DmsEndpointKafkaSettingsOutputReference | DmsEndpointKafkaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker: cdktf.stringToTerraform(struct!.broker),
    include_control_details: cdktf.booleanToTerraform(struct!.includeControlDetails),
    include_null_and_empty: cdktf.booleanToTerraform(struct!.includeNullAndEmpty),
    include_partition_value: cdktf.booleanToTerraform(struct!.includePartitionValue),
    include_table_alter_operations: cdktf.booleanToTerraform(struct!.includeTableAlterOperations),
    include_transaction_details: cdktf.booleanToTerraform(struct!.includeTransactionDetails),
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    message_max_bytes: cdktf.numberToTerraform(struct!.messageMaxBytes),
    no_hex_prefix: cdktf.booleanToTerraform(struct!.noHexPrefix),
    partition_include_schema_table: cdktf.booleanToTerraform(struct!.partitionIncludeSchemaTable),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
    ssl_ca_certificate_arn: cdktf.stringToTerraform(struct!.sslCaCertificateArn),
    ssl_client_certificate_arn: cdktf.stringToTerraform(struct!.sslClientCertificateArn),
    ssl_client_key_arn: cdktf.stringToTerraform(struct!.sslClientKeyArn),
    ssl_client_key_password: cdktf.stringToTerraform(struct!.sslClientKeyPassword),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class DmsEndpointKafkaSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DmsEndpointKafkaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broker !== undefined) {
      hasAnyValues = true;
      internalValueResult.broker = this._broker;
    }
    if (this._includeControlDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeControlDetails = this._includeControlDetails;
    }
    if (this._includeNullAndEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
    }
    if (this._includePartitionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePartitionValue = this._includePartitionValue;
    }
    if (this._includeTableAlterOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
    }
    if (this._includeTransactionDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
    }
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._messageMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageMaxBytes = this._messageMaxBytes;
    }
    if (this._noHexPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHexPrefix = this._noHexPrefix;
    }
    if (this._partitionIncludeSchemaTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUsername = this._saslUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sslCaCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificateArn = this._sslCaCertificateArn;
    }
    if (this._sslClientCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCertificateArn = this._sslClientCertificateArn;
    }
    if (this._sslClientKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientKeyArn = this._sslClientKeyArn;
    }
    if (this._sslClientKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientKeyPassword = this._sslClientKeyPassword;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointKafkaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._broker = undefined;
      this._includeControlDetails = undefined;
      this._includeNullAndEmpty = undefined;
      this._includePartitionValue = undefined;
      this._includeTableAlterOperations = undefined;
      this._includeTransactionDetails = undefined;
      this._messageFormat = undefined;
      this._messageMaxBytes = undefined;
      this._noHexPrefix = undefined;
      this._partitionIncludeSchemaTable = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
      this._sslCaCertificateArn = undefined;
      this._sslClientCertificateArn = undefined;
      this._sslClientKeyArn = undefined;
      this._sslClientKeyPassword = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._broker = value.broker;
      this._includeControlDetails = value.includeControlDetails;
      this._includeNullAndEmpty = value.includeNullAndEmpty;
      this._includePartitionValue = value.includePartitionValue;
      this._includeTableAlterOperations = value.includeTableAlterOperations;
      this._includeTransactionDetails = value.includeTransactionDetails;
      this._messageFormat = value.messageFormat;
      this._messageMaxBytes = value.messageMaxBytes;
      this._noHexPrefix = value.noHexPrefix;
      this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
      this._sslCaCertificateArn = value.sslCaCertificateArn;
      this._sslClientCertificateArn = value.sslClientCertificateArn;
      this._sslClientKeyArn = value.sslClientKeyArn;
      this._sslClientKeyPassword = value.sslClientKeyPassword;
      this._topic = value.topic;
    }
  }

  // broker - computed: false, optional: false, required: true
  private _broker?: string; 
  public get broker() {
    return this.getStringAttribute('broker');
  }
  public set broker(value: string) {
    this._broker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerInput() {
    return this._broker;
  }

  // include_control_details - computed: false, optional: true, required: false
  private _includeControlDetails?: boolean | cdktf.IResolvable; 
  public get includeControlDetails() {
    return this.getBooleanAttribute('include_control_details');
  }
  public set includeControlDetails(value: boolean | cdktf.IResolvable) {
    this._includeControlDetails = value;
  }
  public resetIncludeControlDetails() {
    this._includeControlDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeControlDetailsInput() {
    return this._includeControlDetails;
  }

  // include_null_and_empty - computed: false, optional: true, required: false
  private _includeNullAndEmpty?: boolean | cdktf.IResolvable; 
  public get includeNullAndEmpty() {
    return this.getBooleanAttribute('include_null_and_empty');
  }
  public set includeNullAndEmpty(value: boolean | cdktf.IResolvable) {
    this._includeNullAndEmpty = value;
  }
  public resetIncludeNullAndEmpty() {
    this._includeNullAndEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNullAndEmptyInput() {
    return this._includeNullAndEmpty;
  }

  // include_partition_value - computed: false, optional: true, required: false
  private _includePartitionValue?: boolean | cdktf.IResolvable; 
  public get includePartitionValue() {
    return this.getBooleanAttribute('include_partition_value');
  }
  public set includePartitionValue(value: boolean | cdktf.IResolvable) {
    this._includePartitionValue = value;
  }
  public resetIncludePartitionValue() {
    this._includePartitionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePartitionValueInput() {
    return this._includePartitionValue;
  }

  // include_table_alter_operations - computed: false, optional: true, required: false
  private _includeTableAlterOperations?: boolean | cdktf.IResolvable; 
  public get includeTableAlterOperations() {
    return this.getBooleanAttribute('include_table_alter_operations');
  }
  public set includeTableAlterOperations(value: boolean | cdktf.IResolvable) {
    this._includeTableAlterOperations = value;
  }
  public resetIncludeTableAlterOperations() {
    this._includeTableAlterOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTableAlterOperationsInput() {
    return this._includeTableAlterOperations;
  }

  // include_transaction_details - computed: false, optional: true, required: false
  private _includeTransactionDetails?: boolean | cdktf.IResolvable; 
  public get includeTransactionDetails() {
    return this.getBooleanAttribute('include_transaction_details');
  }
  public set includeTransactionDetails(value: boolean | cdktf.IResolvable) {
    this._includeTransactionDetails = value;
  }
  public resetIncludeTransactionDetails() {
    this._includeTransactionDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTransactionDetailsInput() {
    return this._includeTransactionDetails;
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // message_max_bytes - computed: false, optional: true, required: false
  private _messageMaxBytes?: number; 
  public get messageMaxBytes() {
    return this.getNumberAttribute('message_max_bytes');
  }
  public set messageMaxBytes(value: number) {
    this._messageMaxBytes = value;
  }
  public resetMessageMaxBytes() {
    this._messageMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageMaxBytesInput() {
    return this._messageMaxBytes;
  }

  // no_hex_prefix - computed: false, optional: true, required: false
  private _noHexPrefix?: boolean | cdktf.IResolvable; 
  public get noHexPrefix() {
    return this.getBooleanAttribute('no_hex_prefix');
  }
  public set noHexPrefix(value: boolean | cdktf.IResolvable) {
    this._noHexPrefix = value;
  }
  public resetNoHexPrefix() {
    this._noHexPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHexPrefixInput() {
    return this._noHexPrefix;
  }

  // partition_include_schema_table - computed: false, optional: true, required: false
  private _partitionIncludeSchemaTable?: boolean | cdktf.IResolvable; 
  public get partitionIncludeSchemaTable() {
    return this.getBooleanAttribute('partition_include_schema_table');
  }
  public set partitionIncludeSchemaTable(value: boolean | cdktf.IResolvable) {
    this._partitionIncludeSchemaTable = value;
  }
  public resetPartitionIncludeSchemaTable() {
    this._partitionIncludeSchemaTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIncludeSchemaTableInput() {
    return this._partitionIncludeSchemaTable;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }
  public set saslUsername(value: string) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_ca_certificate_arn - computed: false, optional: true, required: false
  private _sslCaCertificateArn?: string; 
  public get sslCaCertificateArn() {
    return this.getStringAttribute('ssl_ca_certificate_arn');
  }
  public set sslCaCertificateArn(value: string) {
    this._sslCaCertificateArn = value;
  }
  public resetSslCaCertificateArn() {
    this._sslCaCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateArnInput() {
    return this._sslCaCertificateArn;
  }

  // ssl_client_certificate_arn - computed: false, optional: true, required: false
  private _sslClientCertificateArn?: string; 
  public get sslClientCertificateArn() {
    return this.getStringAttribute('ssl_client_certificate_arn');
  }
  public set sslClientCertificateArn(value: string) {
    this._sslClientCertificateArn = value;
  }
  public resetSslClientCertificateArn() {
    this._sslClientCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertificateArnInput() {
    return this._sslClientCertificateArn;
  }

  // ssl_client_key_arn - computed: false, optional: true, required: false
  private _sslClientKeyArn?: string; 
  public get sslClientKeyArn() {
    return this.getStringAttribute('ssl_client_key_arn');
  }
  public set sslClientKeyArn(value: string) {
    this._sslClientKeyArn = value;
  }
  public resetSslClientKeyArn() {
    this._sslClientKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeyArnInput() {
    return this._sslClientKeyArn;
  }

  // ssl_client_key_password - computed: false, optional: true, required: false
  private _sslClientKeyPassword?: string; 
  public get sslClientKeyPassword() {
    return this.getStringAttribute('ssl_client_key_password');
  }
  public set sslClientKeyPassword(value: string) {
    this._sslClientKeyPassword = value;
  }
  public resetSslClientKeyPassword() {
    this._sslClientKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeyPasswordInput() {
    return this._sslClientKeyPassword;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DmsEndpointKinesisSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}
  */
  readonly includeControlDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}
  */
  readonly includeNullAndEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}
  */
  readonly includePartitionValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}
  */
  readonly includeTableAlterOperations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}
  */
  readonly includeTransactionDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}
  */
  readonly partitionIncludeSchemaTable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#stream_arn DmsEndpoint#stream_arn}
  */
  readonly streamArn?: string;
}

export function dmsEndpointKinesisSettingsToTerraform(struct?: DmsEndpointKinesisSettingsOutputReference | DmsEndpointKinesisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_control_details: cdktf.booleanToTerraform(struct!.includeControlDetails),
    include_null_and_empty: cdktf.booleanToTerraform(struct!.includeNullAndEmpty),
    include_partition_value: cdktf.booleanToTerraform(struct!.includePartitionValue),
    include_table_alter_operations: cdktf.booleanToTerraform(struct!.includeTableAlterOperations),
    include_transaction_details: cdktf.booleanToTerraform(struct!.includeTransactionDetails),
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    partition_include_schema_table: cdktf.booleanToTerraform(struct!.partitionIncludeSchemaTable),
    service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}

export class DmsEndpointKinesisSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DmsEndpointKinesisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeControlDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeControlDetails = this._includeControlDetails;
    }
    if (this._includeNullAndEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
    }
    if (this._includePartitionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePartitionValue = this._includePartitionValue;
    }
    if (this._includeTableAlterOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
    }
    if (this._includeTransactionDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
    }
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._partitionIncludeSchemaTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointKinesisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeControlDetails = undefined;
      this._includeNullAndEmpty = undefined;
      this._includePartitionValue = undefined;
      this._includeTableAlterOperations = undefined;
      this._includeTransactionDetails = undefined;
      this._messageFormat = undefined;
      this._partitionIncludeSchemaTable = undefined;
      this._serviceAccessRoleArn = undefined;
      this._streamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeControlDetails = value.includeControlDetails;
      this._includeNullAndEmpty = value.includeNullAndEmpty;
      this._includePartitionValue = value.includePartitionValue;
      this._includeTableAlterOperations = value.includeTableAlterOperations;
      this._includeTransactionDetails = value.includeTransactionDetails;
      this._messageFormat = value.messageFormat;
      this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
      this._serviceAccessRoleArn = value.serviceAccessRoleArn;
      this._streamArn = value.streamArn;
    }
  }

  // include_control_details - computed: false, optional: true, required: false
  private _includeControlDetails?: boolean | cdktf.IResolvable; 
  public get includeControlDetails() {
    return this.getBooleanAttribute('include_control_details');
  }
  public set includeControlDetails(value: boolean | cdktf.IResolvable) {
    this._includeControlDetails = value;
  }
  public resetIncludeControlDetails() {
    this._includeControlDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeControlDetailsInput() {
    return this._includeControlDetails;
  }

  // include_null_and_empty - computed: false, optional: true, required: false
  private _includeNullAndEmpty?: boolean | cdktf.IResolvable; 
  public get includeNullAndEmpty() {
    return this.getBooleanAttribute('include_null_and_empty');
  }
  public set includeNullAndEmpty(value: boolean | cdktf.IResolvable) {
    this._includeNullAndEmpty = value;
  }
  public resetIncludeNullAndEmpty() {
    this._includeNullAndEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNullAndEmptyInput() {
    return this._includeNullAndEmpty;
  }

  // include_partition_value - computed: false, optional: true, required: false
  private _includePartitionValue?: boolean | cdktf.IResolvable; 
  public get includePartitionValue() {
    return this.getBooleanAttribute('include_partition_value');
  }
  public set includePartitionValue(value: boolean | cdktf.IResolvable) {
    this._includePartitionValue = value;
  }
  public resetIncludePartitionValue() {
    this._includePartitionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePartitionValueInput() {
    return this._includePartitionValue;
  }

  // include_table_alter_operations - computed: false, optional: true, required: false
  private _includeTableAlterOperations?: boolean | cdktf.IResolvable; 
  public get includeTableAlterOperations() {
    return this.getBooleanAttribute('include_table_alter_operations');
  }
  public set includeTableAlterOperations(value: boolean | cdktf.IResolvable) {
    this._includeTableAlterOperations = value;
  }
  public resetIncludeTableAlterOperations() {
    this._includeTableAlterOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTableAlterOperationsInput() {
    return this._includeTableAlterOperations;
  }

  // include_transaction_details - computed: false, optional: true, required: false
  private _includeTransactionDetails?: boolean | cdktf.IResolvable; 
  public get includeTransactionDetails() {
    return this.getBooleanAttribute('include_transaction_details');
  }
  public set includeTransactionDetails(value: boolean | cdktf.IResolvable) {
    this._includeTransactionDetails = value;
  }
  public resetIncludeTransactionDetails() {
    this._includeTransactionDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTransactionDetailsInput() {
    return this._includeTransactionDetails;
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // partition_include_schema_table - computed: false, optional: true, required: false
  private _partitionIncludeSchemaTable?: boolean | cdktf.IResolvable; 
  public get partitionIncludeSchemaTable() {
    return this.getBooleanAttribute('partition_include_schema_table');
  }
  public set partitionIncludeSchemaTable(value: boolean | cdktf.IResolvable) {
    this._partitionIncludeSchemaTable = value;
  }
  public resetPartitionIncludeSchemaTable() {
    this._partitionIncludeSchemaTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIncludeSchemaTableInput() {
    return this._partitionIncludeSchemaTable;
  }

  // service_access_role_arn - computed: false, optional: true, required: false
  private _serviceAccessRoleArn?: string; 
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
  public set serviceAccessRoleArn(value: string) {
    this._serviceAccessRoleArn = value;
  }
  public resetServiceAccessRoleArn() {
    this._serviceAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleArnInput() {
    return this._serviceAccessRoleArn;
  }

  // stream_arn - computed: false, optional: true, required: false
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  public resetStreamArn() {
    this._streamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface DmsEndpointMongodbSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}
  */
  readonly authMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_source DmsEndpoint#auth_source}
  */
  readonly authSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}
  */
  readonly docsToInvestigate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}
  */
  readonly extractDocId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#nesting_level DmsEndpoint#nesting_level}
  */
  readonly nestingLevel?: string;
}

export function dmsEndpointMongodbSettingsToTerraform(struct?: DmsEndpointMongodbSettingsOutputReference | DmsEndpointMongodbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_mechanism: cdktf.stringToTerraform(struct!.authMechanism),
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    docs_to_investigate: cdktf.stringToTerraform(struct!.docsToInvestigate),
    extract_doc_id: cdktf.stringToTerraform(struct!.extractDocId),
    nesting_level: cdktf.stringToTerraform(struct!.nestingLevel),
  }
}

export class DmsEndpointMongodbSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DmsEndpointMongodbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMechanism = this._authMechanism;
    }
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._docsToInvestigate !== undefined) {
      hasAnyValues = true;
      internalValueResult.docsToInvestigate = this._docsToInvestigate;
    }
    if (this._extractDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractDocId = this._extractDocId;
    }
    if (this._nestingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestingLevel = this._nestingLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointMongodbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authMechanism = undefined;
      this._authSource = undefined;
      this._authType = undefined;
      this._docsToInvestigate = undefined;
      this._extractDocId = undefined;
      this._nestingLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authMechanism = value.authMechanism;
      this._authSource = value.authSource;
      this._authType = value.authType;
      this._docsToInvestigate = value.docsToInvestigate;
      this._extractDocId = value.extractDocId;
      this._nestingLevel = value.nestingLevel;
    }
  }

  // auth_mechanism - computed: false, optional: true, required: false
  private _authMechanism?: string; 
  public get authMechanism() {
    return this.getStringAttribute('auth_mechanism');
  }
  public set authMechanism(value: string) {
    this._authMechanism = value;
  }
  public resetAuthMechanism() {
    this._authMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMechanismInput() {
    return this._authMechanism;
  }

  // auth_source - computed: false, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // docs_to_investigate - computed: false, optional: true, required: false
  private _docsToInvestigate?: string; 
  public get docsToInvestigate() {
    return this.getStringAttribute('docs_to_investigate');
  }
  public set docsToInvestigate(value: string) {
    this._docsToInvestigate = value;
  }
  public resetDocsToInvestigate() {
    this._docsToInvestigate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docsToInvestigateInput() {
    return this._docsToInvestigate;
  }

  // extract_doc_id - computed: false, optional: true, required: false
  private _extractDocId?: string; 
  public get extractDocId() {
    return this.getStringAttribute('extract_doc_id');
  }
  public set extractDocId(value: string) {
    this._extractDocId = value;
  }
  public resetExtractDocId() {
    this._extractDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractDocIdInput() {
    return this._extractDocId;
  }

  // nesting_level - computed: false, optional: true, required: false
  private _nestingLevel?: string; 
  public get nestingLevel() {
    return this.getStringAttribute('nesting_level');
  }
  public set nestingLevel(value: string) {
    this._nestingLevel = value;
  }
  public resetNestingLevel() {
    this._nestingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestingLevelInput() {
    return this._nestingLevel;
  }
}
export interface DmsEndpointS3Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}
  */
  readonly bucketFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#compression_type DmsEndpoint#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}
  */
  readonly csvDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}
  */
  readonly csvRowDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_format DmsEndpoint#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}
  */
  readonly datePartitionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}
  */
  readonly externalTableDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}
  */
  readonly parquetTimestampInMillisecond?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_version DmsEndpoint#parquet_version}
  */
  readonly parquetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}
  */
  readonly serverSideEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn?: string;
}

export function dmsEndpointS3SettingsToTerraform(struct?: DmsEndpointS3SettingsOutputReference | DmsEndpointS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_folder: cdktf.stringToTerraform(struct!.bucketFolder),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    csv_delimiter: cdktf.stringToTerraform(struct!.csvDelimiter),
    csv_row_delimiter: cdktf.stringToTerraform(struct!.csvRowDelimiter),
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
    date_partition_enabled: cdktf.booleanToTerraform(struct!.datePartitionEnabled),
    encryption_mode: cdktf.stringToTerraform(struct!.encryptionMode),
    external_table_definition: cdktf.stringToTerraform(struct!.externalTableDefinition),
    parquet_timestamp_in_millisecond: cdktf.booleanToTerraform(struct!.parquetTimestampInMillisecond),
    parquet_version: cdktf.stringToTerraform(struct!.parquetVersion),
    server_side_encryption_kms_key_id: cdktf.stringToTerraform(struct!.serverSideEncryptionKmsKeyId),
    service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
  }
}

export class DmsEndpointS3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DmsEndpointS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketFolder = this._bucketFolder;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._csvDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvDelimiter = this._csvDelimiter;
    }
    if (this._csvRowDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvRowDelimiter = this._csvRowDelimiter;
    }
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    if (this._datePartitionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.datePartitionEnabled = this._datePartitionEnabled;
    }
    if (this._encryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMode = this._encryptionMode;
    }
    if (this._externalTableDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTableDefinition = this._externalTableDefinition;
    }
    if (this._parquetTimestampInMillisecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetTimestampInMillisecond = this._parquetTimestampInMillisecond;
    }
    if (this._parquetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetVersion = this._parquetVersion;
    }
    if (this._serverSideEncryptionKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryptionKmsKeyId = this._serverSideEncryptionKmsKeyId;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketFolder = undefined;
      this._bucketName = undefined;
      this._compressionType = undefined;
      this._csvDelimiter = undefined;
      this._csvRowDelimiter = undefined;
      this._dataFormat = undefined;
      this._datePartitionEnabled = undefined;
      this._encryptionMode = undefined;
      this._externalTableDefinition = undefined;
      this._parquetTimestampInMillisecond = undefined;
      this._parquetVersion = undefined;
      this._serverSideEncryptionKmsKeyId = undefined;
      this._serviceAccessRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketFolder = value.bucketFolder;
      this._bucketName = value.bucketName;
      this._compressionType = value.compressionType;
      this._csvDelimiter = value.csvDelimiter;
      this._csvRowDelimiter = value.csvRowDelimiter;
      this._dataFormat = value.dataFormat;
      this._datePartitionEnabled = value.datePartitionEnabled;
      this._encryptionMode = value.encryptionMode;
      this._externalTableDefinition = value.externalTableDefinition;
      this._parquetTimestampInMillisecond = value.parquetTimestampInMillisecond;
      this._parquetVersion = value.parquetVersion;
      this._serverSideEncryptionKmsKeyId = value.serverSideEncryptionKmsKeyId;
      this._serviceAccessRoleArn = value.serviceAccessRoleArn;
    }
  }

  // bucket_folder - computed: false, optional: true, required: false
  private _bucketFolder?: string; 
  public get bucketFolder() {
    return this.getStringAttribute('bucket_folder');
  }
  public set bucketFolder(value: string) {
    this._bucketFolder = value;
  }
  public resetBucketFolder() {
    this._bucketFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketFolderInput() {
    return this._bucketFolder;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // csv_delimiter - computed: false, optional: true, required: false
  private _csvDelimiter?: string; 
  public get csvDelimiter() {
    return this.getStringAttribute('csv_delimiter');
  }
  public set csvDelimiter(value: string) {
    this._csvDelimiter = value;
  }
  public resetCsvDelimiter() {
    this._csvDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvDelimiterInput() {
    return this._csvDelimiter;
  }

  // csv_row_delimiter - computed: false, optional: true, required: false
  private _csvRowDelimiter?: string; 
  public get csvRowDelimiter() {
    return this.getStringAttribute('csv_row_delimiter');
  }
  public set csvRowDelimiter(value: string) {
    this._csvRowDelimiter = value;
  }
  public resetCsvRowDelimiter() {
    this._csvRowDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvRowDelimiterInput() {
    return this._csvRowDelimiter;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }

  // date_partition_enabled - computed: false, optional: true, required: false
  private _datePartitionEnabled?: boolean | cdktf.IResolvable; 
  public get datePartitionEnabled() {
    return this.getBooleanAttribute('date_partition_enabled');
  }
  public set datePartitionEnabled(value: boolean | cdktf.IResolvable) {
    this._datePartitionEnabled = value;
  }
  public resetDatePartitionEnabled() {
    this._datePartitionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datePartitionEnabledInput() {
    return this._datePartitionEnabled;
  }

  // encryption_mode - computed: false, optional: true, required: false
  private _encryptionMode?: string; 
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode;
  }

  // external_table_definition - computed: false, optional: true, required: false
  private _externalTableDefinition?: string; 
  public get externalTableDefinition() {
    return this.getStringAttribute('external_table_definition');
  }
  public set externalTableDefinition(value: string) {
    this._externalTableDefinition = value;
  }
  public resetExternalTableDefinition() {
    this._externalTableDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTableDefinitionInput() {
    return this._externalTableDefinition;
  }

  // parquet_timestamp_in_millisecond - computed: false, optional: true, required: false
  private _parquetTimestampInMillisecond?: boolean | cdktf.IResolvable; 
  public get parquetTimestampInMillisecond() {
    return this.getBooleanAttribute('parquet_timestamp_in_millisecond');
  }
  public set parquetTimestampInMillisecond(value: boolean | cdktf.IResolvable) {
    this._parquetTimestampInMillisecond = value;
  }
  public resetParquetTimestampInMillisecond() {
    this._parquetTimestampInMillisecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetTimestampInMillisecondInput() {
    return this._parquetTimestampInMillisecond;
  }

  // parquet_version - computed: false, optional: true, required: false
  private _parquetVersion?: string; 
  public get parquetVersion() {
    return this.getStringAttribute('parquet_version');
  }
  public set parquetVersion(value: string) {
    this._parquetVersion = value;
  }
  public resetParquetVersion() {
    this._parquetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetVersionInput() {
    return this._parquetVersion;
  }

  // server_side_encryption_kms_key_id - computed: false, optional: true, required: false
  private _serverSideEncryptionKmsKeyId?: string; 
  public get serverSideEncryptionKmsKeyId() {
    return this.getStringAttribute('server_side_encryption_kms_key_id');
  }
  public set serverSideEncryptionKmsKeyId(value: string) {
    this._serverSideEncryptionKmsKeyId = value;
  }
  public resetServerSideEncryptionKmsKeyId() {
    this._serverSideEncryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionKmsKeyIdInput() {
    return this._serverSideEncryptionKmsKeyId;
  }

  // service_access_role_arn - computed: false, optional: true, required: false
  private _serviceAccessRoleArn?: string; 
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
  public set serviceAccessRoleArn(value: string) {
    this._serviceAccessRoleArn = value;
  }
  public resetServiceAccessRoleArn() {
    this._serviceAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleArnInput() {
    return this._serviceAccessRoleArn;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint aws_dms_endpoint}
*/
export class DmsEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dms_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint aws_dms_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DmsEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._databaseName = config.databaseName;
    this._endpointId = config.endpointId;
    this._endpointType = config.endpointType;
    this._engineName = config.engineName;
    this._extraConnectionAttributes = config.extraConnectionAttributes;
    this._kmsKeyArn = config.kmsKeyArn;
    this._password = config.password;
    this._port = config.port;
    this._secretsManagerAccessRoleArn = config.secretsManagerAccessRoleArn;
    this._secretsManagerArn = config.secretsManagerArn;
    this._serverName = config.serverName;
    this._serviceAccessRole = config.serviceAccessRole;
    this._sslMode = config.sslMode;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._username = config.username;
    this._elasticsearchSettings.internalValue = config.elasticsearchSettings;
    this._kafkaSettings.internalValue = config.kafkaSettings;
    this._kinesisSettings.internalValue = config.kinesisSettings;
    this._mongodbSettings.internalValue = config.mongodbSettings;
    this._s3Settings.internalValue = config.s3Settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: true, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // endpoint_arn - computed: true, optional: false, required: false
  public get endpointArn() {
    return this.getStringAttribute('endpoint_arn');
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // engine_name - computed: false, optional: false, required: true
  private _engineName?: string; 
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName;
  }

  // extra_connection_attributes - computed: true, optional: true, required: false
  private _extraConnectionAttributes?: string; 
  public get extraConnectionAttributes() {
    return this.getStringAttribute('extra_connection_attributes');
  }
  public set extraConnectionAttributes(value: string) {
    this._extraConnectionAttributes = value;
  }
  public resetExtraConnectionAttributes() {
    this._extraConnectionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConnectionAttributesInput() {
    return this._extraConnectionAttributes;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: true, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secrets_manager_access_role_arn - computed: false, optional: true, required: false
  private _secretsManagerAccessRoleArn?: string; 
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }
  public set secretsManagerAccessRoleArn(value: string) {
    this._secretsManagerAccessRoleArn = value;
  }
  public resetSecretsManagerAccessRoleArn() {
    this._secretsManagerAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerAccessRoleArnInput() {
    return this._secretsManagerAccessRoleArn;
  }

  // secrets_manager_arn - computed: false, optional: true, required: false
  private _secretsManagerArn?: string; 
  public get secretsManagerArn() {
    return this.getStringAttribute('secrets_manager_arn');
  }
  public set secretsManagerArn(value: string) {
    this._secretsManagerArn = value;
  }
  public resetSecretsManagerArn() {
    this._secretsManagerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerArnInput() {
    return this._secretsManagerArn;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // service_access_role - computed: false, optional: true, required: false
  private _serviceAccessRole?: string; 
  public get serviceAccessRole() {
    return this.getStringAttribute('service_access_role');
  }
  public set serviceAccessRole(value: string) {
    this._serviceAccessRole = value;
  }
  public resetServiceAccessRole() {
    this._serviceAccessRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleInput() {
    return this._serviceAccessRole;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
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

  // elasticsearch_settings - computed: false, optional: true, required: false
  private _elasticsearchSettings = new DmsEndpointElasticsearchSettingsOutputReference(this, "elasticsearch_settings", true);
  public get elasticsearchSettings() {
    return this._elasticsearchSettings;
  }
  public putElasticsearchSettings(value: DmsEndpointElasticsearchSettings) {
    this._elasticsearchSettings.internalValue = value;
  }
  public resetElasticsearchSettings() {
    this._elasticsearchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchSettingsInput() {
    return this._elasticsearchSettings.internalValue;
  }

  // kafka_settings - computed: false, optional: true, required: false
  private _kafkaSettings = new DmsEndpointKafkaSettingsOutputReference(this, "kafka_settings", true);
  public get kafkaSettings() {
    return this._kafkaSettings;
  }
  public putKafkaSettings(value: DmsEndpointKafkaSettings) {
    this._kafkaSettings.internalValue = value;
  }
  public resetKafkaSettings() {
    this._kafkaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSettingsInput() {
    return this._kafkaSettings.internalValue;
  }

  // kinesis_settings - computed: false, optional: true, required: false
  private _kinesisSettings = new DmsEndpointKinesisSettingsOutputReference(this, "kinesis_settings", true);
  public get kinesisSettings() {
    return this._kinesisSettings;
  }
  public putKinesisSettings(value: DmsEndpointKinesisSettings) {
    this._kinesisSettings.internalValue = value;
  }
  public resetKinesisSettings() {
    this._kinesisSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisSettingsInput() {
    return this._kinesisSettings.internalValue;
  }

  // mongodb_settings - computed: false, optional: true, required: false
  private _mongodbSettings = new DmsEndpointMongodbSettingsOutputReference(this, "mongodb_settings", true);
  public get mongodbSettings() {
    return this._mongodbSettings;
  }
  public putMongodbSettings(value: DmsEndpointMongodbSettings) {
    this._mongodbSettings.internalValue = value;
  }
  public resetMongodbSettings() {
    this._mongodbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbSettingsInput() {
    return this._mongodbSettings.internalValue;
  }

  // s3_settings - computed: false, optional: true, required: false
  private _s3Settings = new DmsEndpointS3SettingsOutputReference(this, "s3_settings", true);
  public get s3Settings() {
    return this._s3Settings;
  }
  public putS3Settings(value: DmsEndpointS3Settings) {
    this._s3Settings.internalValue = value;
  }
  public resetS3Settings() {
    this._s3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SettingsInput() {
    return this._s3Settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      database_name: cdktf.stringToTerraform(this._databaseName),
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      engine_name: cdktf.stringToTerraform(this._engineName),
      extra_connection_attributes: cdktf.stringToTerraform(this._extraConnectionAttributes),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      secrets_manager_access_role_arn: cdktf.stringToTerraform(this._secretsManagerAccessRoleArn),
      secrets_manager_arn: cdktf.stringToTerraform(this._secretsManagerArn),
      server_name: cdktf.stringToTerraform(this._serverName),
      service_access_role: cdktf.stringToTerraform(this._serviceAccessRole),
      ssl_mode: cdktf.stringToTerraform(this._sslMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      username: cdktf.stringToTerraform(this._username),
      elasticsearch_settings: dmsEndpointElasticsearchSettingsToTerraform(this._elasticsearchSettings.internalValue),
      kafka_settings: dmsEndpointKafkaSettingsToTerraform(this._kafkaSettings.internalValue),
      kinesis_settings: dmsEndpointKinesisSettingsToTerraform(this._kinesisSettings.internalValue),
      mongodb_settings: dmsEndpointMongodbSettingsToTerraform(this._mongodbSettings.internalValue),
      s3_settings: dmsEndpointS3SettingsToTerraform(this._s3Settings.internalValue),
    };
  }
}
