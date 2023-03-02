# `dmsS3Endpoint` Submodule <a name="`dmsS3Endpoint` Submodule" id="@cdktf/provider-aws.dmsS3Endpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsS3Endpoint <a name="DmsS3Endpoint" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint aws_dms_s3_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_s3_endpoint

dmsS3Endpoint.DmsS3Endpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  endpoint_id: str,
  endpoint_type: str,
  service_access_role_arn: str,
  add_column_name: typing.Union[bool, IResolvable] = None,
  add_trailing_padding_character: typing.Union[bool, IResolvable] = None,
  bucket_folder: str = None,
  canned_acl_for_objects: str = None,
  cdc_inserts_and_updates: typing.Union[bool, IResolvable] = None,
  cdc_inserts_only: typing.Union[bool, IResolvable] = None,
  cdc_max_batch_interval: typing.Union[int, float] = None,
  cdc_min_file_size: typing.Union[int, float] = None,
  cdc_path: str = None,
  certificate_arn: str = None,
  compression_type: str = None,
  csv_delimiter: str = None,
  csv_no_sup_value: str = None,
  csv_null_value: str = None,
  csv_row_delimiter: str = None,
  data_format: str = None,
  data_page_size: typing.Union[int, float] = None,
  date_partition_delimiter: str = None,
  date_partition_enabled: typing.Union[bool, IResolvable] = None,
  date_partition_sequence: str = None,
  date_partition_timezone: str = None,
  dict_page_size_limit: typing.Union[int, float] = None,
  enable_statistics: typing.Union[bool, IResolvable] = None,
  encoding_type: str = None,
  encryption_mode: str = None,
  expected_bucket_owner: str = None,
  external_table_definition: str = None,
  id: str = None,
  ignore_header_rows: typing.Union[int, float] = None,
  include_op_for_full_load: typing.Union[bool, IResolvable] = None,
  kms_key_arn: str = None,
  max_file_size: typing.Union[int, float] = None,
  parquet_timestamp_in_millisecond: typing.Union[bool, IResolvable] = None,
  parquet_version: str = None,
  preserve_transactions: typing.Union[bool, IResolvable] = None,
  rfc4180: typing.Union[bool, IResolvable] = None,
  row_group_length: typing.Union[int, float] = None,
  server_side_encryption_kms_key_id: str = None,
  ssl_mode: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DmsS3EndpointTimeouts = None,
  timestamp_column_name: str = None,
  use_csv_no_sup_value: typing.Union[bool, IResolvable] = None,
  use_task_start_time_for_full_load_timestamp: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.addColumnName">add_column_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.addTrailingPaddingCharacter">add_trailing_padding_character</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.bucketFolder">bucket_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cannedAclForObjects">canned_acl_for_objects</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcInsertsAndUpdates">cdc_inserts_and_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcInsertsOnly">cdc_inserts_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcMaxBatchInterval">cdc_max_batch_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcMinFileSize">cdc_min_file_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcPath">cdc_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.compressionType">compression_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvDelimiter">csv_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvNoSupValue">csv_no_sup_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvNullValue">csv_null_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvRowDelimiter">csv_row_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dataFormat">data_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dataPageSize">data_page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionDelimiter">date_partition_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionEnabled">date_partition_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionSequence">date_partition_sequence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionTimezone">date_partition_timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dictPageSizeLimit">dict_page_size_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.enableStatistics">enable_statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.encodingType">encoding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.encryptionMode">encryption_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.externalTableDefinition">external_table_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.ignoreHeaderRows">ignore_header_rows</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.includeOpForFullLoad">include_op_for_full_load</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.parquetTimestampInMillisecond">parquet_timestamp_in_millisecond</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.parquetVersion">parquet_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.preserveTransactions">preserve_transactions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.rfc4180">rfc4180</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.rowGroupLength">row_group_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.serverSideEncryptionKmsKeyId">server_side_encryption_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.timestampColumnName">timestamp_column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.useCsvNoSupValue">use_csv_no_sup_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.useTaskStartTimeForFullLoadTimestamp">use_task_start_time_for_full_load_timestamp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}.

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.endpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}.

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.serviceAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}.

---

##### `add_column_name`<sup>Optional</sup> <a name="add_column_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.addColumnName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}.

---

##### `add_trailing_padding_character`<sup>Optional</sup> <a name="add_trailing_padding_character" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.addTrailingPaddingCharacter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}.

---

##### `bucket_folder`<sup>Optional</sup> <a name="bucket_folder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.bucketFolder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}.

---

##### `canned_acl_for_objects`<sup>Optional</sup> <a name="canned_acl_for_objects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cannedAclForObjects"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}.

