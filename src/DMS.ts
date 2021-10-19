// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Database Migration Service
*/
export namespace DMS {
  export interface DmsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_id DmsCertificate#certificate_id}
    */
    readonly certificateId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_pem DmsCertificate#certificate_pem}
    */
    readonly certificatePem?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_wallet DmsCertificate#certificate_wallet}
    */
    readonly certificateWallet?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#tags DmsCertificate#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#tags_all DmsCertificate#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate}
  */
  export class DmsCertificate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dms_certificate";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsCertificateConfig
    */
    public constructor(scope: Construct, id: string, config: DmsCertificateConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dms_certificate',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._certificateId = config.certificateId;
      this._certificatePem = config.certificatePem;
      this._certificateWallet = config.certificateWallet;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_arn - computed: true, optional: false, required: false
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }

    // certificate_id - computed: false, optional: false, required: true
    private _certificateId?: string; 
    public get certificateId() {
      return this.getStringAttribute('certificate_id');
    }
    public set certificateId(value: string) {
      this._certificateId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateIdInput() {
      return this._certificateId
    }

    // certificate_pem - computed: false, optional: true, required: false
    private _certificatePem?: string | undefined; 
    public get certificatePem() {
      return this.getStringAttribute('certificate_pem');
    }
    public set certificatePem(value: string | undefined) {
      this._certificatePem = value;
    }
    public resetCertificatePem() {
      this._certificatePem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificatePemInput() {
      return this._certificatePem
    }

    // certificate_wallet - computed: false, optional: true, required: false
    private _certificateWallet?: string | undefined; 
    public get certificateWallet() {
      return this.getStringAttribute('certificate_wallet');
    }
    public set certificateWallet(value: string | undefined) {
      this._certificateWallet = value;
    }
    public resetCertificateWallet() {
      this._certificateWallet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateWalletInput() {
      return this._certificateWallet
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        certificate_id: cdktf.stringToTerraform(this._certificateId),
        certificate_pem: cdktf.stringToTerraform(this._certificatePem),
        certificate_wallet: cdktf.stringToTerraform(this._certificateWallet),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DmsEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#certificate_arn DmsEndpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#database_name DmsEndpoint#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#endpoint_id DmsEndpoint#endpoint_id}
    */
    readonly endpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#endpoint_type DmsEndpoint#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#engine_name DmsEndpoint#engine_name}
    */
    readonly engineName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#extra_connection_attributes DmsEndpoint#extra_connection_attributes}
    */
    readonly extraConnectionAttributes?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kms_key_arn DmsEndpoint#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#password DmsEndpoint#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#port DmsEndpoint#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#server_name DmsEndpoint#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role DmsEndpoint#service_access_role}
    */
    readonly serviceAccessRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_mode DmsEndpoint#ssl_mode}
    */
    readonly sslMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#tags DmsEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#tags_all DmsEndpoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#username DmsEndpoint#username}
    */
    readonly username?: string;
    /**
    * elasticsearch_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#elasticsearch_settings DmsEndpoint#elasticsearch_settings}
    */
    readonly elasticsearchSettings?: DmsEndpointElasticsearchSettings;
    /**
    * kafka_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kafka_settings DmsEndpoint#kafka_settings}
    */
    readonly kafkaSettings?: DmsEndpointKafkaSettings;
    /**
    * kinesis_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kinesis_settings DmsEndpoint#kinesis_settings}
    */
    readonly kinesisSettings?: DmsEndpointKinesisSettings;
    /**
    * mongodb_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#mongodb_settings DmsEndpoint#mongodb_settings}
    */
    readonly mongodbSettings?: DmsEndpointMongodbSettings;
    /**
    * s3_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#s3_settings DmsEndpoint#s3_settings}
    */
    readonly s3Settings?: DmsEndpointS3Settings;
  }
  export interface DmsEndpointElasticsearchSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#endpoint_uri DmsEndpoint#endpoint_uri}
    */
    readonly endpointUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#error_retry_duration DmsEndpoint#error_retry_duration}
    */
    readonly errorRetryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#full_load_error_percentage DmsEndpoint#full_load_error_percentage}
    */
    readonly fullLoadErrorPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn: string;
  }

  function dmsEndpointElasticsearchSettingsToTerraform(struct?: DmsEndpointElasticsearchSettingsOutputReference | DmsEndpointElasticsearchSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._endpointUri
    }

    // error_retry_duration - computed: false, optional: true, required: false
    private _errorRetryDuration?: number | undefined; 
    public get errorRetryDuration() {
      return this.getNumberAttribute('error_retry_duration');
    }
    public set errorRetryDuration(value: number | undefined) {
      this._errorRetryDuration = value;
    }
    public resetErrorRetryDuration() {
      this._errorRetryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorRetryDurationInput() {
      return this._errorRetryDuration
    }

    // full_load_error_percentage - computed: false, optional: true, required: false
    private _fullLoadErrorPercentage?: number | undefined; 
    public get fullLoadErrorPercentage() {
      return this.getNumberAttribute('full_load_error_percentage');
    }
    public set fullLoadErrorPercentage(value: number | undefined) {
      this._fullLoadErrorPercentage = value;
    }
    public resetFullLoadErrorPercentage() {
      this._fullLoadErrorPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fullLoadErrorPercentageInput() {
      return this._fullLoadErrorPercentage
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
      return this._serviceAccessRoleArn
    }
  }
  export interface DmsEndpointKafkaSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#broker DmsEndpoint#broker}
    */
    readonly broker: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_control_details DmsEndpoint#include_control_details}
    */
    readonly includeControlDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_null_and_empty DmsEndpoint#include_null_and_empty}
    */
    readonly includeNullAndEmpty?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_partition_value DmsEndpoint#include_partition_value}
    */
    readonly includePartitionValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_table_alter_operations DmsEndpoint#include_table_alter_operations}
    */
    readonly includeTableAlterOperations?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#include_transaction_details DmsEndpoint#include_transaction_details}
    */
    readonly includeTransactionDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#message_format DmsEndpoint#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#message_max_bytes DmsEndpoint#message_max_bytes}
    */
    readonly messageMaxBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#no_hex_prefix DmsEndpoint#no_hex_prefix}
    */
    readonly noHexPrefix?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#partition_include_schema_table DmsEndpoint#partition_include_schema_table}
    */
    readonly partitionIncludeSchemaTable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#sasl_password DmsEndpoint#sasl_password}
    */
    readonly saslPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#sasl_username DmsEndpoint#sasl_username}
    */
    readonly saslUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#security_protocol DmsEndpoint#security_protocol}
    */
    readonly securityProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}
    */
    readonly sslCaCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}
    */
    readonly sslClientCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}
    */
    readonly sslClientKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_client_key_password DmsEndpoint#ssl_client_key_password}
    */
    readonly sslClientKeyPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#topic DmsEndpoint#topic}
    */
    readonly topic?: string;
  }

  function dmsEndpointKafkaSettingsToTerraform(struct?: DmsEndpointKafkaSettingsOutputReference | DmsEndpointKafkaSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._broker
    }

    // include_control_details - computed: false, optional: true, required: false
    private _includeControlDetails?: boolean | cdktf.IResolvable | undefined; 
    public get includeControlDetails() {
      return this.getBooleanAttribute('include_control_details') as any;
    }
    public set includeControlDetails(value: boolean | cdktf.IResolvable | undefined) {
      this._includeControlDetails = value;
    }
    public resetIncludeControlDetails() {
      this._includeControlDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeControlDetailsInput() {
      return this._includeControlDetails
    }

    // include_null_and_empty - computed: false, optional: true, required: false
    private _includeNullAndEmpty?: boolean | cdktf.IResolvable | undefined; 
    public get includeNullAndEmpty() {
      return this.getBooleanAttribute('include_null_and_empty') as any;
    }
    public set includeNullAndEmpty(value: boolean | cdktf.IResolvable | undefined) {
      this._includeNullAndEmpty = value;
    }
    public resetIncludeNullAndEmpty() {
      this._includeNullAndEmpty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeNullAndEmptyInput() {
      return this._includeNullAndEmpty
    }

    // include_partition_value - computed: false, optional: true, required: false
    private _includePartitionValue?: boolean | cdktf.IResolvable | undefined; 
    public get includePartitionValue() {
      return this.getBooleanAttribute('include_partition_value') as any;
    }
    public set includePartitionValue(value: boolean | cdktf.IResolvable | undefined) {
      this._includePartitionValue = value;
    }
    public resetIncludePartitionValue() {
      this._includePartitionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includePartitionValueInput() {
      return this._includePartitionValue
    }

    // include_table_alter_operations - computed: false, optional: true, required: false
    private _includeTableAlterOperations?: boolean | cdktf.IResolvable | undefined; 
    public get includeTableAlterOperations() {
      return this.getBooleanAttribute('include_table_alter_operations') as any;
    }
    public set includeTableAlterOperations(value: boolean | cdktf.IResolvable | undefined) {
      this._includeTableAlterOperations = value;
    }
    public resetIncludeTableAlterOperations() {
      this._includeTableAlterOperations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeTableAlterOperationsInput() {
      return this._includeTableAlterOperations
    }

    // include_transaction_details - computed: false, optional: true, required: false
    private _includeTransactionDetails?: boolean | cdktf.IResolvable | undefined; 
    public get includeTransactionDetails() {
      return this.getBooleanAttribute('include_transaction_details') as any;
    }
    public set includeTransactionDetails(value: boolean | cdktf.IResolvable | undefined) {
      this._includeTransactionDetails = value;
    }
    public resetIncludeTransactionDetails() {
      this._includeTransactionDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeTransactionDetailsInput() {
      return this._includeTransactionDetails
    }

    // message_format - computed: false, optional: true, required: false
    private _messageFormat?: string | undefined; 
    public get messageFormat() {
      return this.getStringAttribute('message_format');
    }
    public set messageFormat(value: string | undefined) {
      this._messageFormat = value;
    }
    public resetMessageFormat() {
      this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageFormatInput() {
      return this._messageFormat
    }

    // message_max_bytes - computed: false, optional: true, required: false
    private _messageMaxBytes?: number | undefined; 
    public get messageMaxBytes() {
      return this.getNumberAttribute('message_max_bytes');
    }
    public set messageMaxBytes(value: number | undefined) {
      this._messageMaxBytes = value;
    }
    public resetMessageMaxBytes() {
      this._messageMaxBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageMaxBytesInput() {
      return this._messageMaxBytes
    }

    // no_hex_prefix - computed: false, optional: true, required: false
    private _noHexPrefix?: boolean | cdktf.IResolvable | undefined; 
    public get noHexPrefix() {
      return this.getBooleanAttribute('no_hex_prefix') as any;
    }
    public set noHexPrefix(value: boolean | cdktf.IResolvable | undefined) {
      this._noHexPrefix = value;
    }
    public resetNoHexPrefix() {
      this._noHexPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noHexPrefixInput() {
      return this._noHexPrefix
    }

    // partition_include_schema_table - computed: false, optional: true, required: false
    private _partitionIncludeSchemaTable?: boolean | cdktf.IResolvable | undefined; 
    public get partitionIncludeSchemaTable() {
      return this.getBooleanAttribute('partition_include_schema_table') as any;
    }
    public set partitionIncludeSchemaTable(value: boolean | cdktf.IResolvable | undefined) {
      this._partitionIncludeSchemaTable = value;
    }
    public resetPartitionIncludeSchemaTable() {
      this._partitionIncludeSchemaTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionIncludeSchemaTableInput() {
      return this._partitionIncludeSchemaTable
    }

    // sasl_password - computed: false, optional: true, required: false
    private _saslPassword?: string | undefined; 
    public get saslPassword() {
      return this.getStringAttribute('sasl_password');
    }
    public set saslPassword(value: string | undefined) {
      this._saslPassword = value;
    }
    public resetSaslPassword() {
      this._saslPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslPasswordInput() {
      return this._saslPassword
    }

    // sasl_username - computed: false, optional: true, required: false
    private _saslUsername?: string | undefined; 
    public get saslUsername() {
      return this.getStringAttribute('sasl_username');
    }
    public set saslUsername(value: string | undefined) {
      this._saslUsername = value;
    }
    public resetSaslUsername() {
      this._saslUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslUsernameInput() {
      return this._saslUsername
    }

    // security_protocol - computed: false, optional: true, required: false
    private _securityProtocol?: string | undefined; 
    public get securityProtocol() {
      return this.getStringAttribute('security_protocol');
    }
    public set securityProtocol(value: string | undefined) {
      this._securityProtocol = value;
    }
    public resetSecurityProtocol() {
      this._securityProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityProtocolInput() {
      return this._securityProtocol
    }

    // ssl_ca_certificate_arn - computed: false, optional: true, required: false
    private _sslCaCertificateArn?: string | undefined; 
    public get sslCaCertificateArn() {
      return this.getStringAttribute('ssl_ca_certificate_arn');
    }
    public set sslCaCertificateArn(value: string | undefined) {
      this._sslCaCertificateArn = value;
    }
    public resetSslCaCertificateArn() {
      this._sslCaCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslCaCertificateArnInput() {
      return this._sslCaCertificateArn
    }

    // ssl_client_certificate_arn - computed: false, optional: true, required: false
    private _sslClientCertificateArn?: string | undefined; 
    public get sslClientCertificateArn() {
      return this.getStringAttribute('ssl_client_certificate_arn');
    }
    public set sslClientCertificateArn(value: string | undefined) {
      this._sslClientCertificateArn = value;
    }
    public resetSslClientCertificateArn() {
      this._sslClientCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslClientCertificateArnInput() {
      return this._sslClientCertificateArn
    }

    // ssl_client_key_arn - computed: false, optional: true, required: false
    private _sslClientKeyArn?: string | undefined; 
    public get sslClientKeyArn() {
      return this.getStringAttribute('ssl_client_key_arn');
    }
    public set sslClientKeyArn(value: string | undefined) {
      this._sslClientKeyArn = value;
    }
    public resetSslClientKeyArn() {
      this._sslClientKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslClientKeyArnInput() {
      return this._sslClientKeyArn
    }

    // ssl_client_key_password - computed: false, optional: true, required: false
    private _sslClientKeyPassword?: string | undefined; 
    public get sslClientKeyPassword() {
      return this.getStringAttribute('ssl_client_key_password');
    }
    public set sslClientKeyPassword(value: string | undefined) {
      this._sslClientKeyPassword = value;
    }
    public resetSslClientKeyPassword() {
      this._sslClientKeyPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslClientKeyPasswordInput() {
      return this._sslClientKeyPassword
    }

    // topic - computed: false, optional: true, required: false
    private _topic?: string | undefined; 
    public get topic() {
      return this.getStringAttribute('topic');
    }
    public set topic(value: string | undefined) {
      this._topic = value;
    }
    public resetTopic() {
      this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
      return this._topic
    }
  }
  export interface DmsEndpointKinesisSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#message_format DmsEndpoint#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#stream_arn DmsEndpoint#stream_arn}
    */
    readonly streamArn?: string;
  }

  function dmsEndpointKinesisSettingsToTerraform(struct?: DmsEndpointKinesisSettingsOutputReference | DmsEndpointKinesisSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      message_format: cdktf.stringToTerraform(struct!.messageFormat),
      service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
      stream_arn: cdktf.stringToTerraform(struct!.streamArn),
    }
  }

  export class DmsEndpointKinesisSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // message_format - computed: false, optional: true, required: false
    private _messageFormat?: string | undefined; 
    public get messageFormat() {
      return this.getStringAttribute('message_format');
    }
    public set messageFormat(value: string | undefined) {
      this._messageFormat = value;
    }
    public resetMessageFormat() {
      this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageFormatInput() {
      return this._messageFormat
    }

    // service_access_role_arn - computed: false, optional: true, required: false
    private _serviceAccessRoleArn?: string | undefined; 
    public get serviceAccessRoleArn() {
      return this.getStringAttribute('service_access_role_arn');
    }
    public set serviceAccessRoleArn(value: string | undefined) {
      this._serviceAccessRoleArn = value;
    }
    public resetServiceAccessRoleArn() {
      this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleArnInput() {
      return this._serviceAccessRoleArn
    }

    // stream_arn - computed: false, optional: true, required: false
    private _streamArn?: string | undefined; 
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string | undefined) {
      this._streamArn = value;
    }
    public resetStreamArn() {
      this._streamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
      return this._streamArn
    }
  }
  export interface DmsEndpointMongodbSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#auth_mechanism DmsEndpoint#auth_mechanism}
    */
    readonly authMechanism?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#auth_source DmsEndpoint#auth_source}
    */
    readonly authSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#auth_type DmsEndpoint#auth_type}
    */
    readonly authType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#docs_to_investigate DmsEndpoint#docs_to_investigate}
    */
    readonly docsToInvestigate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#extract_doc_id DmsEndpoint#extract_doc_id}
    */
    readonly extractDocId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#nesting_level DmsEndpoint#nesting_level}
    */
    readonly nestingLevel?: string;
  }

  function dmsEndpointMongodbSettingsToTerraform(struct?: DmsEndpointMongodbSettingsOutputReference | DmsEndpointMongodbSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // auth_mechanism - computed: false, optional: true, required: false
    private _authMechanism?: string | undefined; 
    public get authMechanism() {
      return this.getStringAttribute('auth_mechanism');
    }
    public set authMechanism(value: string | undefined) {
      this._authMechanism = value;
    }
    public resetAuthMechanism() {
      this._authMechanism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authMechanismInput() {
      return this._authMechanism
    }

    // auth_source - computed: false, optional: true, required: false
    private _authSource?: string | undefined; 
    public get authSource() {
      return this.getStringAttribute('auth_source');
    }
    public set authSource(value: string | undefined) {
      this._authSource = value;
    }
    public resetAuthSource() {
      this._authSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authSourceInput() {
      return this._authSource
    }

    // auth_type - computed: false, optional: true, required: false
    private _authType?: string | undefined; 
    public get authType() {
      return this.getStringAttribute('auth_type');
    }
    public set authType(value: string | undefined) {
      this._authType = value;
    }
    public resetAuthType() {
      this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
      return this._authType
    }

    // docs_to_investigate - computed: false, optional: true, required: false
    private _docsToInvestigate?: string | undefined; 
    public get docsToInvestigate() {
      return this.getStringAttribute('docs_to_investigate');
    }
    public set docsToInvestigate(value: string | undefined) {
      this._docsToInvestigate = value;
    }
    public resetDocsToInvestigate() {
      this._docsToInvestigate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get docsToInvestigateInput() {
      return this._docsToInvestigate
    }

    // extract_doc_id - computed: false, optional: true, required: false
    private _extractDocId?: string | undefined; 
    public get extractDocId() {
      return this.getStringAttribute('extract_doc_id');
    }
    public set extractDocId(value: string | undefined) {
      this._extractDocId = value;
    }
    public resetExtractDocId() {
      this._extractDocId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractDocIdInput() {
      return this._extractDocId
    }

    // nesting_level - computed: false, optional: true, required: false
    private _nestingLevel?: string | undefined; 
    public get nestingLevel() {
      return this.getStringAttribute('nesting_level');
    }
    public set nestingLevel(value: string | undefined) {
      this._nestingLevel = value;
    }
    public resetNestingLevel() {
      this._nestingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nestingLevelInput() {
      return this._nestingLevel
    }
  }
  export interface DmsEndpointS3Settings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#bucket_folder DmsEndpoint#bucket_folder}
    */
    readonly bucketFolder?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#bucket_name DmsEndpoint#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#compression_type DmsEndpoint#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#csv_delimiter DmsEndpoint#csv_delimiter}
    */
    readonly csvDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#csv_row_delimiter DmsEndpoint#csv_row_delimiter}
    */
    readonly csvRowDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#data_format DmsEndpoint#data_format}
    */
    readonly dataFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#date_partition_enabled DmsEndpoint#date_partition_enabled}
    */
    readonly datePartitionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#encryption_mode DmsEndpoint#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#external_table_definition DmsEndpoint#external_table_definition}
    */
    readonly externalTableDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}
    */
    readonly parquetTimestampInMillisecond?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#parquet_version DmsEndpoint#parquet_version}
    */
    readonly parquetVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}
    */
    readonly serverSideEncryptionKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
  }

  function dmsEndpointS3SettingsToTerraform(struct?: DmsEndpointS3SettingsOutputReference | DmsEndpointS3Settings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_folder - computed: false, optional: true, required: false
    private _bucketFolder?: string | undefined; 
    public get bucketFolder() {
      return this.getStringAttribute('bucket_folder');
    }
    public set bucketFolder(value: string | undefined) {
      this._bucketFolder = value;
    }
    public resetBucketFolder() {
      this._bucketFolder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketFolderInput() {
      return this._bucketFolder
    }

    // bucket_name - computed: false, optional: true, required: false
    private _bucketName?: string | undefined; 
    public get bucketName() {
      return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string | undefined) {
      this._bucketName = value;
    }
    public resetBucketName() {
      this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
      return this._bucketName
    }

    // compression_type - computed: false, optional: true, required: false
    private _compressionType?: string | undefined; 
    public get compressionType() {
      return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string | undefined) {
      this._compressionType = value;
    }
    public resetCompressionType() {
      this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
      return this._compressionType
    }

    // csv_delimiter - computed: false, optional: true, required: false
    private _csvDelimiter?: string | undefined; 
    public get csvDelimiter() {
      return this.getStringAttribute('csv_delimiter');
    }
    public set csvDelimiter(value: string | undefined) {
      this._csvDelimiter = value;
    }
    public resetCsvDelimiter() {
      this._csvDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvDelimiterInput() {
      return this._csvDelimiter
    }

    // csv_row_delimiter - computed: false, optional: true, required: false
    private _csvRowDelimiter?: string | undefined; 
    public get csvRowDelimiter() {
      return this.getStringAttribute('csv_row_delimiter');
    }
    public set csvRowDelimiter(value: string | undefined) {
      this._csvRowDelimiter = value;
    }
    public resetCsvRowDelimiter() {
      this._csvRowDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvRowDelimiterInput() {
      return this._csvRowDelimiter
    }

    // data_format - computed: false, optional: true, required: false
    private _dataFormat?: string | undefined; 
    public get dataFormat() {
      return this.getStringAttribute('data_format');
    }
    public set dataFormat(value: string | undefined) {
      this._dataFormat = value;
    }
    public resetDataFormat() {
      this._dataFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFormatInput() {
      return this._dataFormat
    }

    // date_partition_enabled - computed: false, optional: true, required: false
    private _datePartitionEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get datePartitionEnabled() {
      return this.getBooleanAttribute('date_partition_enabled') as any;
    }
    public set datePartitionEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._datePartitionEnabled = value;
    }
    public resetDatePartitionEnabled() {
      this._datePartitionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datePartitionEnabledInput() {
      return this._datePartitionEnabled
    }

    // encryption_mode - computed: false, optional: true, required: false
    private _encryptionMode?: string | undefined; 
    public get encryptionMode() {
      return this.getStringAttribute('encryption_mode');
    }
    public set encryptionMode(value: string | undefined) {
      this._encryptionMode = value;
    }
    public resetEncryptionMode() {
      this._encryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionModeInput() {
      return this._encryptionMode
    }

    // external_table_definition - computed: false, optional: true, required: false
    private _externalTableDefinition?: string | undefined; 
    public get externalTableDefinition() {
      return this.getStringAttribute('external_table_definition');
    }
    public set externalTableDefinition(value: string | undefined) {
      this._externalTableDefinition = value;
    }
    public resetExternalTableDefinition() {
      this._externalTableDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalTableDefinitionInput() {
      return this._externalTableDefinition
    }

    // parquet_timestamp_in_millisecond - computed: false, optional: true, required: false
    private _parquetTimestampInMillisecond?: boolean | cdktf.IResolvable | undefined; 
    public get parquetTimestampInMillisecond() {
      return this.getBooleanAttribute('parquet_timestamp_in_millisecond') as any;
    }
    public set parquetTimestampInMillisecond(value: boolean | cdktf.IResolvable | undefined) {
      this._parquetTimestampInMillisecond = value;
    }
    public resetParquetTimestampInMillisecond() {
      this._parquetTimestampInMillisecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parquetTimestampInMillisecondInput() {
      return this._parquetTimestampInMillisecond
    }

    // parquet_version - computed: false, optional: true, required: false
    private _parquetVersion?: string | undefined; 
    public get parquetVersion() {
      return this.getStringAttribute('parquet_version');
    }
    public set parquetVersion(value: string | undefined) {
      this._parquetVersion = value;
    }
    public resetParquetVersion() {
      this._parquetVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parquetVersionInput() {
      return this._parquetVersion
    }

    // server_side_encryption_kms_key_id - computed: false, optional: true, required: false
    private _serverSideEncryptionKmsKeyId?: string | undefined; 
    public get serverSideEncryptionKmsKeyId() {
      return this.getStringAttribute('server_side_encryption_kms_key_id');
    }
    public set serverSideEncryptionKmsKeyId(value: string | undefined) {
      this._serverSideEncryptionKmsKeyId = value;
    }
    public resetServerSideEncryptionKmsKeyId() {
      this._serverSideEncryptionKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionKmsKeyIdInput() {
      return this._serverSideEncryptionKmsKeyId
    }

    // service_access_role_arn - computed: false, optional: true, required: false
    private _serviceAccessRoleArn?: string | undefined; 
    public get serviceAccessRoleArn() {
      return this.getStringAttribute('service_access_role_arn');
    }
    public set serviceAccessRoleArn(value: string | undefined) {
      this._serviceAccessRoleArn = value;
    }
    public resetServiceAccessRoleArn() {
      this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleArnInput() {
      return this._serviceAccessRoleArn
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint}
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
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint} Resource
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
      this._serverName = config.serverName;
      this._serviceAccessRole = config.serviceAccessRole;
      this._sslMode = config.sslMode;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._username = config.username;
      this._elasticsearchSettings = config.elasticsearchSettings;
      this._kafkaSettings = config.kafkaSettings;
      this._kinesisSettings = config.kinesisSettings;
      this._mongodbSettings = config.mongodbSettings;
      this._s3Settings = config.s3Settings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string | undefined; 
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string | undefined) {
      this._certificateArn = value;
    }
    public resetCertificateArn() {
      this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }

    // database_name - computed: false, optional: true, required: false
    private _databaseName?: string | undefined; 
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string | undefined) {
      this._databaseName = value;
    }
    public resetDatabaseName() {
      this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
      return this._databaseName
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
      return this._endpointId
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
      return this._endpointType
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
      return this._engineName
    }

    // extra_connection_attributes - computed: true, optional: true, required: false
    private _extraConnectionAttributes?: string | undefined; 
    public get extraConnectionAttributes() {
      return this.getStringAttribute('extra_connection_attributes');
    }
    public set extraConnectionAttributes(value: string | undefined) {
      this._extraConnectionAttributes = value;
    }
    public resetExtraConnectionAttributes() {
      this._extraConnectionAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extraConnectionAttributesInput() {
      return this._extraConnectionAttributes
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: true, required: false
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

    // password - computed: false, optional: true, required: false
    private _password?: string | undefined; 
    public get password() {
      return this.getStringAttribute('password');
    }
    public set password(value: string | undefined) {
      this._password = value;
    }
    public resetPassword() {
      this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
      return this._password
    }

    // port - computed: false, optional: true, required: false
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // server_name - computed: false, optional: true, required: false
    private _serverName?: string | undefined; 
    public get serverName() {
      return this.getStringAttribute('server_name');
    }
    public set serverName(value: string | undefined) {
      this._serverName = value;
    }
    public resetServerName() {
      this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
      return this._serverName
    }

    // service_access_role - computed: false, optional: true, required: false
    private _serviceAccessRole?: string | undefined; 
    public get serviceAccessRole() {
      return this.getStringAttribute('service_access_role');
    }
    public set serviceAccessRole(value: string | undefined) {
      this._serviceAccessRole = value;
    }
    public resetServiceAccessRole() {
      this._serviceAccessRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleInput() {
      return this._serviceAccessRole
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string | undefined; 
    public get sslMode() {
      return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string | undefined) {
      this._sslMode = value;
    }
    public resetSslMode() {
      this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
      return this._sslMode
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

    // username - computed: false, optional: true, required: false
    private _username?: string | undefined; 
    public get username() {
      return this.getStringAttribute('username');
    }
    public set username(value: string | undefined) {
      this._username = value;
    }
    public resetUsername() {
      this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
      return this._username
    }

    // elasticsearch_settings - computed: false, optional: true, required: false
    private _elasticsearchSettings?: DmsEndpointElasticsearchSettings | undefined; 
    private __elasticsearchSettingsOutput = new DmsEndpointElasticsearchSettingsOutputReference(this as any, "elasticsearch_settings", true);
    public get elasticsearchSettings() {
      return this.__elasticsearchSettingsOutput;
    }
    public putElasticsearchSettings(value: DmsEndpointElasticsearchSettings | undefined) {
      this._elasticsearchSettings = value;
    }
    public resetElasticsearchSettings() {
      this._elasticsearchSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticsearchSettingsInput() {
      return this._elasticsearchSettings
    }

    // kafka_settings - computed: false, optional: true, required: false
    private _kafkaSettings?: DmsEndpointKafkaSettings | undefined; 
    private __kafkaSettingsOutput = new DmsEndpointKafkaSettingsOutputReference(this as any, "kafka_settings", true);
    public get kafkaSettings() {
      return this.__kafkaSettingsOutput;
    }
    public putKafkaSettings(value: DmsEndpointKafkaSettings | undefined) {
      this._kafkaSettings = value;
    }
    public resetKafkaSettings() {
      this._kafkaSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaSettingsInput() {
      return this._kafkaSettings
    }

    // kinesis_settings - computed: false, optional: true, required: false
    private _kinesisSettings?: DmsEndpointKinesisSettings | undefined; 
    private __kinesisSettingsOutput = new DmsEndpointKinesisSettingsOutputReference(this as any, "kinesis_settings", true);
    public get kinesisSettings() {
      return this.__kinesisSettingsOutput;
    }
    public putKinesisSettings(value: DmsEndpointKinesisSettings | undefined) {
      this._kinesisSettings = value;
    }
    public resetKinesisSettings() {
      this._kinesisSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisSettingsInput() {
      return this._kinesisSettings
    }

    // mongodb_settings - computed: false, optional: true, required: false
    private _mongodbSettings?: DmsEndpointMongodbSettings | undefined; 
    private __mongodbSettingsOutput = new DmsEndpointMongodbSettingsOutputReference(this as any, "mongodb_settings", true);
    public get mongodbSettings() {
      return this.__mongodbSettingsOutput;
    }
    public putMongodbSettings(value: DmsEndpointMongodbSettings | undefined) {
      this._mongodbSettings = value;
    }
    public resetMongodbSettings() {
      this._mongodbSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mongodbSettingsInput() {
      return this._mongodbSettings
    }

    // s3_settings - computed: false, optional: true, required: false
    private _s3Settings?: DmsEndpointS3Settings | undefined; 
    private __s3SettingsOutput = new DmsEndpointS3SettingsOutputReference(this as any, "s3_settings", true);
    public get s3Settings() {
      return this.__s3SettingsOutput;
    }
    public putS3Settings(value: DmsEndpointS3Settings | undefined) {
      this._s3Settings = value;
    }
    public resetS3Settings() {
      this._s3Settings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3SettingsInput() {
      return this._s3Settings
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
        server_name: cdktf.stringToTerraform(this._serverName),
        service_access_role: cdktf.stringToTerraform(this._serviceAccessRole),
        ssl_mode: cdktf.stringToTerraform(this._sslMode),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        username: cdktf.stringToTerraform(this._username),
        elasticsearch_settings: dmsEndpointElasticsearchSettingsToTerraform(this._elasticsearchSettings),
        kafka_settings: dmsEndpointKafkaSettingsToTerraform(this._kafkaSettings),
        kinesis_settings: dmsEndpointKinesisSettingsToTerraform(this._kinesisSettings),
        mongodb_settings: dmsEndpointMongodbSettingsToTerraform(this._mongodbSettings),
        s3_settings: dmsEndpointS3SettingsToTerraform(this._s3Settings),
      };
    }
  }
  export interface DmsEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#enabled DmsEventSubscription#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#event_categories DmsEventSubscription#event_categories}
    */
    readonly eventCategories: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#name DmsEventSubscription#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#sns_topic_arn DmsEventSubscription#sns_topic_arn}
    */
    readonly snsTopicArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#source_ids DmsEventSubscription#source_ids}
    */
    readonly sourceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#source_type DmsEventSubscription#source_type}
    */
    readonly sourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#tags DmsEventSubscription#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#tags_all DmsEventSubscription#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#timeouts DmsEventSubscription#timeouts}
    */
    readonly timeouts?: DmsEventSubscriptionTimeouts;
  }
  export interface DmsEventSubscriptionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#create DmsEventSubscription#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#delete DmsEventSubscription#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#update DmsEventSubscription#update}
    */
    readonly update?: string;
  }

  function dmsEventSubscriptionTimeoutsToTerraform(struct?: DmsEventSubscriptionTimeoutsOutputReference | DmsEventSubscriptionTimeouts): any {
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

  export class DmsEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html aws_dms_event_subscription}
  */
  export class DmsEventSubscription extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dms_event_subscription";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html aws_dms_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsEventSubscriptionConfig
    */
    public constructor(scope: Construct, id: string, config: DmsEventSubscriptionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dms_event_subscription',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enabled = config.enabled;
      this._eventCategories = config.eventCategories;
      this._name = config.name;
      this._snsTopicArn = config.snsTopicArn;
      this._sourceIds = config.sourceIds;
      this._sourceType = config.sourceType;
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

    // event_categories - computed: false, optional: false, required: true
    private _eventCategories?: string[]; 
    public get eventCategories() {
      return this.getListAttribute('event_categories');
    }
    public set eventCategories(value: string[]) {
      this._eventCategories = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventCategoriesInput() {
      return this._eventCategories
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

    // sns_topic_arn - computed: false, optional: false, required: true
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
      return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
      this._snsTopicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
      return this._snsTopicArn
    }

    // source_ids - computed: false, optional: true, required: false
    private _sourceIds?: string[] | undefined; 
    public get sourceIds() {
      return this.getListAttribute('source_ids');
    }
    public set sourceIds(value: string[] | undefined) {
      this._sourceIds = value;
    }
    public resetSourceIds() {
      this._sourceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdsInput() {
      return this._sourceIds
    }

    // source_type - computed: false, optional: true, required: false
    private _sourceType?: string | undefined; 
    public get sourceType() {
      return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string | undefined) {
      this._sourceType = value;
    }
    public resetSourceType() {
      this._sourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
      return this._sourceType
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
    private _timeouts?: DmsEventSubscriptionTimeouts | undefined; 
    private __timeoutsOutput = new DmsEventSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DmsEventSubscriptionTimeouts | undefined) {
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
        enabled: cdktf.booleanToTerraform(this._enabled),
        event_categories: cdktf.listMapper(cdktf.stringToTerraform)(this._eventCategories),
        name: cdktf.stringToTerraform(this._name),
        sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
        source_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceIds),
        source_type: cdktf.stringToTerraform(this._sourceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: dmsEventSubscriptionTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DmsReplicationInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#allocated_storage DmsReplicationInstance#allocated_storage}
    */
    readonly allocatedStorage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#apply_immediately DmsReplicationInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#availability_zone DmsReplicationInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#engine_version DmsReplicationInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#kms_key_arn DmsReplicationInstance#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#multi_az DmsReplicationInstance#multi_az}
    */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#publicly_accessible DmsReplicationInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#replication_instance_class DmsReplicationInstance#replication_instance_class}
    */
    readonly replicationInstanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#replication_instance_id DmsReplicationInstance#replication_instance_id}
    */
    readonly replicationInstanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}
    */
    readonly replicationSubnetGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#tags DmsReplicationInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#tags_all DmsReplicationInstance#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#timeouts DmsReplicationInstance#timeouts}
    */
    readonly timeouts?: DmsReplicationInstanceTimeouts;
  }
  export interface DmsReplicationInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#create DmsReplicationInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#delete DmsReplicationInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#update DmsReplicationInstance#update}
    */
    readonly update?: string;
  }

  function dmsReplicationInstanceTimeoutsToTerraform(struct?: DmsReplicationInstanceTimeoutsOutputReference | DmsReplicationInstanceTimeouts): any {
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

  export class DmsReplicationInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html aws_dms_replication_instance}
  */
  export class DmsReplicationInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dms_replication_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html aws_dms_replication_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: DmsReplicationInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dms_replication_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allocatedStorage = config.allocatedStorage;
      this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
      this._applyImmediately = config.applyImmediately;
      this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
      this._availabilityZone = config.availabilityZone;
      this._engineVersion = config.engineVersion;
      this._kmsKeyArn = config.kmsKeyArn;
      this._multiAz = config.multiAz;
      this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
      this._publiclyAccessible = config.publiclyAccessible;
      this._replicationInstanceClass = config.replicationInstanceClass;
      this._replicationInstanceId = config.replicationInstanceId;
      this._replicationSubnetGroupId = config.replicationSubnetGroupId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_storage - computed: true, optional: true, required: false
    private _allocatedStorage?: number | undefined; 
    public get allocatedStorage() {
      return this.getNumberAttribute('allocated_storage');
    }
    public set allocatedStorage(value: number | undefined) {
      this._allocatedStorage = value;
    }
    public resetAllocatedStorage() {
      this._allocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocatedStorageInput() {
      return this._allocatedStorage
    }

    // allow_major_version_upgrade - computed: false, optional: true, required: false
    private _allowMajorVersionUpgrade?: boolean | cdktf.IResolvable | undefined; 
    public get allowMajorVersionUpgrade() {
      return this.getBooleanAttribute('allow_major_version_upgrade') as any;
    }
    public set allowMajorVersionUpgrade(value: boolean | cdktf.IResolvable | undefined) {
      this._allowMajorVersionUpgrade = value;
    }
    public resetAllowMajorVersionUpgrade() {
      this._allowMajorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowMajorVersionUpgradeInput() {
      return this._allowMajorVersionUpgrade
    }

    // apply_immediately - computed: false, optional: true, required: false
    private _applyImmediately?: boolean | cdktf.IResolvable | undefined; 
    public get applyImmediately() {
      return this.getBooleanAttribute('apply_immediately') as any;
    }
    public set applyImmediately(value: boolean | cdktf.IResolvable | undefined) {
      this._applyImmediately = value;
    }
    public resetApplyImmediately() {
      this._applyImmediately = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyImmediatelyInput() {
      return this._applyImmediately
    }

    // auto_minor_version_upgrade - computed: true, optional: true, required: false
    private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable | undefined; 
    public get autoMinorVersionUpgrade() {
      return this.getBooleanAttribute('auto_minor_version_upgrade') as any;
    }
    public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable | undefined) {
      this._autoMinorVersionUpgrade = value;
    }
    public resetAutoMinorVersionUpgrade() {
      this._autoMinorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoMinorVersionUpgradeInput() {
      return this._autoMinorVersionUpgrade
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string | undefined; 
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string | undefined) {
      this._engineVersion = value;
    }
    public resetEngineVersion() {
      this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
      return this._engineVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: true, required: false
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

    // multi_az - computed: true, optional: true, required: false
    private _multiAz?: boolean | cdktf.IResolvable | undefined; 
    public get multiAz() {
      return this.getBooleanAttribute('multi_az') as any;
    }
    public set multiAz(value: boolean | cdktf.IResolvable | undefined) {
      this._multiAz = value;
    }
    public resetMultiAz() {
      this._multiAz = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAzInput() {
      return this._multiAz
    }

    // preferred_maintenance_window - computed: true, optional: true, required: false
    private _preferredMaintenanceWindow?: string | undefined; 
    public get preferredMaintenanceWindow() {
      return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string | undefined) {
      this._preferredMaintenanceWindow = value;
    }
    public resetPreferredMaintenanceWindow() {
      this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredMaintenanceWindowInput() {
      return this._preferredMaintenanceWindow
    }

    // publicly_accessible - computed: true, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktf.IResolvable | undefined; 
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
    }
    public set publiclyAccessible(value: boolean | cdktf.IResolvable | undefined) {
      this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
      this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
      return this._publiclyAccessible
    }

    // replication_instance_arn - computed: true, optional: false, required: false
    public get replicationInstanceArn() {
      return this.getStringAttribute('replication_instance_arn');
    }

    // replication_instance_class - computed: false, optional: false, required: true
    private _replicationInstanceClass?: string; 
    public get replicationInstanceClass() {
      return this.getStringAttribute('replication_instance_class');
    }
    public set replicationInstanceClass(value: string) {
      this._replicationInstanceClass = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationInstanceClassInput() {
      return this._replicationInstanceClass
    }

    // replication_instance_id - computed: false, optional: false, required: true
    private _replicationInstanceId?: string; 
    public get replicationInstanceId() {
      return this.getStringAttribute('replication_instance_id');
    }
    public set replicationInstanceId(value: string) {
      this._replicationInstanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationInstanceIdInput() {
      return this._replicationInstanceId
    }

    // replication_instance_private_ips - computed: true, optional: false, required: false
    public get replicationInstancePrivateIps() {
      return this.getListAttribute('replication_instance_private_ips');
    }

    // replication_instance_public_ips - computed: true, optional: false, required: false
    public get replicationInstancePublicIps() {
      return this.getListAttribute('replication_instance_public_ips');
    }

    // replication_subnet_group_id - computed: true, optional: true, required: false
    private _replicationSubnetGroupId?: string | undefined; 
    public get replicationSubnetGroupId() {
      return this.getStringAttribute('replication_subnet_group_id');
    }
    public set replicationSubnetGroupId(value: string | undefined) {
      this._replicationSubnetGroupId = value;
    }
    public resetReplicationSubnetGroupId() {
      this._replicationSubnetGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationSubnetGroupIdInput() {
      return this._replicationSubnetGroupId
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

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
      this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
      this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
      return this._vpcSecurityGroupIds
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DmsReplicationInstanceTimeouts | undefined; 
    private __timeoutsOutput = new DmsReplicationInstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DmsReplicationInstanceTimeouts | undefined) {
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
        allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
        allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
        apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
        auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
        multi_az: cdktf.booleanToTerraform(this._multiAz),
        preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
        publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
        replication_instance_class: cdktf.stringToTerraform(this._replicationInstanceClass),
        replication_instance_id: cdktf.stringToTerraform(this._replicationInstanceId),
        replication_subnet_group_id: cdktf.stringToTerraform(this._replicationSubnetGroupId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        timeouts: dmsReplicationInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DmsReplicationSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#replication_subnet_group_description DmsReplicationSubnetGroup#replication_subnet_group_description}
    */
    readonly replicationSubnetGroupDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#replication_subnet_group_id DmsReplicationSubnetGroup#replication_subnet_group_id}
    */
    readonly replicationSubnetGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#subnet_ids DmsReplicationSubnetGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#tags DmsReplicationSubnetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#tags_all DmsReplicationSubnetGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group}
  */
  export class DmsReplicationSubnetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dms_replication_subnet_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationSubnetGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DmsReplicationSubnetGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dms_replication_subnet_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._replicationSubnetGroupDescription = config.replicationSubnetGroupDescription;
      this._replicationSubnetGroupId = config.replicationSubnetGroupId;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // replication_subnet_group_arn - computed: true, optional: false, required: false
    public get replicationSubnetGroupArn() {
      return this.getStringAttribute('replication_subnet_group_arn');
    }

    // replication_subnet_group_description - computed: false, optional: false, required: true
    private _replicationSubnetGroupDescription?: string; 
    public get replicationSubnetGroupDescription() {
      return this.getStringAttribute('replication_subnet_group_description');
    }
    public set replicationSubnetGroupDescription(value: string) {
      this._replicationSubnetGroupDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationSubnetGroupDescriptionInput() {
      return this._replicationSubnetGroupDescription
    }

    // replication_subnet_group_id - computed: false, optional: false, required: true
    private _replicationSubnetGroupId?: string; 
    public get replicationSubnetGroupId() {
      return this.getStringAttribute('replication_subnet_group_id');
    }
    public set replicationSubnetGroupId(value: string) {
      this._replicationSubnetGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationSubnetGroupIdInput() {
      return this._replicationSubnetGroupId
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

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        replication_subnet_group_description: cdktf.stringToTerraform(this._replicationSubnetGroupDescription),
        replication_subnet_group_id: cdktf.stringToTerraform(this._replicationSubnetGroupId),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DmsReplicationTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#cdc_start_position DmsReplicationTask#cdc_start_position}
    */
    readonly cdcStartPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#cdc_start_time DmsReplicationTask#cdc_start_time}
    */
    readonly cdcStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#migration_type DmsReplicationTask#migration_type}
    */
    readonly migrationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#replication_instance_arn DmsReplicationTask#replication_instance_arn}
    */
    readonly replicationInstanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#replication_task_id DmsReplicationTask#replication_task_id}
    */
    readonly replicationTaskId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#replication_task_settings DmsReplicationTask#replication_task_settings}
    */
    readonly replicationTaskSettings?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}
    */
    readonly sourceEndpointArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#table_mappings DmsReplicationTask#table_mappings}
    */
    readonly tableMappings: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#tags DmsReplicationTask#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#tags_all DmsReplicationTask#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}
    */
    readonly targetEndpointArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html aws_dms_replication_task}
  */
  export class DmsReplicationTask extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dms_replication_task";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html aws_dms_replication_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationTaskConfig
    */
    public constructor(scope: Construct, id: string, config: DmsReplicationTaskConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dms_replication_task',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cdcStartPosition = config.cdcStartPosition;
      this._cdcStartTime = config.cdcStartTime;
      this._migrationType = config.migrationType;
      this._replicationInstanceArn = config.replicationInstanceArn;
      this._replicationTaskId = config.replicationTaskId;
      this._replicationTaskSettings = config.replicationTaskSettings;
      this._sourceEndpointArn = config.sourceEndpointArn;
      this._tableMappings = config.tableMappings;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetEndpointArn = config.targetEndpointArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cdc_start_position - computed: false, optional: true, required: false
    private _cdcStartPosition?: string | undefined; 
    public get cdcStartPosition() {
      return this.getStringAttribute('cdc_start_position');
    }
    public set cdcStartPosition(value: string | undefined) {
      this._cdcStartPosition = value;
    }
    public resetCdcStartPosition() {
      this._cdcStartPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcStartPositionInput() {
      return this._cdcStartPosition
    }

    // cdc_start_time - computed: false, optional: true, required: false
    private _cdcStartTime?: string | undefined; 
    public get cdcStartTime() {
      return this.getStringAttribute('cdc_start_time');
    }
    public set cdcStartTime(value: string | undefined) {
      this._cdcStartTime = value;
    }
    public resetCdcStartTime() {
      this._cdcStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcStartTimeInput() {
      return this._cdcStartTime
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // migration_type - computed: false, optional: false, required: true
    private _migrationType?: string; 
    public get migrationType() {
      return this.getStringAttribute('migration_type');
    }
    public set migrationType(value: string) {
      this._migrationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get migrationTypeInput() {
      return this._migrationType
    }

    // replication_instance_arn - computed: false, optional: false, required: true
    private _replicationInstanceArn?: string; 
    public get replicationInstanceArn() {
      return this.getStringAttribute('replication_instance_arn');
    }
    public set replicationInstanceArn(value: string) {
      this._replicationInstanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationInstanceArnInput() {
      return this._replicationInstanceArn
    }

    // replication_task_arn - computed: true, optional: false, required: false
    public get replicationTaskArn() {
      return this.getStringAttribute('replication_task_arn');
    }

    // replication_task_id - computed: false, optional: false, required: true
    private _replicationTaskId?: string; 
    public get replicationTaskId() {
      return this.getStringAttribute('replication_task_id');
    }
    public set replicationTaskId(value: string) {
      this._replicationTaskId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationTaskIdInput() {
      return this._replicationTaskId
    }

    // replication_task_settings - computed: false, optional: true, required: false
    private _replicationTaskSettings?: string | undefined; 
    public get replicationTaskSettings() {
      return this.getStringAttribute('replication_task_settings');
    }
    public set replicationTaskSettings(value: string | undefined) {
      this._replicationTaskSettings = value;
    }
    public resetReplicationTaskSettings() {
      this._replicationTaskSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationTaskSettingsInput() {
      return this._replicationTaskSettings
    }

    // source_endpoint_arn - computed: false, optional: false, required: true
    private _sourceEndpointArn?: string; 
    public get sourceEndpointArn() {
      return this.getStringAttribute('source_endpoint_arn');
    }
    public set sourceEndpointArn(value: string) {
      this._sourceEndpointArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEndpointArnInput() {
      return this._sourceEndpointArn
    }

    // table_mappings - computed: false, optional: false, required: true
    private _tableMappings?: string; 
    public get tableMappings() {
      return this.getStringAttribute('table_mappings');
    }
    public set tableMappings(value: string) {
      this._tableMappings = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableMappingsInput() {
      return this._tableMappings
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

    // target_endpoint_arn - computed: false, optional: false, required: true
    private _targetEndpointArn?: string; 
    public get targetEndpointArn() {
      return this.getStringAttribute('target_endpoint_arn');
    }
    public set targetEndpointArn(value: string) {
      this._targetEndpointArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetEndpointArnInput() {
      return this._targetEndpointArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cdc_start_position: cdktf.stringToTerraform(this._cdcStartPosition),
        cdc_start_time: cdktf.stringToTerraform(this._cdcStartTime),
        migration_type: cdktf.stringToTerraform(this._migrationType),
        replication_instance_arn: cdktf.stringToTerraform(this._replicationInstanceArn),
        replication_task_id: cdktf.stringToTerraform(this._replicationTaskId),
        replication_task_settings: cdktf.stringToTerraform(this._replicationTaskSettings),
        source_endpoint_arn: cdktf.stringToTerraform(this._sourceEndpointArn),
        table_mappings: cdktf.stringToTerraform(this._tableMappings),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_endpoint_arn: cdktf.stringToTerraform(this._targetEndpointArn),
      };
    }
  }
}
