# `sqsQueue` Submodule <a name="`sqsQueue` Submodule" id="@cdktf/provider-aws.sqsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueue <a name="SqsQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue aws_sqs_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sqs_queue

sqsQueue.SqsQueue(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_based_deduplication: typing.Union[bool, IResolvable] = None,
  deduplication_scope: str = None,
  delay_seconds: typing.Union[int, float] = None,
  fifo_queue: typing.Union[bool, IResolvable] = None,
  fifo_throughput_limit: str = None,
  id: str = None,
  kms_data_key_reuse_period_seconds: typing.Union[int, float] = None,
  kms_master_key_id: str = None,
  max_message_size: typing.Union[int, float] = None,
  message_retention_seconds: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  policy: str = None,
  receive_wait_time_seconds: typing.Union[int, float] = None,
  redrive_allow_policy: str = None,
  redrive_policy: str = None,
  sqs_managed_sse_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  visibility_timeout_seconds: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.contentBasedDeduplication">content_based_deduplication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.deduplicationScope">deduplication_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.delaySeconds">delay_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#delay_seconds SqsQueue#delay_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.fifoQueue">fifo_queue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_queue SqsQueue#fifo_queue}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.fifoThroughputLimit">fifo_throughput_limit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#id SqsQueue#id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.kmsDataKeyReusePeriodSeconds">kms_data_key_reuse_period_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.maxMessageSize">max_message_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#max_message_size SqsQueue#max_message_size}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.messageRetentionSeconds">message_retention_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name SqsQueue#name}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name_prefix SqsQueue#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#policy SqsQueue#policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.receiveWaitTimeSeconds">receive_wait_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.redriveAllowPolicy">redrive_allow_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.redrivePolicy">redrive_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_policy SqsQueue#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.sqsManagedSseEnabled">sqs_managed_sse_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags SqsQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags_all SqsQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.visibilityTimeoutSeconds">visibility_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_based_deduplication`<sup>Optional</sup> <a name="content_based_deduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.contentBasedDeduplication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}.

---

##### `deduplication_scope`<sup>Optional</sup> <a name="deduplication_scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.deduplicationScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}.

---

##### `delay_seconds`<sup>Optional</sup> <a name="delay_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.delaySeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#delay_seconds SqsQueue#delay_seconds}.

---

##### `fifo_queue`<sup>Optional</sup> <a name="fifo_queue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.fifoQueue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_queue SqsQueue#fifo_queue}.

---

##### `fifo_throughput_limit`<sup>Optional</sup> <a name="fifo_throughput_limit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.fifoThroughputLimit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#id SqsQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_data_key_reuse_period_seconds`<sup>Optional</sup> <a name="kms_data_key_reuse_period_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.kmsDataKeyReusePeriodSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}.

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.kmsMasterKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}.

---

##### `max_message_size`<sup>Optional</sup> <a name="max_message_size" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.maxMessageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#max_message_size SqsQueue#max_message_size}.

---

##### `message_retention_seconds`<sup>Optional</sup> <a name="message_retention_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.messageRetentionSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name SqsQueue#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name_prefix SqsQueue#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#policy SqsQueue#policy}.

---

##### `receive_wait_time_seconds`<sup>Optional</sup> <a name="receive_wait_time_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.receiveWaitTimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}.

---

##### `redrive_allow_policy`<sup>Optional</sup> <a name="redrive_allow_policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.redriveAllowPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}.

---

##### `redrive_policy`<sup>Optional</sup> <a name="redrive_policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.redrivePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_policy SqsQueue#redrive_policy}.

---

##### `sqs_managed_sse_enabled`<sup>Optional</sup> <a name="sqs_managed_sse_enabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.sqsManagedSseEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags SqsQueue#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags_all SqsQueue#tags_all}.

---

##### `visibility_timeout_seconds`<sup>Optional</sup> <a name="visibility_timeout_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.visibilityTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication">reset_content_based_deduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope">reset_deduplication_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds">reset_delay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue">reset_fifo_queue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit">reset_fifo_throughput_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds">reset_kms_data_key_reuse_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId">reset_kms_master_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize">reset_max_message_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds">reset_message_retention_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds">reset_receive_wait_time_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy">reset_redrive_allow_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy">reset_redrive_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled">reset_sqs_managed_sse_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds">reset_visibility_timeout_seconds</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_content_based_deduplication` <a name="reset_content_based_deduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication"></a>

```python
def reset_content_based_deduplication() -> None
```

##### `reset_deduplication_scope` <a name="reset_deduplication_scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope"></a>

```python
def reset_deduplication_scope() -> None
```

##### `reset_delay_seconds` <a name="reset_delay_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds"></a>

```python
def reset_delay_seconds() -> None
```

##### `reset_fifo_queue` <a name="reset_fifo_queue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue"></a>

```python
def reset_fifo_queue() -> None
```