---

##### `cdc_inserts_and_updates`<sup>Optional</sup> <a name="cdc_inserts_and_updates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcInsertsAndUpdates"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}.

---

##### `cdc_inserts_only`<sup>Optional</sup> <a name="cdc_inserts_only" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcInsertsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}.

---

##### `cdc_max_batch_interval`<sup>Optional</sup> <a name="cdc_max_batch_interval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcMaxBatchInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}.

---

##### `cdc_min_file_size`<sup>Optional</sup> <a name="cdc_min_file_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcMinFileSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}.

---

##### `cdc_path`<sup>Optional</sup> <a name="cdc_path" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}.

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.compressionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}.

---

##### `csv_delimiter`<sup>Optional</sup> <a name="csv_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}.

---

##### `csv_no_sup_value`<sup>Optional</sup> <a name="csv_no_sup_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvNoSupValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}.

---

##### `csv_null_value`<sup>Optional</sup> <a name="csv_null_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvNullValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}.

---

##### `csv_row_delimiter`<sup>Optional</sup> <a name="csv_row_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvRowDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}.

---

##### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dataFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}.

---

##### `data_page_size`<sup>Optional</sup> <a name="data_page_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dataPageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}.

---

##### `date_partition_delimiter`<sup>Optional</sup> <a name="date_partition_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}.

---

##### `date_partition_enabled`<sup>Optional</sup> <a name="date_partition_enabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}.

---

##### `date_partition_sequence`<sup>Optional</sup> <a name="date_partition_sequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionSequence"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}.

---

##### `date_partition_timezone`<sup>Optional</sup> <a name="date_partition_timezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionTimezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}.

---

##### `dict_page_size_limit`<sup>Optional</sup> <a name="dict_page_size_limit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dictPageSizeLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}.

---

##### `enable_statistics`<sup>Optional</sup> <a name="enable_statistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.enableStatistics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}.

---

##### `encoding_type`<sup>Optional</sup> <a name="encoding_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.encodingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}.

---

##### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.encryptionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}.

---

##### `external_table_definition`<sup>Optional</sup> <a name="external_table_definition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.externalTableDefinition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_header_rows`<sup>Optional</sup> <a name="ignore_header_rows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.ignoreHeaderRows"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}.

---

##### `include_op_for_full_load`<sup>Optional</sup> <a name="include_op_for_full_load" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.includeOpForFullLoad"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}.

---

##### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.maxFileSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}.

---

##### `parquet_timestamp_in_millisecond`<sup>Optional</sup> <a name="parquet_timestamp_in_millisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.parquetTimestampInMillisecond"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}.

---

##### `parquet_version`<sup>Optional</sup> <a name="parquet_version" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.parquetVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}.

---

##### `preserve_transactions`<sup>Optional</sup> <a name="preserve_transactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.preserveTransactions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}.

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.rfc4180"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}.

---

##### `row_group_length`<sup>Optional</sup> <a name="row_group_length" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.rowGroupLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}.

---

##### `server_side_encryption_kms_key_id`<sup>Optional</sup> <a name="server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.serverSideEncryptionKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timeouts DmsS3Endpoint#timeouts}

---

##### `timestamp_column_name`<sup>Optional</sup> <a name="timestamp_column_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.timestampColumnName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}.

---

##### `use_csv_no_sup_value`<sup>Optional</sup> <a name="use_csv_no_sup_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.useCsvNoSupValue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}.

---

##### `use_task_start_time_for_full_load_timestamp`<sup>Optional</sup> <a name="use_task_start_time_for_full_load_timestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.useTaskStartTimeForFullLoadTimestamp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddColumnName">reset_add_column_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddTrailingPaddingCharacter">reset_add_trailing_padding_character</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetBucketFolder">reset_bucket_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCannedAclForObjects">reset_canned_acl_for_objects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsAndUpdates">reset_cdc_inserts_and_updates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsOnly">reset_cdc_inserts_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMaxBatchInterval">reset_cdc_max_batch_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMinFileSize">reset_cdc_min_file_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcPath">reset_cdc_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvDelimiter">reset_csv_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNoSupValue">reset_csv_no_sup_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNullValue">reset_csv_null_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvRowDelimiter">reset_csv_row_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataFormat">reset_data_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataPageSize">reset_data_page_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionDelimiter">reset_date_partition_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionEnabled">reset_date_partition_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionSequence">reset_date_partition_sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionTimezone">reset_date_partition_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDictPageSizeLimit">reset_dict_page_size_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEnableStatistics">reset_enable_statistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncodingType">reset_encoding_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncryptionMode">reset_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExternalTableDefinition">reset_external_table_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIgnoreHeaderRows">reset_ignore_header_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIncludeOpForFullLoad">reset_include_op_for_full_load</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetMaxFileSize">reset_max_file_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetTimestampInMillisecond">reset_parquet_timestamp_in_millisecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetVersion">reset_parquet_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetPreserveTransactions">reset_preserve_transactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRfc4180">reset_rfc4180</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRowGroupLength">reset_row_group_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetServerSideEncryptionKmsKeyId">reset_server_side_encryption_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetSslMode">reset_ssl_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimestampColumnName">reset_timestamp_column_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseCsvNoSupValue">reset_use_csv_no_sup_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseTaskStartTimeForFullLoadTimestamp">reset_use_task_start_time_for_full_load_timestamp</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}.

