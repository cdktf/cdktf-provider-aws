// https://www.terraform.io/docs/providers/aws/r/dms_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#id DmsEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
  * redis_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redis_settings DmsEndpoint#redis_settings}
  */
  readonly redisSettings?: DmsEndpointRedisSettings;
  /**
  * redshift_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}
  */
  readonly redshiftSettings?: DmsEndpointRedshiftSettings;
  /**
  * s3_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#s3_settings DmsEndpoint#s3_settings}
  */
  readonly s3Settings?: DmsEndpointS3Settings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timeouts DmsEndpoint#timeouts}
  */
  readonly timeouts?: DmsEndpointTimeouts;
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
export interface DmsEndpointRedisSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_password DmsEndpoint#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}
  */
  readonly authUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}
  */
  readonly sslCaCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}
  */
  readonly sslSecurityProtocol?: string;
}

export function dmsEndpointRedisSettingsToTerraform(struct?: DmsEndpointRedisSettingsOutputReference | DmsEndpointRedisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    auth_user_name: cdktf.stringToTerraform(struct!.authUserName),
    port: cdktf.numberToTerraform(struct!.port),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl_ca_certificate_arn: cdktf.stringToTerraform(struct!.sslCaCertificateArn),
    ssl_security_protocol: cdktf.stringToTerraform(struct!.sslSecurityProtocol),
  }
}

export class DmsEndpointRedisSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointRedisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._authUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUserName = this._authUserName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslCaCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificateArn = this._sslCaCertificateArn;
    }
    if (this._sslSecurityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSecurityProtocol = this._sslSecurityProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointRedisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authPassword = undefined;
      this._authType = undefined;
      this._authUserName = undefined;
      this._port = undefined;
      this._serverName = undefined;
      this._sslCaCertificateArn = undefined;
      this._sslSecurityProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authPassword = value.authPassword;
      this._authType = value.authType;
      this._authUserName = value.authUserName;
      this._port = value.port;
      this._serverName = value.serverName;
      this._sslCaCertificateArn = value.sslCaCertificateArn;
      this._sslSecurityProtocol = value.sslSecurityProtocol;
    }
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // auth_user_name - computed: false, optional: true, required: false
  private _authUserName?: string; 
  public get authUserName() {
    return this.getStringAttribute('auth_user_name');
  }
  public set authUserName(value: string) {
    this._authUserName = value;
  }
  public resetAuthUserName() {
    this._authUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserNameInput() {
    return this._authUserName;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
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

  // ssl_security_protocol - computed: false, optional: true, required: false
  private _sslSecurityProtocol?: string; 
  public get sslSecurityProtocol() {
    return this.getStringAttribute('ssl_security_protocol');
  }
  public set sslSecurityProtocol(value: string) {
    this._sslSecurityProtocol = value;
  }
  public resetSslSecurityProtocol() {
    this._sslSecurityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecurityProtocolInput() {
    return this._sslSecurityProtocol;
  }
}
export interface DmsEndpointRedshiftSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}
  */
  readonly bucketFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}
  */
  readonly serverSideEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn?: string;
}

export function dmsEndpointRedshiftSettingsToTerraform(struct?: DmsEndpointRedshiftSettingsOutputReference | DmsEndpointRedshiftSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_folder: cdktf.stringToTerraform(struct!.bucketFolder),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    encryption_mode: cdktf.stringToTerraform(struct!.encryptionMode),
    server_side_encryption_kms_key_id: cdktf.stringToTerraform(struct!.serverSideEncryptionKmsKeyId),
    service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
  }
}

export class DmsEndpointRedshiftSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointRedshiftSettings | undefined {
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
    if (this._encryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMode = this._encryptionMode;
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

  public set internalValue(value: DmsEndpointRedshiftSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketFolder = undefined;
      this._bucketName = undefined;
      this._encryptionMode = undefined;
      this._serverSideEncryptionKmsKeyId = undefined;
      this._serviceAccessRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketFolder = value.bucketFolder;
      this._bucketName = value.bucketName;
      this._encryptionMode = value.encryptionMode;
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
export interface DmsEndpointS3Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#add_column_name DmsEndpoint#add_column_name}
  */
  readonly addColumnName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}
  */
  readonly bucketFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}
  */
  readonly cannedAclForObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}
  */
  readonly cdcInsertsAndUpdates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}
  */
  readonly cdcInsertsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}
  */
  readonly cdcMaxBatchInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}
  */
  readonly cdcMinFileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_path DmsEndpoint#cdc_path}
  */
  readonly cdcPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#compression_type DmsEndpoint#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}
  */
  readonly csvDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}
  */
  readonly csvNoSupValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}
  */
  readonly csvNullValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}
  */
  readonly csvRowDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_format DmsEndpoint#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_page_size DmsEndpoint#data_page_size}
  */
  readonly dataPageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}
  */
  readonly datePartitionDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}
  */
  readonly datePartitionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}
  */
  readonly datePartitionSequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}
  */
  readonly dictPageSizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}
  */
  readonly enableStatistics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encoding_type DmsEndpoint#encoding_type}
  */
  readonly encodingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}
  */
  readonly externalTableDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}
  */
  readonly ignoreHeaderRows?: number;
  /**
  * This setting has no effect, is deprecated, and will be removed in a future version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_headers_row DmsEndpoint#ignore_headers_row}
  */
  readonly ignoreHeadersRow?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}
  */
  readonly includeOpForFullLoad?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#max_file_size DmsEndpoint#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}
  */
  readonly parquetTimestampInMillisecond?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_version DmsEndpoint#parquet_version}
  */
  readonly parquetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}
  */
  readonly preserveTransactions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}
  */
  readonly rfc4180?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#row_group_length DmsEndpoint#row_group_length}
  */
  readonly rowGroupLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}
  */
  readonly serverSideEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}
  */
  readonly timestampColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}
  */
  readonly useCsvNoSupValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}
  */
  readonly useTaskStartTimeForFullLoadTimestamp?: boolean | cdktf.IResolvable;
}

