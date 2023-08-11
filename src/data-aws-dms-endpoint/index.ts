/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDmsEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#endpoint_id DataAwsDmsEndpoint#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#extra_connection_attributes DataAwsDmsEndpoint#extra_connection_attributes}
  */
  readonly extraConnectionAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#id DataAwsDmsEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#tags DataAwsDmsEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * elasticsearch_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#elasticsearch_settings DataAwsDmsEndpoint#elasticsearch_settings}
  */
  readonly elasticsearchSettings?: DataAwsDmsEndpointElasticsearchSettings[] | cdktf.IResolvable;
  /**
  * kafka_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#kafka_settings DataAwsDmsEndpoint#kafka_settings}
  */
  readonly kafkaSettings?: DataAwsDmsEndpointKafkaSettings[] | cdktf.IResolvable;
  /**
  * mongodb_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#mongodb_settings DataAwsDmsEndpoint#mongodb_settings}
  */
  readonly mongodbSettings?: DataAwsDmsEndpointMongodbSettings[] | cdktf.IResolvable;
}
export interface DataAwsDmsEndpointKinesisSettings {
}

export function dataAwsDmsEndpointKinesisSettingsToTerraform(struct?: DataAwsDmsEndpointKinesisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDmsEndpointKinesisSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDmsEndpointKinesisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointKinesisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_control_details - computed: true, optional: false, required: false
  public get includeControlDetails() {
    return this.getBooleanAttribute('include_control_details');
  }

  // include_null_and_empty - computed: true, optional: false, required: false
  public get includeNullAndEmpty() {
    return this.getBooleanAttribute('include_null_and_empty');
  }

  // include_partition_value - computed: true, optional: false, required: false
  public get includePartitionValue() {
    return this.getBooleanAttribute('include_partition_value');
  }

  // include_table_alter_operations - computed: true, optional: false, required: false
  public get includeTableAlterOperations() {
    return this.getBooleanAttribute('include_table_alter_operations');
  }

  // include_transaction_details - computed: true, optional: false, required: false
  public get includeTransactionDetails() {
    return this.getBooleanAttribute('include_transaction_details');
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // partition_include_schema_table - computed: true, optional: false, required: false
  public get partitionIncludeSchemaTable() {
    return this.getBooleanAttribute('partition_include_schema_table');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
}

export class DataAwsDmsEndpointKinesisSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDmsEndpointKinesisSettingsOutputReference {
    return new DataAwsDmsEndpointKinesisSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDmsEndpointRedisSettings {
}

export function dataAwsDmsEndpointRedisSettingsToTerraform(struct?: DataAwsDmsEndpointRedisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDmsEndpointRedisSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDmsEndpointRedisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointRedisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // auth_user_name - computed: true, optional: false, required: false
  public get authUserName() {
    return this.getStringAttribute('auth_user_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_ca_certificate_arn - computed: true, optional: false, required: false
  public get sslCaCertificateArn() {
    return this.getStringAttribute('ssl_ca_certificate_arn');
  }

  // ssl_security_protocol - computed: true, optional: false, required: false
  public get sslSecurityProtocol() {
    return this.getStringAttribute('ssl_security_protocol');
  }
}

export class DataAwsDmsEndpointRedisSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDmsEndpointRedisSettingsOutputReference {
    return new DataAwsDmsEndpointRedisSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDmsEndpointRedshiftSettings {
}

export function dataAwsDmsEndpointRedshiftSettingsToTerraform(struct?: DataAwsDmsEndpointRedshiftSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDmsEndpointRedshiftSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDmsEndpointRedshiftSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointRedshiftSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_folder - computed: true, optional: false, required: false
  public get bucketFolder() {
    return this.getStringAttribute('bucket_folder');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }

  // server_side_encryption_kms_key_id - computed: true, optional: false, required: false
  public get serverSideEncryptionKmsKeyId() {
    return this.getStringAttribute('server_side_encryption_kms_key_id');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
}

export class DataAwsDmsEndpointRedshiftSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDmsEndpointRedshiftSettingsOutputReference {
    return new DataAwsDmsEndpointRedshiftSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDmsEndpointS3Settings {
}

export function dataAwsDmsEndpointS3SettingsToTerraform(struct?: DataAwsDmsEndpointS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDmsEndpointS3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDmsEndpointS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_column_name - computed: true, optional: false, required: false
  public get addColumnName() {
    return this.getBooleanAttribute('add_column_name');
  }

  // bucket_folder - computed: true, optional: false, required: false
  public get bucketFolder() {
    return this.getStringAttribute('bucket_folder');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // canned_acl_for_objects - computed: true, optional: false, required: false
  public get cannedAclForObjects() {
    return this.getStringAttribute('canned_acl_for_objects');
  }

  // cdc_inserts_and_updates - computed: true, optional: false, required: false
  public get cdcInsertsAndUpdates() {
    return this.getBooleanAttribute('cdc_inserts_and_updates');
  }

  // cdc_inserts_only - computed: true, optional: false, required: false
  public get cdcInsertsOnly() {
    return this.getBooleanAttribute('cdc_inserts_only');
  }

  // cdc_max_batch_interval - computed: true, optional: false, required: false
  public get cdcMaxBatchInterval() {
    return this.getNumberAttribute('cdc_max_batch_interval');
  }

  // cdc_min_file_size - computed: true, optional: false, required: false
  public get cdcMinFileSize() {
    return this.getNumberAttribute('cdc_min_file_size');
  }

  // cdc_path - computed: true, optional: false, required: false
  public get cdcPath() {
    return this.getStringAttribute('cdc_path');
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // csv_delimiter - computed: true, optional: false, required: false
  public get csvDelimiter() {
    return this.getStringAttribute('csv_delimiter');
  }

  // csv_no_sup_value - computed: true, optional: false, required: false
  public get csvNoSupValue() {
    return this.getStringAttribute('csv_no_sup_value');
  }

  // csv_null_value - computed: true, optional: false, required: false
  public get csvNullValue() {
    return this.getStringAttribute('csv_null_value');
  }

  // csv_row_delimiter - computed: true, optional: false, required: false
  public get csvRowDelimiter() {
    return this.getStringAttribute('csv_row_delimiter');
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // data_page_size - computed: true, optional: false, required: false
  public get dataPageSize() {
    return this.getNumberAttribute('data_page_size');
  }

  // date_partition_delimiter - computed: true, optional: false, required: false
  public get datePartitionDelimiter() {
    return this.getStringAttribute('date_partition_delimiter');
  }

  // date_partition_enabled - computed: true, optional: false, required: false
  public get datePartitionEnabled() {
    return this.getBooleanAttribute('date_partition_enabled');
  }

  // date_partition_sequence - computed: true, optional: false, required: false
  public get datePartitionSequence() {
    return this.getStringAttribute('date_partition_sequence');
  }

  // dict_page_size_limit - computed: true, optional: false, required: false
  public get dictPageSizeLimit() {
    return this.getNumberAttribute('dict_page_size_limit');
  }

  // enable_statistics - computed: true, optional: false, required: false
  public get enableStatistics() {
    return this.getBooleanAttribute('enable_statistics');
  }

  // encoding_type - computed: true, optional: false, required: false
  public get encodingType() {
    return this.getStringAttribute('encoding_type');
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }

  // external_table_definition - computed: true, optional: false, required: false
  public get externalTableDefinition() {
    return this.getStringAttribute('external_table_definition');
  }

  // ignore_header_rows - computed: true, optional: false, required: false
  public get ignoreHeaderRows() {
    return this.getNumberAttribute('ignore_header_rows');
  }

  // ignore_headers_row - computed: true, optional: false, required: false
  public get ignoreHeadersRow() {
    return this.getNumberAttribute('ignore_headers_row');
  }

  // include_op_for_full_load - computed: true, optional: false, required: false
  public get includeOpForFullLoad() {
    return this.getBooleanAttribute('include_op_for_full_load');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // parquet_timestamp_in_millisecond - computed: true, optional: false, required: false
  public get parquetTimestampInMillisecond() {
    return this.getBooleanAttribute('parquet_timestamp_in_millisecond');
  }

  // parquet_version - computed: true, optional: false, required: false
  public get parquetVersion() {
    return this.getStringAttribute('parquet_version');
  }

  // preserve_transactions - computed: true, optional: false, required: false
  public get preserveTransactions() {
    return this.getBooleanAttribute('preserve_transactions');
  }

  // rfc_4180 - computed: true, optional: false, required: false
  public get rfc4180() {
    return this.getBooleanAttribute('rfc_4180');
  }

  // row_group_length - computed: true, optional: false, required: false
  public get rowGroupLength() {
    return this.getNumberAttribute('row_group_length');
  }

  // server_side_encryption_kms_key_id - computed: true, optional: false, required: false
  public get serverSideEncryptionKmsKeyId() {
    return this.getStringAttribute('server_side_encryption_kms_key_id');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }

  // timestamp_column_name - computed: true, optional: false, required: false
  public get timestampColumnName() {
    return this.getStringAttribute('timestamp_column_name');
  }

  // use_csv_no_sup_value - computed: true, optional: false, required: false
  public get useCsvNoSupValue() {
    return this.getBooleanAttribute('use_csv_no_sup_value');
  }

  // use_task_start_time_for_full_load_timestamp - computed: true, optional: false, required: false
  public get useTaskStartTimeForFullLoadTimestamp() {
    return this.getBooleanAttribute('use_task_start_time_for_full_load_timestamp');
  }
}

export class DataAwsDmsEndpointS3SettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDmsEndpointS3SettingsOutputReference {
    return new DataAwsDmsEndpointS3SettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDmsEndpointElasticsearchSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#endpoint_uri DataAwsDmsEndpoint#endpoint_uri}
  */
  readonly endpointUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#service_access_role_arn DataAwsDmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn: string;
}

export function dataAwsDmsEndpointElasticsearchSettingsToTerraform(struct?: DataAwsDmsEndpointElasticsearchSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_uri: cdktf.stringToTerraform(struct!.endpointUri),
    service_access_role_arn: cdktf.stringToTerraform(struct!.serviceAccessRoleArn),
  }
}

export class DataAwsDmsEndpointElasticsearchSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDmsEndpointElasticsearchSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUri = this._endpointUri;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointElasticsearchSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointUri = undefined;
      this._serviceAccessRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointUri = value.endpointUri;
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

  // error_retry_duration - computed: true, optional: false, required: false
  public get errorRetryDuration() {
    return this.getNumberAttribute('error_retry_duration');
  }

  // full_load_error_percentage - computed: true, optional: false, required: false
  public get fullLoadErrorPercentage() {
    return this.getNumberAttribute('full_load_error_percentage');
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

export class DataAwsDmsEndpointElasticsearchSettingsList extends cdktf.ComplexList {
  public internalValue? : DataAwsDmsEndpointElasticsearchSettings[] | cdktf.IResolvable

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
  public get(index: number): DataAwsDmsEndpointElasticsearchSettingsOutputReference {
    return new DataAwsDmsEndpointElasticsearchSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDmsEndpointKafkaSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint#broker DataAwsDmsEndpoint#broker}
  */
  readonly broker: string;
}

export function dataAwsDmsEndpointKafkaSettingsToTerraform(struct?: DataAwsDmsEndpointKafkaSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker: cdktf.stringToTerraform(struct!.broker),
  }
}

export class DataAwsDmsEndpointKafkaSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDmsEndpointKafkaSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broker !== undefined) {
      hasAnyValues = true;
      internalValueResult.broker = this._broker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointKafkaSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broker = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broker = value.broker;
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

  // include_control_details - computed: true, optional: false, required: false
  public get includeControlDetails() {
    return this.getBooleanAttribute('include_control_details');
  }

  // include_null_and_empty - computed: true, optional: false, required: false
  public get includeNullAndEmpty() {
    return this.getBooleanAttribute('include_null_and_empty');
  }

  // include_partition_value - computed: true, optional: false, required: false
  public get includePartitionValue() {
    return this.getBooleanAttribute('include_partition_value');
  }

  // include_table_alter_operations - computed: true, optional: false, required: false
  public get includeTableAlterOperations() {
    return this.getBooleanAttribute('include_table_alter_operations');
  }

  // include_transaction_details - computed: true, optional: false, required: false
  public get includeTransactionDetails() {
    return this.getBooleanAttribute('include_transaction_details');
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // message_max_bytes - computed: true, optional: false, required: false
  public get messageMaxBytes() {
    return this.getNumberAttribute('message_max_bytes');
  }

  // no_hex_prefix - computed: true, optional: false, required: false
  public get noHexPrefix() {
    return this.getBooleanAttribute('no_hex_prefix');
  }

  // partition_include_schema_table - computed: true, optional: false, required: false
  public get partitionIncludeSchemaTable() {
    return this.getBooleanAttribute('partition_include_schema_table');
  }

  // sasl_password - computed: true, optional: false, required: false
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }

  // sasl_username - computed: true, optional: false, required: false
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }

  // security_protocol - computed: true, optional: false, required: false
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }

  // ssl_ca_certificate_arn - computed: true, optional: false, required: false
  public get sslCaCertificateArn() {
    return this.getStringAttribute('ssl_ca_certificate_arn');
  }

  // ssl_client_certificate_arn - computed: true, optional: false, required: false
  public get sslClientCertificateArn() {
    return this.getStringAttribute('ssl_client_certificate_arn');
  }

  // ssl_client_key_arn - computed: true, optional: false, required: false
  public get sslClientKeyArn() {
    return this.getStringAttribute('ssl_client_key_arn');
  }

  // ssl_client_key_password - computed: true, optional: false, required: false
  public get sslClientKeyPassword() {
    return this.getStringAttribute('ssl_client_key_password');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export class DataAwsDmsEndpointKafkaSettingsList extends cdktf.ComplexList {
  public internalValue? : DataAwsDmsEndpointKafkaSettings[] | cdktf.IResolvable

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
  public get(index: number): DataAwsDmsEndpointKafkaSettingsOutputReference {
    return new DataAwsDmsEndpointKafkaSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDmsEndpointMongodbSettings {
}

export function dataAwsDmsEndpointMongodbSettingsToTerraform(struct?: DataAwsDmsEndpointMongodbSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDmsEndpointMongodbSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDmsEndpointMongodbSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointMongodbSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // auth_mechanism - computed: true, optional: false, required: false
  public get authMechanism() {
    return this.getStringAttribute('auth_mechanism');
  }

  // auth_source - computed: true, optional: false, required: false
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // docs_to_investigate - computed: true, optional: false, required: false
  public get docsToInvestigate() {
    return this.getStringAttribute('docs_to_investigate');
  }

  // extract_doc_id - computed: true, optional: false, required: false
  public get extractDocId() {
    return this.getStringAttribute('extract_doc_id');
  }

  // nesting_level - computed: true, optional: false, required: false
  public get nestingLevel() {
    return this.getStringAttribute('nesting_level');
  }
}

export class DataAwsDmsEndpointMongodbSettingsList extends cdktf.ComplexList {
  public internalValue? : DataAwsDmsEndpointMongodbSettings[] | cdktf.IResolvable

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
  public get(index: number): DataAwsDmsEndpointMongodbSettingsOutputReference {
    return new DataAwsDmsEndpointMongodbSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint aws_dms_endpoint}
*/
export class DataAwsDmsEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/dms_endpoint aws_dms_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDmsEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDmsEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.12.0',
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
    this._endpointId = config.endpointId;
    this._extraConnectionAttributes = config.extraConnectionAttributes;
    this._id = config.id;
    this._tags = config.tags;
    this._elasticsearchSettings.internalValue = config.elasticsearchSettings;
    this._kafkaSettings.internalValue = config.kafkaSettings;
    this._mongodbSettings.internalValue = config.mongodbSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
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

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // engine_name - computed: true, optional: false, required: false
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }

  // extra_connection_attributes - computed: false, optional: true, required: false
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

  // kinesis_settings - computed: true, optional: false, required: false
  private _kinesisSettings = new DataAwsDmsEndpointKinesisSettingsList(this, "kinesis_settings", false);
  public get kinesisSettings() {
    return this._kinesisSettings;
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // redis_settings - computed: true, optional: false, required: false
  private _redisSettings = new DataAwsDmsEndpointRedisSettingsList(this, "redis_settings", false);
  public get redisSettings() {
    return this._redisSettings;
  }

  // redshift_settings - computed: true, optional: false, required: false
  private _redshiftSettings = new DataAwsDmsEndpointRedshiftSettingsList(this, "redshift_settings", false);
  public get redshiftSettings() {
    return this._redshiftSettings;
  }

  // s3_settings - computed: true, optional: false, required: false
  private _s3Settings = new DataAwsDmsEndpointS3SettingsList(this, "s3_settings", false);
  public get s3Settings() {
    return this._s3Settings;
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_arn - computed: true, optional: false, required: false
  public get secretsManagerArn() {
    return this.getStringAttribute('secrets_manager_arn');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // service_access_role - computed: true, optional: false, required: false
  public get serviceAccessRole() {
    return this.getStringAttribute('service_access_role');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }

  // tags - computed: true, optional: true, required: false
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

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // elasticsearch_settings - computed: false, optional: true, required: false
  private _elasticsearchSettings = new DataAwsDmsEndpointElasticsearchSettingsList(this, "elasticsearch_settings", false);
  public get elasticsearchSettings() {
    return this._elasticsearchSettings;
  }
  public putElasticsearchSettings(value: DataAwsDmsEndpointElasticsearchSettings[] | cdktf.IResolvable) {
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
  private _kafkaSettings = new DataAwsDmsEndpointKafkaSettingsList(this, "kafka_settings", false);
  public get kafkaSettings() {
    return this._kafkaSettings;
  }
  public putKafkaSettings(value: DataAwsDmsEndpointKafkaSettings[] | cdktf.IResolvable) {
    this._kafkaSettings.internalValue = value;
  }
  public resetKafkaSettings() {
    this._kafkaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSettingsInput() {
    return this._kafkaSettings.internalValue;
  }

  // mongodb_settings - computed: false, optional: true, required: false
  private _mongodbSettings = new DataAwsDmsEndpointMongodbSettingsList(this, "mongodb_settings", false);
  public get mongodbSettings() {
    return this._mongodbSettings;
  }
  public putMongodbSettings(value: DataAwsDmsEndpointMongodbSettings[] | cdktf.IResolvable) {
    this._mongodbSettings.internalValue = value;
  }
  public resetMongodbSettings() {
    this._mongodbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbSettingsInput() {
    return this._mongodbSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
      extra_connection_attributes: cdktf.stringToTerraform(this._extraConnectionAttributes),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      elasticsearch_settings: cdktf.listMapper(dataAwsDmsEndpointElasticsearchSettingsToTerraform, true)(this._elasticsearchSettings.internalValue),
      kafka_settings: cdktf.listMapper(dataAwsDmsEndpointKafkaSettingsToTerraform, true)(this._kafkaSettings.internalValue),
      mongodb_settings: cdktf.listMapper(dataAwsDmsEndpointMongodbSettingsToTerraform, true)(this._mongodbSettings.internalValue),
    };
  }
}