---

##### `reset_add_column_name` <a name="reset_add_column_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddColumnName"></a>

```python
def reset_add_column_name() -> None
```

##### `reset_add_trailing_padding_character` <a name="reset_add_trailing_padding_character" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddTrailingPaddingCharacter"></a>

```python
def reset_add_trailing_padding_character() -> None
```

##### `reset_bucket_folder` <a name="reset_bucket_folder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetBucketFolder"></a>

```python
def reset_bucket_folder() -> None
```

##### `reset_canned_acl_for_objects` <a name="reset_canned_acl_for_objects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCannedAclForObjects"></a>

```python
def reset_canned_acl_for_objects() -> None
```

##### `reset_cdc_inserts_and_updates` <a name="reset_cdc_inserts_and_updates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsAndUpdates"></a>

```python
def reset_cdc_inserts_and_updates() -> None
```

##### `reset_cdc_inserts_only` <a name="reset_cdc_inserts_only" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsOnly"></a>

```python
def reset_cdc_inserts_only() -> None
```

##### `reset_cdc_max_batch_interval` <a name="reset_cdc_max_batch_interval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMaxBatchInterval"></a>

```python
def reset_cdc_max_batch_interval() -> None
```

##### `reset_cdc_min_file_size` <a name="reset_cdc_min_file_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMinFileSize"></a>

```python
def reset_cdc_min_file_size() -> None
```

##### `reset_cdc_path` <a name="reset_cdc_path" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcPath"></a>

```python
def reset_cdc_path() -> None
```

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_csv_delimiter` <a name="reset_csv_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvDelimiter"></a>

```python
def reset_csv_delimiter() -> None
```

##### `reset_csv_no_sup_value` <a name="reset_csv_no_sup_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNoSupValue"></a>

```python
def reset_csv_no_sup_value() -> None
```

##### `reset_csv_null_value` <a name="reset_csv_null_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNullValue"></a>

```python
def reset_csv_null_value() -> None
```

##### `reset_csv_row_delimiter` <a name="reset_csv_row_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvRowDelimiter"></a>

```python
def reset_csv_row_delimiter() -> None
```

##### `reset_data_format` <a name="reset_data_format" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataFormat"></a>

```python
def reset_data_format() -> None
```

##### `reset_data_page_size` <a name="reset_data_page_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataPageSize"></a>

```python
def reset_data_page_size() -> None
```

##### `reset_date_partition_delimiter` <a name="reset_date_partition_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionDelimiter"></a>

```python
def reset_date_partition_delimiter() -> None
```

##### `reset_date_partition_enabled` <a name="reset_date_partition_enabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionEnabled"></a>

```python
def reset_date_partition_enabled() -> None
```

##### `reset_date_partition_sequence` <a name="reset_date_partition_sequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionSequence"></a>

```python
def reset_date_partition_sequence() -> None
```

##### `reset_date_partition_timezone` <a name="reset_date_partition_timezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionTimezone"></a>

```python
def reset_date_partition_timezone() -> None
```

##### `reset_dict_page_size_limit` <a name="reset_dict_page_size_limit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDictPageSizeLimit"></a>

```python
def reset_dict_page_size_limit() -> None
```

##### `reset_enable_statistics` <a name="reset_enable_statistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEnableStatistics"></a>

```python
def reset_enable_statistics() -> None
```

##### `reset_encoding_type` <a name="reset_encoding_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncodingType"></a>

```python
def reset_encoding_type() -> None
```

##### `reset_encryption_mode` <a name="reset_encryption_mode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncryptionMode"></a>

```python
def reset_encryption_mode() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_external_table_definition` <a name="reset_external_table_definition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExternalTableDefinition"></a>

```python
def reset_external_table_definition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_header_rows` <a name="reset_ignore_header_rows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIgnoreHeaderRows"></a>

```python
def reset_ignore_header_rows() -> None
```

##### `reset_include_op_for_full_load` <a name="reset_include_op_for_full_load" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIncludeOpForFullLoad"></a>

```python
def reset_include_op_for_full_load() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_max_file_size` <a name="reset_max_file_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetMaxFileSize"></a>

```python
def reset_max_file_size() -> None
```

##### `reset_parquet_timestamp_in_millisecond` <a name="reset_parquet_timestamp_in_millisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetTimestampInMillisecond"></a>

```python
def reset_parquet_timestamp_in_millisecond() -> None
```

##### `reset_parquet_version` <a name="reset_parquet_version" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetVersion"></a>

```python
def reset_parquet_version() -> None
```

##### `reset_preserve_transactions` <a name="reset_preserve_transactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetPreserveTransactions"></a>

```python
def reset_preserve_transactions() -> None
```

##### `reset_rfc4180` <a name="reset_rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRfc4180"></a>

```python
def reset_rfc4180() -> None
```

##### `reset_row_group_length` <a name="reset_row_group_length" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRowGroupLength"></a>

```python
def reset_row_group_length() -> None
```

##### `reset_server_side_encryption_kms_key_id` <a name="reset_server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetServerSideEncryptionKmsKeyId"></a>

```python
def reset_server_side_encryption_kms_key_id() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timestamp_column_name` <a name="reset_timestamp_column_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimestampColumnName"></a>

```python
def reset_timestamp_column_name() -> None
```

##### `reset_use_csv_no_sup_value` <a name="reset_use_csv_no_sup_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseCsvNoSupValue"></a>

```python
def reset_use_csv_no_sup_value() -> None
```

##### `reset_use_task_start_time_for_full_load_timestamp` <a name="reset_use_task_start_time_for_full_load_timestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```python
def reset_use_task_start_time_for_full_load_timestamp() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dms_s3_endpoint