export function dmsEndpointS3SettingsToTerraform(struct?: DmsEndpointS3SettingsOutputReference | DmsEndpointS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_column_name: cdktf.booleanToTerraform(struct!.addColumnName),
    bucket_folder: cdktf.stringToTerraform(struct!.bucketFolder),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    canned_acl_for_objects: cdktf.stringToTerraform(struct!.cannedAclForObjects),
    cdc_inserts_and_updates: cdktf.booleanToTerraform(struct!.cdcInsertsAndUpdates),
    cdc_inserts_only: cdktf.booleanToTerraform(struct!.cdcInsertsOnly),
    cdc_max_batch_interval: cdktf.numberToTerraform(struct!.cdcMaxBatchInterval),
    cdc_min_file_size: cdktf.numberToTerraform(struct!.cdcMinFileSize),
    cdc_path: cdktf.stringToTerraform(struct!.cdcPath),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    csv_delimiter: cdktf.stringToTerraform(struct!.csvDelimiter),
    csv_no_sup_value: cdktf.stringToTerraform(struct!.csvNoSupValue),
    csv_null_value: cdktf.stringToTerraform(struct!.csvNullValue),
    csv_row_delimiter: cdktf.stringToTerraform(struct!.csvRowDelimiter),
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
    data_page_size: cdktf.numberToTerraform(struct!.dataPageSize),
    date_partition_delimiter: cdktf.stringToTerraform(struct!.datePartitionDelimiter),
    date_partition_enabled: cdktf.booleanToTerraform(struct!.datePartitionEnabled),
    date_partition_sequence: cdktf.stringToTerraform(struct!.datePartitionSequence),
    dict_page_size_limit: cdktf.numberToTerraform(struct!.dictPageSizeLimit),
    enable_statistics: cdktf.booleanToTerraform(struct!.enableStatistics),
    encoding_type: cdktf.stringToTerraform(struct!.encodingType),
    encryption_mode: cdktf.stringToTerraform(struct!.encryptionMode),
    external_table_definition: cdktf.stringToTerraform(struct!.externalTableDefinition),
    ignore_header_rows: cdktf.numberToTerraform(struct!.ignoreHeaderRows),
    ignore_headers_row: cdktf.numberToTerraform(struct!.ignoreHeadersRow),
    include_op_for_full_load: cdktf.booleanToTerraform(struct!.includeOpForFullLoad),
    max_file_size: cdktf.numberToTerraform(struct!.maxFileSize),
    parquet_timestamp_in_millisecond: cdktf.booleanToTerraform(struct!.parquetTimestampInMillisecond),
    parquet_version: cdktf.stringToTerraform(struct!.parquetVersion),
    preserve_transactions: cdktf.booleanToTerraform(struct!.preserveTransactions),
    rfc_4180: cdktf.booleanToTerraform(struct!.rfc4180),
    row_group_length: cdktf.numberToTerraform(struct!.rowGroupLength),
    server_side_encryption_kms_key_id: cdktf.stringToTerraform(struct!.serverSideEncryptionKmsKeyId),
    service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
    timestamp_column_name: cdktf.stringToTerraform(struct!.timestampColumnName),
    use_csv_no_sup_value: cdktf.booleanToTerraform(struct!.useCsvNoSupValue),
    use_task_start_time_for_full_load_timestamp: cdktf.booleanToTerraform(struct!.useTaskStartTimeForFullLoadTimestamp),
  }
}