##### `reset_fifo_throughput_limit` <a name="reset_fifo_throughput_limit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit"></a>

```python
def reset_fifo_throughput_limit() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_data_key_reuse_period_seconds` <a name="reset_kms_data_key_reuse_period_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds"></a>

```python
def reset_kms_data_key_reuse_period_seconds() -> None
```

##### `reset_kms_master_key_id` <a name="reset_kms_master_key_id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId"></a>

```python
def reset_kms_master_key_id() -> None
```

##### `reset_max_message_size` <a name="reset_max_message_size" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize"></a>

```python
def reset_max_message_size() -> None
```

##### `reset_message_retention_seconds` <a name="reset_message_retention_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds"></a>

```python
def reset_message_retention_seconds() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_receive_wait_time_seconds` <a name="reset_receive_wait_time_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds"></a>

```python
def reset_receive_wait_time_seconds() -> None
```

##### `reset_redrive_allow_policy` <a name="reset_redrive_allow_policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy"></a>

```python
def reset_redrive_allow_policy() -> None
```

##### `reset_redrive_policy` <a name="reset_redrive_policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy"></a>

```python
def reset_redrive_policy() -> None
```

##### `reset_sqs_managed_sse_enabled` <a name="reset_sqs_managed_sse_enabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled"></a>

```python
def reset_sqs_managed_sse_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_visibility_timeout_seconds` <a name="reset_visibility_timeout_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds"></a>

```python
def reset_visibility_timeout_seconds() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sqs_queue

sqsQueue.SqsQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sqs_queue

sqsQueue.SqsQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sqs_queue

sqsQueue.SqsQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput">content_based_deduplication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput">deduplication_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput">delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput">fifo_queue_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput">fifo_throughput_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput">kms_data_key_reuse_period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput">kms_master_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput">max_message_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput">message_retention_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput">receive_wait_time_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput">redrive_allow_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput">redrive_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput">sqs_managed_sse_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput">visibility_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication">content_based_deduplication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope">deduplication_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds">delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue">fifo_queue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit">fifo_throughput_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds">kms_data_key_reuse_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize">max_message_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds">message_retention_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds">receive_wait_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy">redrive_allow_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy">redrive_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled">sqs_managed_sse_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds">visibility_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `content_based_deduplication_input`<sup>Optional</sup> <a name="content_based_deduplication_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput"></a>

```python
content_based_deduplication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deduplication_scope_input`<sup>Optional</sup> <a name="deduplication_scope_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput"></a>

```python
deduplication_scope_input: str
```

- *Type:* str

---

##### `delay_seconds_input`<sup>Optional</sup> <a name="delay_seconds_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput"></a>

```python
delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fifo_queue_input`<sup>Optional</sup> <a name="fifo_queue_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput"></a>

```python
fifo_queue_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fifo_throughput_limit_input`<sup>Optional</sup> <a name="fifo_throughput_limit_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput"></a>

```python
fifo_throughput_limit_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_data_key_reuse_period_seconds_input`<sup>Optional</sup> <a name="kms_data_key_reuse_period_seconds_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput"></a>

```python
kms_data_key_reuse_period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_master_key_id_input`<sup>Optional</sup> <a name="kms_master_key_id_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput"></a>

```python
kms_master_key_id_input: str
```

- *Type:* str

---

##### `max_message_size_input`<sup>Optional</sup> <a name="max_message_size_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput"></a>

```python
max_message_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_retention_seconds_input`<sup>Optional</sup> <a name="message_retention_seconds_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput"></a>

```python
message_retention_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `receive_wait_time_seconds_input`<sup>Optional</sup> <a name="receive_wait_time_seconds_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput"></a>

```python
receive_wait_time_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redrive_allow_policy_input`<sup>Optional</sup> <a name="redrive_allow_policy_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput"></a>

```python
redrive_allow_policy_input: str
```

- *Type:* str

---

##### `redrive_policy_input`<sup>Optional</sup> <a name="redrive_policy_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput"></a>

```python
redrive_policy_input: str
```

- *Type:* str

---

##### `sqs_managed_sse_enabled_input`<sup>Optional</sup> <a name="sqs_managed_sse_enabled_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput"></a>

```python
sqs_managed_sse_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `visibility_timeout_seconds_input`<sup>Optional</sup> <a name="visibility_timeout_seconds_input" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput"></a>

```python
visibility_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content_based_deduplication`<sup>Required</sup> <a name="content_based_deduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication"></a>

```python
content_based_deduplication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deduplication_scope`<sup>Required</sup> <a name="deduplication_scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope"></a>

```python
deduplication_scope: str
```

- *Type:* str

---

##### `delay_seconds`<sup>Required</sup> <a name="delay_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds"></a>

```python
delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fifo_queue`<sup>Required</sup> <a name="fifo_queue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue"></a>

```python
fifo_queue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fifo_throughput_limit`<sup>Required</sup> <a name="fifo_throughput_limit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit"></a>

```python
fifo_throughput_limit: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_data_key_reuse_period_seconds`<sup>Required</sup> <a name="kms_data_key_reuse_period_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds"></a>

```python
kms_data_key_reuse_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_master_key_id`<sup>Required</sup> <a name="kms_master_key_id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

---

##### `max_message_size`<sup>Required</sup> <a name="max_message_size" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize"></a>

```python
max_message_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_retention_seconds`<sup>Required</sup> <a name="message_retention_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds"></a>

```python
message_retention_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `receive_wait_time_seconds`<sup>Required</sup> <a name="receive_wait_time_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds"></a>