dmsS3Endpoint.DmsS3Endpoint.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dms_s3_endpoint

dmsS3Endpoint.DmsS3Endpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dms_s3_endpoint

dmsS3Endpoint.DmsS3Endpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn">endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName">engine_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput">add_column_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput">add_trailing_padding_character_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput">bucket_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput">canned_acl_for_objects_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput">cdc_inserts_and_updates_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput">cdc_inserts_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput">cdc_max_batch_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput">cdc_min_file_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput">cdc_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput">csv_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput">csv_no_sup_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput">csv_null_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput">csv_row_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput">data_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput">data_page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput">date_partition_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput">date_partition_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput">date_partition_sequence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput">date_partition_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput">dict_page_size_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput">enable_statistics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput">encoding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput">encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput">external_table_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput">ignore_header_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput">include_op_for_full_load_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput">max_file_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput">parquet_timestamp_in_millisecond_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput">parquet_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput">preserve_transactions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input">rfc4180_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput">row_group_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput">server_side_encryption_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput">service_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput">timestamp_column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput">use_csv_no_sup_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput">use_task_start_time_for_full_load_timestamp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName">add_column_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter">add_trailing_padding_character</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder">bucket_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects">canned_acl_for_objects</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates">cdc_inserts_and_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly">cdc_inserts_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval">cdc_max_batch_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize">cdc_min_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath">cdc_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter">csv_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue">csv_no_sup_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue">csv_null_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter">csv_row_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat">data_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize">data_page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter">date_partition_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled">date_partition_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence">date_partition_sequence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone">date_partition_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit">dict_page_size_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics">enable_statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType">encoding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition">external_table_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows">ignore_header_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad">include_op_for_full_load</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond">parquet_timestamp_in_millisecond</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion">parquet_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions">preserve_transactions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180">rfc4180</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength">row_group_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId">server_side_encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName">timestamp_column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue">use_csv_no_sup_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp">use_task_start_time_for_full_load_timestamp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_arn`<sup>Required</sup> <a name="endpoint_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn"></a>

```python
endpoint_arn: str
```

- *Type:* str

---

##### `engine_display_name`<sup>Required</sup> <a name="engine_display_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName"></a>

```python
engine_display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts"></a>

```python
timeouts: DmsS3EndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a>

---

##### `add_column_name_input`<sup>Optional</sup> <a name="add_column_name_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput"></a>

```python
add_column_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `add_trailing_padding_character_input`<sup>Optional</sup> <a name="add_trailing_padding_character_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput"></a>

```python
add_trailing_padding_character_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_folder_input`<sup>Optional</sup> <a name="bucket_folder_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput"></a>

```python
bucket_folder_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `canned_acl_for_objects_input`<sup>Optional</sup> <a name="canned_acl_for_objects_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput"></a>