export class DmsEndpointS3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.addColumnName = this._addColumnName;
    }
    if (this._bucketFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketFolder = this._bucketFolder;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._cannedAclForObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAclForObjects = this._cannedAclForObjects;
    }
    if (this._cdcInsertsAndUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcInsertsAndUpdates = this._cdcInsertsAndUpdates;
    }
    if (this._cdcInsertsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcInsertsOnly = this._cdcInsertsOnly;
    }
    if (this._cdcMaxBatchInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcMaxBatchInterval = this._cdcMaxBatchInterval;
    }
    if (this._cdcMinFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcMinFileSize = this._cdcMinFileSize;
    }
    if (this._cdcPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcPath = this._cdcPath;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._csvDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvDelimiter = this._csvDelimiter;
    }
    if (this._csvNoSupValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvNoSupValue = this._csvNoSupValue;
    }
    if (this._csvNullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvNullValue = this._csvNullValue;
    }
    if (this._csvRowDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvRowDelimiter = this._csvRowDelimiter;
    }
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    if (this._dataPageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPageSize = this._dataPageSize;
    }
    if (this._datePartitionDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datePartitionDelimiter = this._datePartitionDelimiter;
    }
    if (this._datePartitionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.datePartitionEnabled = this._datePartitionEnabled;
    }
    if (this._datePartitionSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.datePartitionSequence = this._datePartitionSequence;
    }
    if (this._dictPageSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictPageSizeLimit = this._dictPageSizeLimit;
    }
    if (this._enableStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStatistics = this._enableStatistics;
    }
    if (this._encodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingType = this._encodingType;
    }
    if (this._encryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMode = this._encryptionMode;
    }
    if (this._externalTableDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTableDefinition = this._externalTableDefinition;
    }
    if (this._ignoreHeaderRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHeaderRows = this._ignoreHeaderRows;
    }
    if (this._ignoreHeadersRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHeadersRow = this._ignoreHeadersRow;
    }
    if (this._includeOpForFullLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOpForFullLoad = this._includeOpForFullLoad;
    }
    if (this._maxFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize;
    }
    if (this._parquetTimestampInMillisecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetTimestampInMillisecond = this._parquetTimestampInMillisecond;
    }
    if (this._parquetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetVersion = this._parquetVersion;
    }
    if (this._preserveTransactions !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveTransactions = this._preserveTransactions;
    }
    if (this._rfc4180 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc4180 = this._rfc4180;
    }
    if (this._rowGroupLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowGroupLength = this._rowGroupLength;
    }
    if (this._serverSideEncryptionKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryptionKmsKeyId = this._serverSideEncryptionKmsKeyId;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    if (this._timestampColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampColumnName = this._timestampColumnName;
    }
    if (this._useCsvNoSupValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCsvNoSupValue = this._useCsvNoSupValue;
    }
    if (this._useTaskStartTimeForFullLoadTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTaskStartTimeForFullLoadTimestamp = this._useTaskStartTimeForFullLoadTimestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addColumnName = undefined;
      this._bucketFolder = undefined;
      this._bucketName = undefined;
      this._cannedAclForObjects = undefined;
      this._cdcInsertsAndUpdates = undefined;
      this._cdcInsertsOnly = undefined;
      this._cdcMaxBatchInterval = undefined;
      this._cdcMinFileSize = undefined;
      this._cdcPath = undefined;
      this._compressionType = undefined;
      this._csvDelimiter = undefined;
      this._csvNoSupValue = undefined;
      this._csvNullValue = undefined;
      this._csvRowDelimiter = undefined;
      this._dataFormat = undefined;
      this._dataPageSize = undefined;
      this._datePartitionDelimiter = undefined;
      this._datePartitionEnabled = undefined;
      this._datePartitionSequence = undefined;
      this._dictPageSizeLimit = undefined;
      this._enableStatistics = undefined;
      this._encodingType = undefined;
      this._encryptionMode = undefined;
      this._externalTableDefinition = undefined;
      this._ignoreHeaderRows = undefined;
      this._ignoreHeadersRow = undefined;
      this._includeOpForFullLoad = undefined;
      this._maxFileSize = undefined;
      this._parquetTimestampInMillisecond = undefined;
      this._parquetVersion = undefined;
      this._preserveTransactions = undefined;
      this._rfc4180 = undefined;
      this._rowGroupLength = undefined;
      this._serverSideEncryptionKmsKeyId = undefined;
      this._serviceAccessRoleArn = undefined;
      this._timestampColumnName = undefined;
      this._useCsvNoSupValue = undefined;
      this._useTaskStartTimeForFullLoadTimestamp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addColumnName = value.addColumnName;
      this._bucketFolder = value.bucketFolder;
      this._bucketName = value.bucketName;
      this._cannedAclForObjects = value.cannedAclForObjects;
      this._cdcInsertsAndUpdates = value.cdcInsertsAndUpdates;
      this._cdcInsertsOnly = value.cdcInsertsOnly;
      this._cdcMaxBatchInterval = value.cdcMaxBatchInterval;
      this._cdcMinFileSize = value.cdcMinFileSize;
      this._cdcPath = value.cdcPath;
      this._compressionType = value.compressionType;
      this._csvDelimiter = value.csvDelimiter;
      this._csvNoSupValue = value.csvNoSupValue;
      this._csvNullValue = value.csvNullValue;
      this._csvRowDelimiter = value.csvRowDelimiter;
      this._dataFormat = value.dataFormat;
      this._dataPageSize = value.dataPageSize;
      this._datePartitionDelimiter = value.datePartitionDelimiter;
      this._datePartitionEnabled = value.datePartitionEnabled;
      this._datePartitionSequence = value.datePartitionSequence;
      this._dictPageSizeLimit = value.dictPageSizeLimit;
      this._enableStatistics = value.enableStatistics;
      this._encodingType = value.encodingType;
      this._encryptionMode = value.encryptionMode;
      this._externalTableDefinition = value.externalTableDefinition;
      this._ignoreHeaderRows = value.ignoreHeaderRows;
      this._ignoreHeadersRow = value.ignoreHeadersRow;
      this._includeOpForFullLoad = value.includeOpForFullLoad;
      this._maxFileSize = value.maxFileSize;
      this._parquetTimestampInMillisecond = value.parquetTimestampInMillisecond;
      this._parquetVersion = value.parquetVersion;
      this._preserveTransactions = value.preserveTransactions;
      this._rfc4180 = value.rfc4180;
      this._rowGroupLength = value.rowGroupLength;
      this._serverSideEncryptionKmsKeyId = value.serverSideEncryptionKmsKeyId;
      this._serviceAccessRoleArn = value.serviceAccessRoleArn;
      this._timestampColumnName = value.timestampColumnName;
      this._useCsvNoSupValue = value.useCsvNoSupValue;
      this._useTaskStartTimeForFullLoadTimestamp = value.useTaskStartTimeForFullLoadTimestamp;
    }
  }

  // add_column_name - computed: false, optional: true, required: false
  private _addColumnName?: boolean | cdktf.IResolvable; 
  public get addColumnName() {
    return this.getBooleanAttribute('add_column_name');
  }
  public set addColumnName(value: boolean | cdktf.IResolvable) {
    this._addColumnName = value;
  }
  public resetAddColumnName() {
    this._addColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addColumnNameInput() {
    return this._addColumnName;
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

  // canned_acl_for_objects - computed: false, optional: true, required: false
  private _cannedAclForObjects?: string; 
  public get cannedAclForObjects() {
    return this.getStringAttribute('canned_acl_for_objects');
  }
  public set cannedAclForObjects(value: string) {
    this._cannedAclForObjects = value;
  }
  public resetCannedAclForObjects() {
    this._cannedAclForObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclForObjectsInput() {
    return this._cannedAclForObjects;
  }

  // cdc_inserts_and_updates - computed: false, optional: true, required: false
  private _cdcInsertsAndUpdates?: boolean | cdktf.IResolvable; 
  public get cdcInsertsAndUpdates() {
    return this.getBooleanAttribute('cdc_inserts_and_updates');
  }
  public set cdcInsertsAndUpdates(value: boolean | cdktf.IResolvable) {
    this._cdcInsertsAndUpdates = value;
  }
  public resetCdcInsertsAndUpdates() {
    this._cdcInsertsAndUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcInsertsAndUpdatesInput() {
    return this._cdcInsertsAndUpdates;
  }

  // cdc_inserts_only - computed: false, optional: true, required: false
  private _cdcInsertsOnly?: boolean | cdktf.IResolvable; 
  public get cdcInsertsOnly() {
    return this.getBooleanAttribute('cdc_inserts_only');
  }
  public set cdcInsertsOnly(value: boolean | cdktf.IResolvable) {
    this._cdcInsertsOnly = value;
  }
  public resetCdcInsertsOnly() {
    this._cdcInsertsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcInsertsOnlyInput() {
    return this._cdcInsertsOnly;
  }

  // cdc_max_batch_interval - computed: false, optional: true, required: false
  private _cdcMaxBatchInterval?: number; 
  public get cdcMaxBatchInterval() {
    return this.getNumberAttribute('cdc_max_batch_interval');
  }
  public set cdcMaxBatchInterval(value: number) {
    this._cdcMaxBatchInterval = value;
  }
  public resetCdcMaxBatchInterval() {
    this._cdcMaxBatchInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcMaxBatchIntervalInput() {
    return this._cdcMaxBatchInterval;
  }

  // cdc_min_file_size - computed: false, optional: true, required: false
  private _cdcMinFileSize?: number; 
  public get cdcMinFileSize() {
    return this.getNumberAttribute('cdc_min_file_size');
  }
  public set cdcMinFileSize(value: number) {
    this._cdcMinFileSize = value;
  }
  public resetCdcMinFileSize() {
    this._cdcMinFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcMinFileSizeInput() {
    return this._cdcMinFileSize;
  }

  // cdc_path - computed: false, optional: true, required: false
  private _cdcPath?: string; 
  public get cdcPath() {
    return this.getStringAttribute('cdc_path');
  }
  public set cdcPath(value: string) {
    this._cdcPath = value;
  }
  public resetCdcPath() {
    this._cdcPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcPathInput() {
    return this._cdcPath;
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

  // csv_no_sup_value - computed: false, optional: true, required: false
  private _csvNoSupValue?: string; 
  public get csvNoSupValue() {
    return this.getStringAttribute('csv_no_sup_value');
  }
  public set csvNoSupValue(value: string) {
    this._csvNoSupValue = value;
  }
  public resetCsvNoSupValue() {
    this._csvNoSupValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvNoSupValueInput() {
    return this._csvNoSupValue;
  }

  // csv_null_value - computed: false, optional: true, required: false
  private _csvNullValue?: string; 
  public get csvNullValue() {
    return this.getStringAttribute('csv_null_value');
  }
  public set csvNullValue(value: string) {
    this._csvNullValue = value;
  }
  public resetCsvNullValue() {
    this._csvNullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvNullValueInput() {
    return this._csvNullValue;
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

  // data_page_size - computed: false, optional: true, required: false
  private _dataPageSize?: number; 
  public get dataPageSize() {
    return this.getNumberAttribute('data_page_size');
  }
  public set dataPageSize(value: number) {
    this._dataPageSize = value;
  }
  public resetDataPageSize() {
    this._dataPageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPageSizeInput() {
    return this._dataPageSize;
  }

  // date_partition_delimiter - computed: false, optional: true, required: false
  private _datePartitionDelimiter?: string; 
  public get datePartitionDelimiter() {
    return this.getStringAttribute('date_partition_delimiter');
  }
  public set datePartitionDelimiter(value: string) {
    this._datePartitionDelimiter = value;
  }
  public resetDatePartitionDelimiter() {
    this._datePartitionDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datePartitionDelimiterInput() {
    return this._datePartitionDelimiter;
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

  // date_partition_sequence - computed: false, optional: true, required: false
  private _datePartitionSequence?: string; 
  public get datePartitionSequence() {
    return this.getStringAttribute('date_partition_sequence');
  }
  public set datePartitionSequence(value: string) {
    this._datePartitionSequence = value;
  }
  public resetDatePartitionSequence() {
    this._datePartitionSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datePartitionSequenceInput() {
    return this._datePartitionSequence;
  }

  // dict_page_size_limit - computed: false, optional: true, required: false
  private _dictPageSizeLimit?: number; 
  public get dictPageSizeLimit() {
    return this.getNumberAttribute('dict_page_size_limit');
  }
  public set dictPageSizeLimit(value: number) {
    this._dictPageSizeLimit = value;
  }
  public resetDictPageSizeLimit() {
    this._dictPageSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictPageSizeLimitInput() {
    return this._dictPageSizeLimit;
  }

  // enable_statistics - computed: false, optional: true, required: false
  private _enableStatistics?: boolean | cdktf.IResolvable; 
  public get enableStatistics() {
    return this.getBooleanAttribute('enable_statistics');
  }
  public set enableStatistics(value: boolean | cdktf.IResolvable) {
    this._enableStatistics = value;
  }
  public resetEnableStatistics() {
    this._enableStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStatisticsInput() {
    return this._enableStatistics;
  }

  // encoding_type - computed: false, optional: true, required: false
  private _encodingType?: string; 
  public get encodingType() {
    return this.getStringAttribute('encoding_type');
  }
  public set encodingType(value: string) {
    this._encodingType = value;
  }
  public resetEncodingType() {
    this._encodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingTypeInput() {
    return this._encodingType;
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

  // ignore_header_rows - computed: false, optional: true, required: false
  private _ignoreHeaderRows?: number; 
  public get ignoreHeaderRows() {
    return this.getNumberAttribute('ignore_header_rows');
  }
  public set ignoreHeaderRows(value: number) {
    this._ignoreHeaderRows = value;
  }
  public resetIgnoreHeaderRows() {
    this._ignoreHeaderRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHeaderRowsInput() {
    return this._ignoreHeaderRows;
  }

  // ignore_headers_row - computed: false, optional: true, required: false
  private _ignoreHeadersRow?: number; 
  public get ignoreHeadersRow() {
    return this.getNumberAttribute('ignore_headers_row');
  }
  public set ignoreHeadersRow(value: number) {
    this._ignoreHeadersRow = value;
  }
  public resetIgnoreHeadersRow() {
    this._ignoreHeadersRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHeadersRowInput() {
    return this._ignoreHeadersRow;
  }

  // include_op_for_full_load - computed: false, optional: true, required: false
  private _includeOpForFullLoad?: boolean | cdktf.IResolvable; 
  public get includeOpForFullLoad() {
    return this.getBooleanAttribute('include_op_for_full_load');
  }
  public set includeOpForFullLoad(value: boolean | cdktf.IResolvable) {
    this._includeOpForFullLoad = value;
  }
  public resetIncludeOpForFullLoad() {
    this._includeOpForFullLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOpForFullLoadInput() {
    return this._includeOpForFullLoad;
  }

  // max_file_size - computed: false, optional: true, required: false
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
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

  // preserve_transactions - computed: false, optional: true, required: false
  private _preserveTransactions?: boolean | cdktf.IResolvable; 
  public get preserveTransactions() {
    return this.getBooleanAttribute('preserve_transactions');
  }
  public set preserveTransactions(value: boolean | cdktf.IResolvable) {
    this._preserveTransactions = value;
  }
  public resetPreserveTransactions() {
    this._preserveTransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveTransactionsInput() {
    return this._preserveTransactions;
  }

  // rfc_4180 - computed: false, optional: true, required: false
  private _rfc4180?: boolean | cdktf.IResolvable; 
  public get rfc4180() {
    return this.getBooleanAttribute('rfc_4180');
  }
  public set rfc4180(value: boolean | cdktf.IResolvable) {
    this._rfc4180 = value;
  }
  public resetRfc4180() {
    this._rfc4180 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc4180Input() {
    return this._rfc4180;
  }

  // row_group_length - computed: false, optional: true, required: false
  private _rowGroupLength?: number; 
  public get rowGroupLength() {
    return this.getNumberAttribute('row_group_length');
  }
  public set rowGroupLength(value: number) {
    this._rowGroupLength = value;
  }
  public resetRowGroupLength() {
    this._rowGroupLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowGroupLengthInput() {
    return this._rowGroupLength;
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

  // timestamp_column_name - computed: false, optional: true, required: false
  private _timestampColumnName?: string; 
  public get timestampColumnName() {
    return this.getStringAttribute('timestamp_column_name');
  }
  public set timestampColumnName(value: string) {
    this._timestampColumnName = value;
  }
  public resetTimestampColumnName() {
    this._timestampColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampColumnNameInput() {
    return this._timestampColumnName;
  }

  // use_csv_no_sup_value - computed: false, optional: true, required: false
  private _useCsvNoSupValue?: boolean | cdktf.IResolvable; 
  public get useCsvNoSupValue() {
    return this.getBooleanAttribute('use_csv_no_sup_value');
  }
  public set useCsvNoSupValue(value: boolean | cdktf.IResolvable) {
    this._useCsvNoSupValue = value;
  }
  public resetUseCsvNoSupValue() {
    this._useCsvNoSupValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCsvNoSupValueInput() {
    return this._useCsvNoSupValue;
  }

  // use_task_start_time_for_full_load_timestamp - computed: false, optional: true, required: false
  private _useTaskStartTimeForFullLoadTimestamp?: boolean | cdktf.IResolvable; 
  public get useTaskStartTimeForFullLoadTimestamp() {
    return this.getBooleanAttribute('use_task_start_time_for_full_load_timestamp');
  }
  public set useTaskStartTimeForFullLoadTimestamp(value: boolean | cdktf.IResolvable) {
    this._useTaskStartTimeForFullLoadTimestamp = value;
  }
  public resetUseTaskStartTimeForFullLoadTimestamp() {
    this._useTaskStartTimeForFullLoadTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTaskStartTimeForFullLoadTimestampInput() {
    return this._useTaskStartTimeForFullLoadTimestamp;
  }
}
export interface DmsEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#create DmsEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#delete DmsEndpoint#delete}
  */
  readonly delete?: string;
}

export function dmsEndpointTimeoutsToTerraform(struct?: DmsEndpointTimeoutsOutputReference | DmsEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DmsEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint aws_dms_endpoint}
*/
export class DmsEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_endpoint";

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
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateArn = config.certificateArn;
    this._databaseName = config.databaseName;
    this._endpointId = config.endpointId;
    this._endpointType = config.endpointType;
    this._engineName = config.engineName;
    this._extraConnectionAttributes = config.extraConnectionAttributes;
    this._id = config.id;
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
    this._redisSettings.internalValue = config.redisSettings;
    this._redshiftSettings.internalValue = config.redshiftSettings;
    this._s3Settings.internalValue = config.s3Settings;
    this._timeouts.internalValue = config.timeouts;
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
  private _elasticsearchSettings = new DmsEndpointElasticsearchSettingsOutputReference(this, "elasticsearch_settings");
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
  private _kafkaSettings = new DmsEndpointKafkaSettingsOutputReference(this, "kafka_settings");
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
  private _kinesisSettings = new DmsEndpointKinesisSettingsOutputReference(this, "kinesis_settings");
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
  private _mongodbSettings = new DmsEndpointMongodbSettingsOutputReference(this, "mongodb_settings");
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

  // redis_settings - computed: false, optional: true, required: false
  private _redisSettings = new DmsEndpointRedisSettingsOutputReference(this, "redis_settings");
  public get redisSettings() {
    return this._redisSettings;
  }
  public putRedisSettings(value: DmsEndpointRedisSettings) {
    this._redisSettings.internalValue = value;
  }
  public resetRedisSettings() {
    this._redisSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisSettingsInput() {
    return this._redisSettings.internalValue;
  }

  // redshift_settings - computed: false, optional: true, required: false
  private _redshiftSettings = new DmsEndpointRedshiftSettingsOutputReference(this, "redshift_settings");
  public get redshiftSettings() {
    return this._redshiftSettings;
  }
  public putRedshiftSettings(value: DmsEndpointRedshiftSettings) {
    this._redshiftSettings.internalValue = value;
  }
  public resetRedshiftSettings() {
    this._redshiftSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftSettingsInput() {
    return this._redshiftSettings.internalValue;
  }

  // s3_settings - computed: false, optional: true, required: false
  private _s3Settings = new DmsEndpointS3SettingsOutputReference(this, "s3_settings");
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DmsEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DmsEndpointTimeouts) {
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
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      database_name: cdktf.stringToTerraform(this._databaseName),
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      engine_name: cdktf.stringToTerraform(this._engineName),
      extra_connection_attributes: cdktf.stringToTerraform(this._extraConnectionAttributes),
      id: cdktf.stringToTerraform(this._id),
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
      redis_settings: dmsEndpointRedisSettingsToTerraform(this._redisSettings.internalValue),
      redshift_settings: dmsEndpointRedshiftSettingsToTerraform(this._redshiftSettings.internalValue),
      s3_settings: dmsEndpointS3SettingsToTerraform(this._s3Settings.internalValue),
      timeouts: dmsEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
