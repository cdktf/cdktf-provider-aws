// https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsS3EndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}
  */
  readonly addColumnName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}
  */
  readonly addTrailingPaddingCharacter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}
  */
  readonly bucketFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}
  */
  readonly cannedAclForObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}
  */
  readonly cdcInsertsAndUpdates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}
  */
  readonly cdcInsertsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}
  */
  readonly cdcMaxBatchInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}
  */
  readonly cdcMinFileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}
  */
  readonly cdcPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}
  */
  readonly csvDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}
  */
  readonly csvNoSupValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}
  */
  readonly csvNullValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}
  */
  readonly csvRowDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}
  */
  readonly dataPageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}
  */
  readonly datePartitionDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}
  */
  readonly datePartitionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}
  */
  readonly datePartitionSequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}
  */
  readonly datePartitionTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#detach_target_on_lob_lookup_failure_parquet DmsS3Endpoint#detach_target_on_lob_lookup_failure_parquet}
  */
  readonly detachTargetOnLobLookupFailureParquet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}
  */
  readonly dictPageSizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}
  */
  readonly enableStatistics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}
  */
  readonly encodingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}
  */
  readonly externalTableDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}
  */
  readonly ignoreHeaderRows?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}
  */
  readonly includeOpForFullLoad?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}
  */
  readonly parquetTimestampInMillisecond?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}
  */
  readonly parquetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}
  */
  readonly preserveTransactions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}
  */
  readonly rfc4180?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}
  */
  readonly rowGroupLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}
  */
  readonly serverSideEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}
  */
  readonly timestampColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}
  */
  readonly useCsvNoSupValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}
  */
  readonly useTaskStartTimeForFullLoadTimestamp?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timeouts DmsS3Endpoint#timeouts}
  */
  readonly timeouts?: DmsS3EndpointTimeouts;
}
export interface DmsS3EndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}
  */
  readonly delete?: string;
}