```python
canned_acl_for_objects_input: str
```

- *Type:* str

---

##### `cdc_inserts_and_updates_input`<sup>Optional</sup> <a name="cdc_inserts_and_updates_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput"></a>

```python
cdc_inserts_and_updates_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdc_inserts_only_input`<sup>Optional</sup> <a name="cdc_inserts_only_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput"></a>

```python
cdc_inserts_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdc_max_batch_interval_input`<sup>Optional</sup> <a name="cdc_max_batch_interval_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput"></a>

```python
cdc_max_batch_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_min_file_size_input`<sup>Optional</sup> <a name="cdc_min_file_size_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput"></a>

```python
cdc_min_file_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_path_input`<sup>Optional</sup> <a name="cdc_path_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput"></a>

```python
cdc_path_input: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `csv_delimiter_input`<sup>Optional</sup> <a name="csv_delimiter_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput"></a>

```python
csv_delimiter_input: str
```

- *Type:* str

---

##### `csv_no_sup_value_input`<sup>Optional</sup> <a name="csv_no_sup_value_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput"></a>

```python
csv_no_sup_value_input: str
```

- *Type:* str

---

##### `csv_null_value_input`<sup>Optional</sup> <a name="csv_null_value_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput"></a>

```python
csv_null_value_input: str
```

- *Type:* str

---

##### `csv_row_delimiter_input`<sup>Optional</sup> <a name="csv_row_delimiter_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput"></a>

```python
csv_row_delimiter_input: str
```

- *Type:* str

---

##### `data_format_input`<sup>Optional</sup> <a name="data_format_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput"></a>

```python
data_format_input: str
```

- *Type:* str

---

##### `data_page_size_input`<sup>Optional</sup> <a name="data_page_size_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput"></a>

```python
data_page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_partition_delimiter_input`<sup>Optional</sup> <a name="date_partition_delimiter_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput"></a>

```python
date_partition_delimiter_input: str
```

- *Type:* str

---

##### `date_partition_enabled_input`<sup>Optional</sup> <a name="date_partition_enabled_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput"></a>

```python
date_partition_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `date_partition_sequence_input`<sup>Optional</sup> <a name="date_partition_sequence_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput"></a>

```python
date_partition_sequence_input: str
```

- *Type:* str

---

##### `date_partition_timezone_input`<sup>Optional</sup> <a name="date_partition_timezone_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput"></a>

```python
date_partition_timezone_input: str
```

- *Type:* str

---

##### `dict_page_size_limit_input`<sup>Optional</sup> <a name="dict_page_size_limit_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput"></a>

```python
dict_page_size_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_statistics_input`<sup>Optional</sup> <a name="enable_statistics_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput"></a>

```python
enable_statistics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_type_input`<sup>Optional</sup> <a name="encoding_type_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput"></a>

```python
encoding_type_input: str
```

- *Type:* str

---

##### `encryption_mode_input`<sup>Optional</sup> <a name="encryption_mode_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput"></a>

```python
encryption_mode_input: str
```

- *Type:* str

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `external_table_definition_input`<sup>Optional</sup> <a name="external_table_definition_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput"></a>

```python
external_table_definition_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_header_rows_input`<sup>Optional</sup> <a name="ignore_header_rows_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput"></a>

```python
ignore_header_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_op_for_full_load_input`<sup>Optional</sup> <a name="include_op_for_full_load_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput"></a>

```python
include_op_for_full_load_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `max_file_size_input`<sup>Optional</sup> <a name="max_file_size_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput"></a>

```python
max_file_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parquet_timestamp_in_millisecond_input`<sup>Optional</sup> <a name="parquet_timestamp_in_millisecond_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput"></a>

```python
parquet_timestamp_in_millisecond_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parquet_version_input`<sup>Optional</sup> <a name="parquet_version_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput"></a>

```python
parquet_version_input: str
```

- *Type:* str

---

##### `preserve_transactions_input`<sup>Optional</sup> <a name="preserve_transactions_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput"></a>

```python
preserve_transactions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rfc4180_input`<sup>Optional</sup> <a name="rfc4180_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input"></a>

```python
rfc4180_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `row_group_length_input`<sup>Optional</sup> <a name="row_group_length_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput"></a>

```python
row_group_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_side_encryption_kms_key_id_input`<sup>Optional</sup> <a name="server_side_encryption_kms_key_id_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput"></a>

```python
server_side_encryption_kms_key_id_input: str
```

- *Type:* str

---

##### `service_access_role_arn_input`<sup>Optional</sup> <a name="service_access_role_arn_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput"></a>

