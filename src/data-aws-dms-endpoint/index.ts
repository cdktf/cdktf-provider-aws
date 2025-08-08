/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/dms_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDmsEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/dms_endpoint#endpoint_id DataAwsDmsEndpoint#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/dms_endpoint#id DataAwsDmsEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/dms_endpoint#region DataAwsDmsEndpoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/dms_endpoint#tags DataAwsDmsEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAwsDmsEndpointElasticsearchSettings {
}

export function dataAwsDmsEndpointElasticsearchSettingsToTerraform(struct?: DataAwsDmsEndpointElasticsearchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsDmsEndpointElasticsearchSettingsToHclTerraform(struct?: DataAwsDmsEndpointElasticsearchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDmsEndpointElasticsearchSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDmsEndpointElasticsearchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointElasticsearchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_uri - computed: true, optional: false, required: false
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }

  // error_retry_duration - computed: true, optional: false, required: false
  public get errorRetryDuration() {
    return this.getNumberAttribute('error_retry_duration');
  }

  // full_load_error_percentage - computed: true, optional: false, required: false
  public get fullLoadErrorPercentage() {
    return this.getNumberAttribute('full_load_error_percentage');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
}

export class DataAwsDmsEndpointElasticsearchSettingsList extends cdktf.ComplexList {

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
}

export function dataAwsDmsEndpointKafkaSettingsToTerraform(struct?: DataAwsDmsEndpointKafkaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsDmsEndpointKafkaSettingsToHclTerraform(struct?: DataAwsDmsEndpointKafkaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDmsEndpointKafkaSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDmsEndpointKafkaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointKafkaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broker - computed: true, optional: false, required: false
  public get broker() {
    return this.getStringAttribute('broker');
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

  // sasl_mechanism - computed: true, optional: false, required: false
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
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


export function dataAwsDmsEndpointKinesisSettingsToHclTerraform(struct?: DataAwsDmsEndpointKinesisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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

  // use_large_integer_value - computed: true, optional: false, required: false
  public get useLargeIntegerValue() {
    return this.getBooleanAttribute('use_large_integer_value');
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
export interface DataAwsDmsEndpointMongodbSettings {
}

export function dataAwsDmsEndpointMongodbSettingsToTerraform(struct?: DataAwsDmsEndpointMongodbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsDmsEndpointMongodbSettingsToHclTerraform(struct?: DataAwsDmsEndpointMongodbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDmsEndpointMongodbSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDmsEndpointMongodbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointMongodbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DataAwsDmsEndpointPostgresSettings {
}

export function dataAwsDmsEndpointPostgresSettingsToTerraform(struct?: DataAwsDmsEndpointPostgresSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsDmsEndpointPostgresSettingsToHclTerraform(struct?: DataAwsDmsEndpointPostgresSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDmsEndpointPostgresSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsDmsEndpointPostgresSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDmsEndpointPostgresSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_connect_script - computed: true, optional: false, required: false
  public get afterConnectScript() {
    return this.getStringAttribute('after_connect_script');
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // babelfish_database_name - computed: true, optional: false, required: false
  public get babelfishDatabaseName() {
    return this.getStringAttribute('babelfish_database_name');
  }

  // capture_ddls - computed: true, optional: false, required: false
  public get captureDdls() {
    return this.getBooleanAttribute('capture_ddls');
  }

  // database_mode - computed: true, optional: false, required: false
  public get databaseMode() {
    return this.getStringAttribute('database_mode');
  }

  // ddl_artifacts_schema - computed: true, optional: false, required: false
  public get ddlArtifactsSchema() {
    return this.getStringAttribute('ddl_artifacts_schema');
  }

  // execute_timeout - computed: true, optional: false, required: false
  public get executeTimeout() {
    return this.getNumberAttribute('execute_timeout');
  }

  // fail_tasks_on_lob_truncation - computed: true, optional: false, required: false
  public get failTasksOnLobTruncation() {
    return this.getBooleanAttribute('fail_tasks_on_lob_truncation');
  }

  // heartbeat_enable - computed: true, optional: false, required: false
  public get heartbeatEnable() {
    return this.getBooleanAttribute('heartbeat_enable');
  }

  // heartbeat_frequency - computed: true, optional: false, required: false
  public get heartbeatFrequency() {
    return this.getNumberAttribute('heartbeat_frequency');
  }

  // heartbeat_schema - computed: true, optional: false, required: false
  public get heartbeatSchema() {
    return this.getStringAttribute('heartbeat_schema');
  }

  // map_boolean_as_boolean - computed: true, optional: false, required: false
  public get mapBooleanAsBoolean() {
    return this.getBooleanAttribute('map_boolean_as_boolean');
  }

  // map_jsonb_as_clob - computed: true, optional: false, required: false
  public get mapJsonbAsClob() {
    return this.getBooleanAttribute('map_jsonb_as_clob');
  }

  // map_long_varchar_as - computed: true, optional: false, required: false
  public get mapLongVarcharAs() {
    return this.getStringAttribute('map_long_varchar_as');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // plugin_name - computed: true, optional: false, required: false
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }

  // slot_name - computed: true, optional: false, required: false
  public get slotName() {
    return this.getStringAttribute('slot_name');
  }
}

export class DataAwsDmsEndpointPostgresSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsDmsEndpointPostgresSettingsOutputReference {
    return new DataAwsDmsEndpointPostgresSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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


export function dataAwsDmsEndpointRedisSettingsToHclTerraform(struct?: DataAwsDmsEndpointRedisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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


export function dataAwsDmsEndpointRedshiftSettingsToHclTerraform(struct?: DataAwsDmsEndpointRedshiftSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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


export function dataAwsDmsEndpointS3SettingsToHclTerraform(struct?: DataAwsDmsEndpointS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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

  // glue_catalog_generation - computed: true, optional: false, required: false
  public get glueCatalogGeneration() {
    return this.getBooleanAttribute('glue_catalog_generation');
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/dms_endpoint aws_dms_endpoint}
*/
export class DataAwsDmsEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsDmsEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDmsEndpoint to import
  * @param importFromId The id of the existing DataAwsDmsEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/dms_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDmsEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dms_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/data-sources/dms_endpoint aws_dms_endpoint} Data Source
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
        providerVersion: '6.8.0',
        providerVersionConstraint: '~> 6.0'
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
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
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

  // elasticsearch_settings - computed: true, optional: false, required: false
  private _elasticsearchSettings = new DataAwsDmsEndpointElasticsearchSettingsList(this, "elasticsearch_settings", false);
  public get elasticsearchSettings() {
    return this._elasticsearchSettings;
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

  // extra_connection_attributes - computed: true, optional: false, required: false
  public get extraConnectionAttributes() {
    return this.getStringAttribute('extra_connection_attributes');
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

  // kafka_settings - computed: true, optional: false, required: false
  private _kafkaSettings = new DataAwsDmsEndpointKafkaSettingsList(this, "kafka_settings", false);
  public get kafkaSettings() {
    return this._kafkaSettings;
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

  // mongodb_settings - computed: true, optional: false, required: false
  private _mongodbSettings = new DataAwsDmsEndpointMongodbSettingsList(this, "mongodb_settings", false);
  public get mongodbSettings() {
    return this._mongodbSettings;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // postgres_settings - computed: true, optional: false, required: false
  private _postgresSettings = new DataAwsDmsEndpointPostgresSettingsList(this, "postgres_settings", false);
  public get postgresSettings() {
    return this._postgresSettings;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_id: {
        value: cdktf.stringToHclTerraform(this._endpointId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
