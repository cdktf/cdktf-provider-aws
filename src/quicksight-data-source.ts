// https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aws_account_id QuicksightDataSource#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#data_source_id QuicksightDataSource#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#name QuicksightDataSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#tags QuicksightDataSource#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#tags_all QuicksightDataSource#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#type QuicksightDataSource#type}
  */
  readonly type: string;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#credentials QuicksightDataSource#credentials}
  */
  readonly credentials?: QuicksightDataSourceCredentials[];
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#parameters QuicksightDataSource#parameters}
  */
  readonly parameters: QuicksightDataSourceParameters[];
  /**
  * permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#permission QuicksightDataSource#permission}
  */
  readonly permission?: QuicksightDataSourcePermission[];
  /**
  * ssl_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#ssl_properties QuicksightDataSource#ssl_properties}
  */
  readonly sslProperties?: QuicksightDataSourceSslProperties[];
  /**
  * vpc_connection_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}
  */
  readonly vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties[];
}
export interface QuicksightDataSourceCredentialsCredentialPair {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#password QuicksightDataSource#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#username QuicksightDataSource#username}
  */
  readonly username: string;
}

function quicksightDataSourceCredentialsCredentialPairToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPair): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface QuicksightDataSourceCredentials {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#copy_source_arn QuicksightDataSource#copy_source_arn}
  */
  readonly copySourceArn?: string;
  /**
  * credential_pair block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#credential_pair QuicksightDataSource#credential_pair}
  */
  readonly credentialPair?: QuicksightDataSourceCredentialsCredentialPair[];
}

function quicksightDataSourceCredentialsToTerraform(struct?: QuicksightDataSourceCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    copy_source_arn: cdktf.stringToTerraform(struct!.copySourceArn),
    credential_pair: cdktf.listMapper(quicksightDataSourceCredentialsCredentialPairToTerraform)(struct!.credentialPair),
  }
}

export interface QuicksightDataSourceParametersAmazonElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#domain QuicksightDataSource#domain}
  */
  readonly domain: string;
}

function quicksightDataSourceParametersAmazonElasticsearchToTerraform(struct?: QuicksightDataSourceParametersAmazonElasticsearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export interface QuicksightDataSourceParametersAthena {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#work_group QuicksightDataSource#work_group}
  */
  readonly workGroup?: string;
}

function quicksightDataSourceParametersAthenaToTerraform(struct?: QuicksightDataSourceParametersAthena): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}

export interface QuicksightDataSourceParametersAurora {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersAuroraToTerraform(struct?: QuicksightDataSourceParametersAurora): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersAuroraPostgresql {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersAuroraPostgresqlToTerraform(struct?: QuicksightDataSourceParametersAuroraPostgresql): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersAwsIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#data_set_name QuicksightDataSource#data_set_name}
  */
  readonly dataSetName: string;
}

function quicksightDataSourceParametersAwsIotAnalyticsToTerraform(struct?: QuicksightDataSourceParametersAwsIotAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_set_name: cdktf.stringToTerraform(struct!.dataSetName),
  }
}

export interface QuicksightDataSourceParametersJira {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#site_base_url QuicksightDataSource#site_base_url}
  */
  readonly siteBaseUrl: string;
}

function quicksightDataSourceParametersJiraToTerraform(struct?: QuicksightDataSourceParametersJira): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    site_base_url: cdktf.stringToTerraform(struct!.siteBaseUrl),
  }
}