```python
service_access_role_arn_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DmsS3EndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>, cdktf.IResolvable]

---

##### `timestamp_column_name_input`<sup>Optional</sup> <a name="timestamp_column_name_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput"></a>

```python
timestamp_column_name_input: str
```

- *Type:* str

---

##### `use_csv_no_sup_value_input`<sup>Optional</sup> <a name="use_csv_no_sup_value_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput"></a>

```python
use_csv_no_sup_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_task_start_time_for_full_load_timestamp_input`<sup>Optional</sup> <a name="use_task_start_time_for_full_load_timestamp_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```python
use_task_start_time_for_full_load_timestamp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `add_column_name`<sup>Required</sup> <a name="add_column_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName"></a>

```python
add_column_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `add_trailing_padding_character`<sup>Required</sup> <a name="add_trailing_padding_character" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter"></a>

```python
add_trailing_padding_character: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_folder`<sup>Required</sup> <a name="bucket_folder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder"></a>

```python
bucket_folder: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `canned_acl_for_objects`<sup>Required</sup> <a name="canned_acl_for_objects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects"></a>

```python
canned_acl_for_objects: str
```

- *Type:* str

---

##### `cdc_inserts_and_updates`<sup>Required</sup> <a name="cdc_inserts_and_updates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates"></a>

```python
cdc_inserts_and_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdc_inserts_only`<sup>Required</sup> <a name="cdc_inserts_only" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly"></a>

```python
cdc_inserts_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdc_max_batch_interval`<sup>Required</sup> <a name="cdc_max_batch_interval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval"></a>

```python
cdc_max_batch_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_min_file_size`<sup>Required</sup> <a name="cdc_min_file_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize"></a>

```python
cdc_min_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_path`<sup>Required</sup> <a name="cdc_path" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath"></a>

```python
cdc_path: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `csv_delimiter`<sup>Required</sup> <a name="csv_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter"></a>

```python
csv_delimiter: str
```

- *Type:* str

---

##### `csv_no_sup_value`<sup>Required</sup> <a name="csv_no_sup_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue"></a>

```python
csv_no_sup_value: str
```

- *Type:* str

---

##### `csv_null_value`<sup>Required</sup> <a name="csv_null_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue"></a>

```python
csv_null_value: str
```

- *Type:* str

---

##### `csv_row_delimiter`<sup>Required</sup> <a name="csv_row_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter"></a>

```python
csv_row_delimiter: str
```

- *Type:* str

---

##### `data_format`<sup>Required</sup> <a name="data_format" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

---

##### `data_page_size`<sup>Required</sup> <a name="data_page_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize"></a>

```python
data_page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_partition_delimiter`<sup>Required</sup> <a name="date_partition_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter"></a>

```python
date_partition_delimiter: str
```

- *Type:* str

---

##### `date_partition_enabled`<sup>Required</sup> <a name="date_partition_enabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled"></a>

```python
date_partition_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `date_partition_sequence`<sup>Required</sup> <a name="date_partition_sequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence"></a>

```python
date_partition_sequence: str
```

- *Type:* str

---

##### `date_partition_timezone`<sup>Required</sup> <a name="date_partition_timezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone"></a>

```python
date_partition_timezone: str
```

- *Type:* str

---

##### `dict_page_size_limit`<sup>Required</sup> <a name="dict_page_size_limit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit"></a>

```python
dict_page_size_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_statistics`<sup>Required</sup> <a name="enable_statistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics"></a>

```python
enable_statistics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_type`<sup>Required</sup> <a name="encoding_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType"></a>

```python
encoding_type: str
```

- *Type:* str

---

##### `encryption_mode`<sup>Required</sup> <a name="encryption_mode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `external_table_definition`<sup>Required</sup> <a name="external_table_definition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition"></a>

```python
external_table_definition: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_header_rows`<sup>Required</sup> <a name="ignore_header_rows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows"></a>

```python
ignore_header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_op_for_full_load`<sup>Required</sup> <a name="include_op_for_full_load" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad"></a>

```python
include_op_for_full_load: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parquet_timestamp_in_millisecond`<sup>Required</sup> <a name="parquet_timestamp_in_millisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond"></a>

```python
parquet_timestamp_in_millisecond: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parquet_version`<sup>Required</sup> <a name="parquet_version" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion"></a>

```python
parquet_version: str
```

- *Type:* str

---

##### `preserve_transactions`<sup>Required</sup> <a name="preserve_transactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions"></a>

```python
preserve_transactions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rfc4180`<sup>Required</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180"></a>