```python
receive_wait_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redrive_allow_policy`<sup>Required</sup> <a name="redrive_allow_policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy"></a>

```python
redrive_allow_policy: str
```

- *Type:* str

---

##### `redrive_policy`<sup>Required</sup> <a name="redrive_policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy"></a>

```python
redrive_policy: str
```

- *Type:* str

---

##### `sqs_managed_sse_enabled`<sup>Required</sup> <a name="sqs_managed_sse_enabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled"></a>

```python
sqs_managed_sse_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `visibility_timeout_seconds`<sup>Required</sup> <a name="visibility_timeout_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds"></a>

```python
visibility_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueConfig <a name="SqsQueueConfig" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sqs_queue

sqsQueue.SqsQueueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_based_deduplication: typing.Union[bool, IResolvable] = None,
  deduplication_scope: str = None,
  delay_seconds: typing.Union[int, float] = None,
  fifo_queue: typing.Union[bool, IResolvable] = None,
  fifo_throughput_limit: str = None,
  id: str = None,
  kms_data_key_reuse_period_seconds: typing.Union[int, float] = None,
  kms_master_key_id: str = None,
  max_message_size: typing.Union[int, float] = None,
  message_retention_seconds: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  policy: str = None,
  receive_wait_time_seconds: typing.Union[int, float] = None,
  redrive_allow_policy: str = None,
  redrive_policy: str = None,
  sqs_managed_sse_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  visibility_timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication">content_based_deduplication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope">deduplication_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds">delay_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#delay_seconds SqsQueue#delay_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue">fifo_queue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_queue SqsQueue#fifo_queue}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit">fifo_throughput_limit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#id SqsQueue#id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds">kms_data_key_reuse_period_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize">max_message_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#max_message_size SqsQueue#max_message_size}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds">message_retention_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name SqsQueue#name}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name_prefix SqsQueue#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#policy SqsQueue#policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds">receive_wait_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy">redrive_allow_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy">redrive_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_policy SqsQueue#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled">sqs_managed_sse_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags SqsQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags_all SqsQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds">visibility_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_based_deduplication`<sup>Optional</sup> <a name="content_based_deduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication"></a>

```python
content_based_deduplication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}.

---

##### `deduplication_scope`<sup>Optional</sup> <a name="deduplication_scope" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope"></a>

```python
deduplication_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}.

---

##### `delay_seconds`<sup>Optional</sup> <a name="delay_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds"></a>

```python
delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#delay_seconds SqsQueue#delay_seconds}.

---

##### `fifo_queue`<sup>Optional</sup> <a name="fifo_queue" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue"></a>

```python
fifo_queue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_queue SqsQueue#fifo_queue}.

---

##### `fifo_throughput_limit`<sup>Optional</sup> <a name="fifo_throughput_limit" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit"></a>

```python
fifo_throughput_limit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#id SqsQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_data_key_reuse_period_seconds`<sup>Optional</sup> <a name="kms_data_key_reuse_period_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds"></a>

```python
kms_data_key_reuse_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}.

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}.

---

##### `max_message_size`<sup>Optional</sup> <a name="max_message_size" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize"></a>

```python
max_message_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#max_message_size SqsQueue#max_message_size}.

---

##### `message_retention_seconds`<sup>Optional</sup> <a name="message_retention_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds"></a>

```python
message_retention_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name SqsQueue#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name_prefix SqsQueue#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#policy SqsQueue#policy}.

---

##### `receive_wait_time_seconds`<sup>Optional</sup> <a name="receive_wait_time_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds"></a>

```python
receive_wait_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}.

---

##### `redrive_allow_policy`<sup>Optional</sup> <a name="redrive_allow_policy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy"></a>

```python
redrive_allow_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}.

---

##### `redrive_policy`<sup>Optional</sup> <a name="redrive_policy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy"></a>

```python
redrive_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_policy SqsQueue#redrive_policy}.

---

##### `sqs_managed_sse_enabled`<sup>Optional</sup> <a name="sqs_managed_sse_enabled" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled"></a>

```python
sqs_managed_sse_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags SqsQueue#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags_all SqsQueue#tags_all}.

---

##### `visibility_timeout_seconds`<sup>Optional</sup> <a name="visibility_timeout_seconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds"></a>

```python
visibility_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}.

---