export interface QuicksightDataSourceParametersMariaDb {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersMariaDbToTerraform(struct?: QuicksightDataSourceParametersMariaDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersMysql {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersMysqlToTerraform(struct?: QuicksightDataSourceParametersMysql): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersOracle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersOracleToTerraform(struct?: QuicksightDataSourceParametersOracle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersPostgresql {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersPostgresqlToTerraform(struct?: QuicksightDataSourceParametersPostgresql): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersPresto {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#catalog QuicksightDataSource#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersPrestoToTerraform(struct?: QuicksightDataSourceParametersPresto): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersRds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#instance_id QuicksightDataSource#instance_id}
  */
  readonly instanceId: string;
}

function quicksightDataSourceParametersRdsToTerraform(struct?: QuicksightDataSourceParametersRds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}

export interface QuicksightDataSourceParametersRedshift {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#cluster_id QuicksightDataSource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

function quicksightDataSourceParametersRedshiftToTerraform(struct?: QuicksightDataSourceParametersRedshift): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersS3ManifestFileLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#bucket QuicksightDataSource#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#key QuicksightDataSource#key}
  */
  readonly key: string;
}

function quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct?: QuicksightDataSourceParametersS3ManifestFileLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface QuicksightDataSourceParametersS3 {
  /**
  * manifest_file_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#manifest_file_location QuicksightDataSource#manifest_file_location}
  */
  readonly manifestFileLocation: QuicksightDataSourceParametersS3ManifestFileLocation[];
}

function quicksightDataSourceParametersS3ToTerraform(struct?: QuicksightDataSourceParametersS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_file_location: cdktf.listMapper(quicksightDataSourceParametersS3ManifestFileLocationToTerraform)(struct!.manifestFileLocation),
  }
}

export interface QuicksightDataSourceParametersServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#site_base_url QuicksightDataSource#site_base_url}
  */
  readonly siteBaseUrl: string;
}

function quicksightDataSourceParametersServiceNowToTerraform(struct?: QuicksightDataSourceParametersServiceNow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    site_base_url: cdktf.stringToTerraform(struct!.siteBaseUrl),
  }
}

export interface QuicksightDataSourceParametersSnowflake {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#warehouse QuicksightDataSource#warehouse}
  */
  readonly warehouse: string;
}

function quicksightDataSourceParametersSnowflakeToTerraform(struct?: QuicksightDataSourceParametersSnowflake): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

export interface QuicksightDataSourceParametersSpark {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersSparkToTerraform(struct?: QuicksightDataSourceParametersSpark): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersSqlServer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersSqlServerToTerraform(struct?: QuicksightDataSourceParametersSqlServer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersTeradata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
  */
  readonly port: number;
}

function quicksightDataSourceParametersTeradataToTerraform(struct?: QuicksightDataSourceParametersTeradata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface QuicksightDataSourceParametersTwitter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#max_rows QuicksightDataSource#max_rows}
  */
  readonly maxRows: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#query QuicksightDataSource#query}
  */
  readonly query: string;
}

function quicksightDataSourceParametersTwitterToTerraform(struct?: QuicksightDataSourceParametersTwitter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_rows: cdktf.numberToTerraform(struct!.maxRows),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface QuicksightDataSourceParameters {
  /**
  * amazon_elasticsearch block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}
  */
  readonly amazonElasticsearch?: QuicksightDataSourceParametersAmazonElasticsearch[];
  /**
  * athena block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#athena QuicksightDataSource#athena}
  */
  readonly athena?: QuicksightDataSourceParametersAthena[];
  /**
  * aurora block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aurora QuicksightDataSource#aurora}
  */
  readonly aurora?: QuicksightDataSourceParametersAurora[];
  /**
  * aurora_postgresql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aurora_postgresql QuicksightDataSource#aurora_postgresql}
  */
  readonly auroraPostgresql?: QuicksightDataSourceParametersAuroraPostgresql[];
  /**
  * aws_iot_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}
  */
  readonly awsIotAnalytics?: QuicksightDataSourceParametersAwsIotAnalytics[];
  /**
  * jira block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#jira QuicksightDataSource#jira}
  */
  readonly jira?: QuicksightDataSourceParametersJira[];
  /**
  * maria_db block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#maria_db QuicksightDataSource#maria_db}
  */
  readonly mariaDb?: QuicksightDataSourceParametersMariaDb[];
  /**
  * mysql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#mysql QuicksightDataSource#mysql}
  */
  readonly mysql?: QuicksightDataSourceParametersMysql[];
  /**
  * oracle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#oracle QuicksightDataSource#oracle}
  */
  readonly oracle?: QuicksightDataSourceParametersOracle[];
  /**
  * postgresql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#postgresql QuicksightDataSource#postgresql}
  */
  readonly postgresql?: QuicksightDataSourceParametersPostgresql[];
  /**
  * presto block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#presto QuicksightDataSource#presto}
  */
  readonly presto?: QuicksightDataSourceParametersPresto[];
  /**
  * rds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#rds QuicksightDataSource#rds}
  */
  readonly rds?: QuicksightDataSourceParametersRds[];
  /**
  * redshift block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#redshift QuicksightDataSource#redshift}
  */
  readonly redshift?: QuicksightDataSourceParametersRedshift[];
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#s3 QuicksightDataSource#s3}
  */
  readonly s3?: QuicksightDataSourceParametersS3[];
  /**
  * service_now block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#service_now QuicksightDataSource#service_now}
  */
  readonly serviceNow?: QuicksightDataSourceParametersServiceNow[];
  /**
  * snowflake block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#snowflake QuicksightDataSource#snowflake}
  */
  readonly snowflake?: QuicksightDataSourceParametersSnowflake[];
  /**
  * spark block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#spark QuicksightDataSource#spark}
  */
  readonly spark?: QuicksightDataSourceParametersSpark[];
  /**
  * sql_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#sql_server QuicksightDataSource#sql_server}
  */
  readonly sqlServer?: QuicksightDataSourceParametersSqlServer[];
  /**
  * teradata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#teradata QuicksightDataSource#teradata}
  */
  readonly teradata?: QuicksightDataSourceParametersTeradata[];
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#twitter QuicksightDataSource#twitter}
  */
  readonly twitter?: QuicksightDataSourceParametersTwitter[];
}

function quicksightDataSourceParametersToTerraform(struct?: QuicksightDataSourceParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amazon_elasticsearch: cdktf.listMapper(quicksightDataSourceParametersAmazonElasticsearchToTerraform)(struct!.amazonElasticsearch),
    athena: cdktf.listMapper(quicksightDataSourceParametersAthenaToTerraform)(struct!.athena),
    aurora: cdktf.listMapper(quicksightDataSourceParametersAuroraToTerraform)(struct!.aurora),
    aurora_postgresql: cdktf.listMapper(quicksightDataSourceParametersAuroraPostgresqlToTerraform)(struct!.auroraPostgresql),
    aws_iot_analytics: cdktf.listMapper(quicksightDataSourceParametersAwsIotAnalyticsToTerraform)(struct!.awsIotAnalytics),
    jira: cdktf.listMapper(quicksightDataSourceParametersJiraToTerraform)(struct!.jira),
    maria_db: cdktf.listMapper(quicksightDataSourceParametersMariaDbToTerraform)(struct!.mariaDb),
    mysql: cdktf.listMapper(quicksightDataSourceParametersMysqlToTerraform)(struct!.mysql),
    oracle: cdktf.listMapper(quicksightDataSourceParametersOracleToTerraform)(struct!.oracle),
    postgresql: cdktf.listMapper(quicksightDataSourceParametersPostgresqlToTerraform)(struct!.postgresql),
    presto: cdktf.listMapper(quicksightDataSourceParametersPrestoToTerraform)(struct!.presto),
    rds: cdktf.listMapper(quicksightDataSourceParametersRdsToTerraform)(struct!.rds),
    redshift: cdktf.listMapper(quicksightDataSourceParametersRedshiftToTerraform)(struct!.redshift),
    s3: cdktf.listMapper(quicksightDataSourceParametersS3ToTerraform)(struct!.s3),
    service_now: cdktf.listMapper(quicksightDataSourceParametersServiceNowToTerraform)(struct!.serviceNow),
    snowflake: cdktf.listMapper(quicksightDataSourceParametersSnowflakeToTerraform)(struct!.snowflake),
    spark: cdktf.listMapper(quicksightDataSourceParametersSparkToTerraform)(struct!.spark),
    sql_server: cdktf.listMapper(quicksightDataSourceParametersSqlServerToTerraform)(struct!.sqlServer),
    teradata: cdktf.listMapper(quicksightDataSourceParametersTeradataToTerraform)(struct!.teradata),
    twitter: cdktf.listMapper(quicksightDataSourceParametersTwitterToTerraform)(struct!.twitter),
  }
}

export interface QuicksightDataSourcePermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#actions QuicksightDataSource#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#principal QuicksightDataSource#principal}
  */
  readonly principal: string;
}

function quicksightDataSourcePermissionToTerraform(struct?: QuicksightDataSourcePermission): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export interface QuicksightDataSourceSslProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#disable_ssl QuicksightDataSource#disable_ssl}
  */
  readonly disableSsl: boolean | cdktf.IResolvable;
}

function quicksightDataSourceSslPropertiesToTerraform(struct?: QuicksightDataSourceSslProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_ssl: cdktf.booleanToTerraform(struct!.disableSsl),
  }
}

export interface QuicksightDataSourceVpcConnectionProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn: string;
}

function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceVpcConnectionProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_connection_arn: cdktf.stringToTerraform(struct!.vpcConnectionArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source}
*/
export class QuicksightDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_quicksight_data_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_data_source',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsAccountId = config.awsAccountId;
    this._dataSourceId = config.dataSourceId;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._credentials = config.credentials;
    this._parameters = config.parameters;
    this._permission = config.permission;
    this._sslProperties = config.sslProperties;
    this._vpcConnectionProperties = config.vpcConnectionProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string;
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId: string;
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: QuicksightDataSourceCredentials[];
  public get credentials() {
    return this.interpolationForAttribute('credentials') as any;
  }
  public set credentials(value: QuicksightDataSourceCredentials[] ) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters: QuicksightDataSourceParameters[];
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: QuicksightDataSourceParameters[]) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: QuicksightDataSourcePermission[];
  public get permission() {
    return this.interpolationForAttribute('permission') as any;
  }
  public set permission(value: QuicksightDataSourcePermission[] ) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission
  }

  // ssl_properties - computed: false, optional: true, required: false
  private _sslProperties?: QuicksightDataSourceSslProperties[];
  public get sslProperties() {
    return this.interpolationForAttribute('ssl_properties') as any;
  }
  public set sslProperties(value: QuicksightDataSourceSslProperties[] ) {
    this._sslProperties = value;
  }
  public resetSslProperties() {
    this._sslProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPropertiesInput() {
    return this._sslProperties
  }

  // vpc_connection_properties - computed: false, optional: true, required: false
  private _vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties[];
  public get vpcConnectionProperties() {
    return this.interpolationForAttribute('vpc_connection_properties') as any;
  }
  public set vpcConnectionProperties(value: QuicksightDataSourceVpcConnectionProperties[] ) {
    this._vpcConnectionProperties = value;
  }
  public resetVpcConnectionProperties() {
    this._vpcConnectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionPropertiesInput() {
    return this._vpcConnectionProperties
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      credentials: cdktf.listMapper(quicksightDataSourceCredentialsToTerraform)(this._credentials),
      parameters: cdktf.listMapper(quicksightDataSourceParametersToTerraform)(this._parameters),
      permission: cdktf.listMapper(quicksightDataSourcePermissionToTerraform)(this._permission),
      ssl_properties: cdktf.listMapper(quicksightDataSourceSslPropertiesToTerraform)(this._sslProperties),
      vpc_connection_properties: cdktf.listMapper(quicksightDataSourceVpcConnectionPropertiesToTerraform)(this._vpcConnectionProperties),
    };
  }
}