```python
rfc4180: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `row_group_length`<sup>Required</sup> <a name="row_group_length" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength"></a>

```python
row_group_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_side_encryption_kms_key_id`<sup>Required</sup> <a name="server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId"></a>

```python
server_side_encryption_kms_key_id: str
```

- *Type:* str

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timestamp_column_name`<sup>Required</sup> <a name="timestamp_column_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName"></a>

```python
timestamp_column_name: str
```

- *Type:* str

---

##### `use_csv_no_sup_value`<sup>Required</sup> <a name="use_csv_no_sup_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue"></a>

```python
use_csv_no_sup_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_task_start_time_for_full_load_timestamp`<sup>Required</sup> <a name="use_task_start_time_for_full_load_timestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp"></a>

```python
use_task_start_time_for_full_load_timestamp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsS3EndpointConfig <a name="DmsS3EndpointConfig" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_s3_endpoint

dmsS3Endpoint.DmsS3EndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  endpoint_id: str,
  endpoint_type: str,
  service_access_role_arn: str,
  add_column_name: typing.Union[bool, IResolvable] = None,
  add_trailing_padding_character: typing.Union[bool, IResolvable] = None,
  bucket_folder: str = None,
  canned_acl_for_objects: str = None,
  cdc_inserts_and_updates: typing.Union[bool, IResolvable] = None,
  cdc_inserts_only: typing.Union[bool, IResolvable] = None,
  cdc_max_batch_interval: typing.Union[int, float] = None,
  cdc_min_file_size: typing.Union[int, float] = None,
  cdc_path: str = None,
  certificate_arn: str = None,
  compression_type: str = None,
  csv_delimiter: str = None,
  csv_no_sup_value: str = None,
  csv_null_value: str = None,
  csv_row_delimiter: str = None,
  data_format: str = None,
  data_page_size: typing.Union[int, float] = None,
  date_partition_delimiter: str = None,
  date_partition_enabled: typing.Union[bool, IResolvable] = None,
  date_partition_sequence: str = None,
  date_partition_timezone: str = None,
  dict_page_size_limit: typing.Union[int, float] = None,
  enable_statistics: typing.Union[bool, IResolvable] = None,
  encoding_type: str = None,
  encryption_mode: str = None,
  expected_bucket_owner: str = None,
  external_table_definition: str = None,
  id: str = None,
  ignore_header_rows: typing.Union[int, float] = None,
  include_op_for_full_load: typing.Union[bool, IResolvable] = None,
  kms_key_arn: str = None,
  max_file_size: typing.Union[int, float] = None,
  parquet_timestamp_in_millisecond: typing.Union[bool, IResolvable] = None,
  parquet_version: str = None,
  preserve_transactions: typing.Union[bool, IResolvable] = None,
  rfc4180: typing.Union[bool, IResolvable] = None,
  row_group_length: typing.Union[int, float] = None,
  server_side_encryption_kms_key_id: str = None,
  ssl_mode: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DmsS3EndpointTimeouts = None,
  timestamp_column_name: str = None,
  use_csv_no_sup_value: typing.Union[bool, IResolvable] = None,
  use_task_start_time_for_full_load_timestamp: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName">add_column_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter">add_trailing_padding_character</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder">bucket_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects">canned_acl_for_objects</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates">cdc_inserts_and_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly">cdc_inserts_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval">cdc_max_batch_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize">cdc_min_file_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath">cdc_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType">compression_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter">csv_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue">csv_no_sup_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue">csv_null_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter">csv_row_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat">data_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize">data_page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter">date_partition_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled">date_partition_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence">date_partition_sequence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone">date_partition_timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit">dict_page_size_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics">enable_statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType">encoding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition">external_table_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows">ignore_header_rows</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad">include_op_for_full_load</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond">parquet_timestamp_in_millisecond</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion">parquet_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions">preserve_transactions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180">rfc4180</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength">row_group_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId">server_side_encryption_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName">timestamp_column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue">use_csv_no_sup_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp">use_task_start_time_for_full_load_timestamp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}.

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}.

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}.

---

##### `add_column_name`<sup>Optional</sup> <a name="add_column_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName"></a>

```python
add_column_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}.

---

##### `add_trailing_padding_character`<sup>Optional</sup> <a name="add_trailing_padding_character" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter"></a>

```python
add_trailing_padding_character: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}.

---

##### `bucket_folder`<sup>Optional</sup> <a name="bucket_folder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder"></a>

```python
bucket_folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}.

---

##### `canned_acl_for_objects`<sup>Optional</sup> <a name="canned_acl_for_objects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects"></a>

