// https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#tags_all DmsEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#username DmsEndpoint#username}
  */
  readonly username?: string;
  /**
  * elasticsearch_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#elasticsearch_settings DmsEndpoint#elasticsearch_settings}
  */
  readonly elasticsearchSettings?: DmsEndpointElasticsearchSettings[];
  /**
  * kafka_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kafka_settings DmsEndpoint#kafka_settings}
  */
  readonly kafkaSettings?: DmsEndpointKafkaSettings[];
  /**
  * kinesis_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kinesis_settings DmsEndpoint#kinesis_settings}
  */
  readonly kinesisSettings?: DmsEndpointKinesisSettings[];
  /**
  * mongodb_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#mongodb_settings DmsEndpoint#mongodb_settings}
  */
  readonly mongodbSettings?: DmsEndpointMongodbSettings[];
  /**
  * s3_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#s3_settings DmsEndpoint#s3_settings}
  */
  readonly s3Settings?: DmsEndpointS3Settings[];
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

function dmsEndpointElasticsearchSettingsToTerraform(struct?: DmsEndpointElasticsearchSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_uri: cdktf.stringToTerraform(struct!.endpointUri),
    error_retry_duration: cdktf.numberToTerraform(struct!.errorRetryDuration),
    full_load_error_percentage: cdktf.numberToTerraform(struct!.fullLoadErrorPercentage),
    service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
  }
}

export interface DmsEndpointKafkaSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#broker DmsEndpoint#broker}
  */
  readonly broker: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#topic DmsEndpoint#topic}
  */
  readonly topic?: string;
}

function dmsEndpointKafkaSettingsToTerraform(struct?: DmsEndpointKafkaSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    broker: cdktf.stringToTerraform(struct!.broker),
    topic: cdktf.stringToTerraform(struct!.topic),
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

function dmsEndpointKinesisSettingsToTerraform(struct?: DmsEndpointKinesisSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
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

function dmsEndpointMongodbSettingsToTerraform(struct?: DmsEndpointMongodbSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_mechanism: cdktf.stringToTerraform(struct!.authMechanism),
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    docs_to_investigate: cdktf.stringToTerraform(struct!.docsToInvestigate),
    extract_doc_id: cdktf.stringToTerraform(struct!.extractDocId),
    nesting_level: cdktf.stringToTerraform(struct!.nestingLevel),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#date_partition_enabled DmsEndpoint#date_partition_enabled}
  */
  readonly datePartitionEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#external_table_definition DmsEndpoint#external_table_definition}
  */
  readonly externalTableDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn?: string;
}

function dmsEndpointS3SettingsToTerraform(struct?: DmsEndpointS3Settings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_folder: cdktf.stringToTerraform(struct!.bucketFolder),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    csv_delimiter: cdktf.stringToTerraform(struct!.csvDelimiter),
    csv_row_delimiter: cdktf.stringToTerraform(struct!.csvRowDelimiter),
    date_partition_enabled: cdktf.booleanToTerraform(struct!.datePartitionEnabled),
    external_table_definition: cdktf.stringToTerraform(struct!.externalTableDefinition),
    service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint}
*/
export class DmsEndpoint extends cdktf.TerraformResource {

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
    return this._certificateArn
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string ) {
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
  private _endpointId: string;
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
  private _endpointType: string;
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
  private _engineName: string;
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
    return this._extraConnectionAttributes
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
    return this._kmsKeyArn
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string ) {
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
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
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
  private _serverName?: string;
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string ) {
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
  private _serviceAccessRole?: string;
  public get serviceAccessRole() {
    return this.getStringAttribute('service_access_role');
  }
  public set serviceAccessRole(value: string ) {
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
    return this._sslMode
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
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
  private _username?: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string ) {
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
  private _elasticsearchSettings?: DmsEndpointElasticsearchSettings[];
  public get elasticsearchSettings() {
    return this.interpolationForAttribute('elasticsearch_settings') as any;
  }
  public set elasticsearchSettings(value: DmsEndpointElasticsearchSettings[] ) {
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
  private _kafkaSettings?: DmsEndpointKafkaSettings[];
  public get kafkaSettings() {
    return this.interpolationForAttribute('kafka_settings') as any;
  }
  public set kafkaSettings(value: DmsEndpointKafkaSettings[] ) {
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
  private _kinesisSettings?: DmsEndpointKinesisSettings[];
  public get kinesisSettings() {
    return this.interpolationForAttribute('kinesis_settings') as any;
  }
  public set kinesisSettings(value: DmsEndpointKinesisSettings[] ) {
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
  private _mongodbSettings?: DmsEndpointMongodbSettings[];
  public get mongodbSettings() {
    return this.interpolationForAttribute('mongodb_settings') as any;
  }
  public set mongodbSettings(value: DmsEndpointMongodbSettings[] ) {
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
  private _s3Settings?: DmsEndpointS3Settings[];
  public get s3Settings() {
    return this.interpolationForAttribute('s3_settings') as any;
  }
  public set s3Settings(value: DmsEndpointS3Settings[] ) {
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
      elasticsearch_settings: cdktf.listMapper(dmsEndpointElasticsearchSettingsToTerraform)(this._elasticsearchSettings),
      kafka_settings: cdktf.listMapper(dmsEndpointKafkaSettingsToTerraform)(this._kafkaSettings),
      kinesis_settings: cdktf.listMapper(dmsEndpointKinesisSettingsToTerraform)(this._kinesisSettings),
      mongodb_settings: cdktf.listMapper(dmsEndpointMongodbSettingsToTerraform)(this._mongodbSettings),
      s3_settings: cdktf.listMapper(dmsEndpointS3SettingsToTerraform)(this._s3Settings),
    };
  }
}