export function dmsS3EndpointTimeoutsToTerraform(struct?: DmsS3EndpointTimeoutsOutputReference | DmsS3EndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DmsS3EndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsS3EndpointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DmsS3EndpointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint aws_dms_s3_endpoint}
*/
export class DmsS3Endpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_s3_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint aws_dms_s3_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsS3EndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DmsS3EndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_s3_endpoint',
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
    this._addColumnName = config.addColumnName;
    this._addTrailingPaddingCharacter = config.addTrailingPaddingCharacter;
    this._bucketFolder = config.bucketFolder;
    this._bucketName = config.bucketName;
    this._cannedAclForObjects = config.cannedAclForObjects;
    this._cdcInsertsAndUpdates = config.cdcInsertsAndUpdates;
    this._cdcInsertsOnly = config.cdcInsertsOnly;
    this._cdcMaxBatchInterval = config.cdcMaxBatchInterval;
    this._cdcMinFileSize = config.cdcMinFileSize;
    this._cdcPath = config.cdcPath;
    this._certificateArn = config.certificateArn;
    this._compressionType = config.compressionType;
    this._csvDelimiter = config.csvDelimiter;
    this._csvNoSupValue = config.csvNoSupValue;
    this._csvNullValue = config.csvNullValue;
    this._csvRowDelimiter = config.csvRowDelimiter;
    this._dataFormat = config.dataFormat;
    this._dataPageSize = config.dataPageSize;
    this._datePartitionDelimiter = config.datePartitionDelimiter;
    this._datePartitionEnabled = config.datePartitionEnabled;
    this._datePartitionSequence = config.datePartitionSequence;
    this._datePartitionTimezone = config.datePartitionTimezone;
    this._detachTargetOnLobLookupFailureParquet = config.detachTargetOnLobLookupFailureParquet;
    this._dictPageSizeLimit = config.dictPageSizeLimit;
    this._enableStatistics = config.enableStatistics;
    this._encodingType = config.encodingType;
    this._encryptionMode = config.encryptionMode;
    this._endpointId = config.endpointId;
    this._endpointType = config.endpointType;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._externalTableDefinition = config.externalTableDefinition;
    this._id = config.id;
    this._ignoreHeaderRows = config.ignoreHeaderRows;
    this._includeOpForFullLoad = config.includeOpForFullLoad;
    this._kmsKeyArn = config.kmsKeyArn;
    this._maxFileSize = config.maxFileSize;
    this._parquetTimestampInMillisecond = config.parquetTimestampInMillisecond;
    this._parquetVersion = config.parquetVersion;
    this._preserveTransactions = config.preserveTransactions;
    this._rfc4180 = config.rfc4180;
    this._rowGroupLength = config.rowGroupLength;
    this._serverSideEncryptionKmsKeyId = config.serverSideEncryptionKmsKeyId;
    this._serviceAccessRoleArn = config.serviceAccessRoleArn;
    this._sslMode = config.sslMode;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timestampColumnName = config.timestampColumnName;
    this._useCsvNoSupValue = config.useCsvNoSupValue;
    this._useTaskStartTimeForFullLoadTimestamp = config.useTaskStartTimeForFullLoadTimestamp;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // add_trailing_padding_character - computed: false, optional: true, required: false
  private _addTrailingPaddingCharacter?: boolean | cdktf.IResolvable; 
  public get addTrailingPaddingCharacter() {
    return this.getBooleanAttribute('add_trailing_padding_character');
  }
  public set addTrailingPaddingCharacter(value: boolean | cdktf.IResolvable) {
    this._addTrailingPaddingCharacter = value;
  }
  public resetAddTrailingPaddingCharacter() {
    this._addTrailingPaddingCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addTrailingPaddingCharacterInput() {
    return this._addTrailingPaddingCharacter;
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

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
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

  // date_partition_timezone - computed: false, optional: true, required: false
  private _datePartitionTimezone?: string; 
  public get datePartitionTimezone() {
    return this.getStringAttribute('date_partition_timezone');
  }
  public set datePartitionTimezone(value: string) {
    this._datePartitionTimezone = value;
  }
  public resetDatePartitionTimezone() {
    this._datePartitionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datePartitionTimezoneInput() {
    return this._datePartitionTimezone;
  }

  // detach_target_on_lob_lookup_failure_parquet - computed: false, optional: true, required: false
  private _detachTargetOnLobLookupFailureParquet?: boolean | cdktf.IResolvable; 
  public get detachTargetOnLobLookupFailureParquet() {
    return this.getBooleanAttribute('detach_target_on_lob_lookup_failure_parquet');
  }
  public set detachTargetOnLobLookupFailureParquet(value: boolean | cdktf.IResolvable) {
    this._detachTargetOnLobLookupFailureParquet = value;
  }
  public resetDetachTargetOnLobLookupFailureParquet() {
    this._detachTargetOnLobLookupFailureParquet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachTargetOnLobLookupFailureParquetInput() {
    return this._detachTargetOnLobLookupFailureParquet;
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

  // engine_display_name - computed: true, optional: false, required: false
  public get engineDisplayName() {
    return this.getStringAttribute('engine_display_name');
  }

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DmsS3EndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DmsS3EndpointTimeouts) {
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
      add_column_name: cdktf.booleanToTerraform(this._addColumnName),
      add_trailing_padding_character: cdktf.booleanToTerraform(this._addTrailingPaddingCharacter),
      bucket_folder: cdktf.stringToTerraform(this._bucketFolder),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      canned_acl_for_objects: cdktf.stringToTerraform(this._cannedAclForObjects),
      cdc_inserts_and_updates: cdktf.booleanToTerraform(this._cdcInsertsAndUpdates),
      cdc_inserts_only: cdktf.booleanToTerraform(this._cdcInsertsOnly),
      cdc_max_batch_interval: cdktf.numberToTerraform(this._cdcMaxBatchInterval),
      cdc_min_file_size: cdktf.numberToTerraform(this._cdcMinFileSize),
      cdc_path: cdktf.stringToTerraform(this._cdcPath),
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      compression_type: cdktf.stringToTerraform(this._compressionType),
      csv_delimiter: cdktf.stringToTerraform(this._csvDelimiter),
      csv_no_sup_value: cdktf.stringToTerraform(this._csvNoSupValue),
      csv_null_value: cdktf.stringToTerraform(this._csvNullValue),
      csv_row_delimiter: cdktf.stringToTerraform(this._csvRowDelimiter),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      data_page_size: cdktf.numberToTerraform(this._dataPageSize),
      date_partition_delimiter: cdktf.stringToTerraform(this._datePartitionDelimiter),
      date_partition_enabled: cdktf.booleanToTerraform(this._datePartitionEnabled),
      date_partition_sequence: cdktf.stringToTerraform(this._datePartitionSequence),
      date_partition_timezone: cdktf.stringToTerraform(this._datePartitionTimezone),
      detach_target_on_lob_lookup_failure_parquet: cdktf.booleanToTerraform(this._detachTargetOnLobLookupFailureParquet),
      dict_page_size_limit: cdktf.numberToTerraform(this._dictPageSizeLimit),
      enable_statistics: cdktf.booleanToTerraform(this._enableStatistics),
      encoding_type: cdktf.stringToTerraform(this._encodingType),
      encryption_mode: cdktf.stringToTerraform(this._encryptionMode),
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      external_table_definition: cdktf.stringToTerraform(this._externalTableDefinition),
      id: cdktf.stringToTerraform(this._id),
      ignore_header_rows: cdktf.numberToTerraform(this._ignoreHeaderRows),
      include_op_for_full_load: cdktf.booleanToTerraform(this._includeOpForFullLoad),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      max_file_size: cdktf.numberToTerraform(this._maxFileSize),
      parquet_timestamp_in_millisecond: cdktf.booleanToTerraform(this._parquetTimestampInMillisecond),
      parquet_version: cdktf.stringToTerraform(this._parquetVersion),
      preserve_transactions: cdktf.booleanToTerraform(this._preserveTransactions),
      rfc_4180: cdktf.booleanToTerraform(this._rfc4180),
      row_group_length: cdktf.numberToTerraform(this._rowGroupLength),
      server_side_encryption_kms_key_id: cdktf.stringToTerraform(this._serverSideEncryptionKmsKeyId),
      service_access_role_arn: cdktf.stringToTerraform(this._serviceAccessRoleArn),
      ssl_mode: cdktf.stringToTerraform(this._sslMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timestamp_column_name: cdktf.stringToTerraform(this._timestampColumnName),
      use_csv_no_sup_value: cdktf.booleanToTerraform(this._useCsvNoSupValue),
      use_task_start_time_for_full_load_timestamp: cdktf.booleanToTerraform(this._useTaskStartTimeForFullLoadTimestamp),
      timeouts: dmsS3EndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