```python
canned_acl_for_objects: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}.

---

##### `cdc_inserts_and_updates`<sup>Optional</sup> <a name="cdc_inserts_and_updates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates"></a>

```python
cdc_inserts_and_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}.

---

##### `cdc_inserts_only`<sup>Optional</sup> <a name="cdc_inserts_only" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly"></a>

```python
cdc_inserts_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}.

---

##### `cdc_max_batch_interval`<sup>Optional</sup> <a name="cdc_max_batch_interval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval"></a>

```python
cdc_max_batch_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}.

---

##### `cdc_min_file_size`<sup>Optional</sup> <a name="cdc_min_file_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize"></a>

```python
cdc_min_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}.

---

##### `cdc_path`<sup>Optional</sup> <a name="cdc_path" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath"></a>

```python
cdc_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}.

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}.

---

##### `csv_delimiter`<sup>Optional</sup> <a name="csv_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter"></a>

```python
csv_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}.

---

##### `csv_no_sup_value`<sup>Optional</sup> <a name="csv_no_sup_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue"></a>

```python
csv_no_sup_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}.

---

##### `csv_null_value`<sup>Optional</sup> <a name="csv_null_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue"></a>

```python
csv_null_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}.

---

##### `csv_row_delimiter`<sup>Optional</sup> <a name="csv_row_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter"></a>

```python
csv_row_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}.

---

##### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}.

---

##### `data_page_size`<sup>Optional</sup> <a name="data_page_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize"></a>

```python
data_page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}.

---

##### `date_partition_delimiter`<sup>Optional</sup> <a name="date_partition_delimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter"></a>

```python
date_partition_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}.

---

##### `date_partition_enabled`<sup>Optional</sup> <a name="date_partition_enabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled"></a>

```python
date_partition_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}.

---

##### `date_partition_sequence`<sup>Optional</sup> <a name="date_partition_sequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence"></a>

```python
date_partition_sequence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}.

---

##### `date_partition_timezone`<sup>Optional</sup> <a name="date_partition_timezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone"></a>

```python
date_partition_timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}.

---

##### `dict_page_size_limit`<sup>Optional</sup> <a name="dict_page_size_limit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit"></a>

```python
dict_page_size_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}.

---

##### `enable_statistics`<sup>Optional</sup> <a name="enable_statistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics"></a>

```python
enable_statistics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}.

---

##### `encoding_type`<sup>Optional</sup> <a name="encoding_type" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType"></a>

```python
encoding_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}.

---

##### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}.

---

##### `external_table_definition`<sup>Optional</sup> <a name="external_table_definition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition"></a>

```python
external_table_definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_header_rows`<sup>Optional</sup> <a name="ignore_header_rows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows"></a>

```python
ignore_header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}.

---

##### `include_op_for_full_load`<sup>Optional</sup> <a name="include_op_for_full_load" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad"></a>

```python
include_op_for_full_load: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}.

---

##### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}.

---

##### `parquet_timestamp_in_millisecond`<sup>Optional</sup> <a name="parquet_timestamp_in_millisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond"></a>

```python
parquet_timestamp_in_millisecond: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}.

---

##### `parquet_version`<sup>Optional</sup> <a name="parquet_version" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion"></a>

```python
parquet_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}.

---

##### `preserve_transactions`<sup>Optional</sup> <a name="preserve_transactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions"></a>

```python
preserve_transactions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}.

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180"></a>

```python
rfc4180: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}.

---

##### `row_group_length`<sup>Optional</sup> <a name="row_group_length" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength"></a>

```python
row_group_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}.

---

##### `server_side_encryption_kms_key_id`<sup>Optional</sup> <a name="server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId"></a>

```python
server_side_encryption_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts"></a>

```python
timeouts: DmsS3EndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timeouts DmsS3Endpoint#timeouts}

---

##### `timestamp_column_name`<sup>Optional</sup> <a name="timestamp_column_name" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName"></a>

```python
timestamp_column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}.

---

##### `use_csv_no_sup_value`<sup>Optional</sup> <a name="use_csv_no_sup_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue"></a>

```python
use_csv_no_sup_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}.

---

##### `use_task_start_time_for_full_load_timestamp`<sup>Optional</sup> <a name="use_task_start_time_for_full_load_timestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp"></a>

```python
use_task_start_time_for_full_load_timestamp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}.

---

### DmsS3EndpointTimeouts <a name="DmsS3EndpointTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_s3_endpoint

dmsS3Endpoint.DmsS3EndpointTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsS3EndpointTimeoutsOutputReference <a name="DmsS3EndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_s3_endpoint

dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DmsS3EndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>, cdktf.IResolvable]

---



