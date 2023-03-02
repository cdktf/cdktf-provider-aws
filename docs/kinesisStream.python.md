# `kinesisStream` Submodule <a name="`kinesisStream` Submodule" id="@cdktf/provider-aws.kinesisStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisStream <a name="KinesisStream" id="@cdktf/provider-aws.kinesisStream.KinesisStream"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream aws_kinesis_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_stream

kinesisStream.KinesisStream(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  arn: str = None,
  encryption_type: str = None,
  enforce_consumer_deletion: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  retention_period: typing.Union[int, float] = None,
  shard_count: typing.Union[int, float] = None,
  shard_level_metrics: typing.List[str] = None,
  stream_mode_details: KinesisStreamStreamModeDetails = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: KinesisStreamTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#name KinesisStream#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#arn KinesisStream#arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#encryption_type KinesisStream#encryption_type}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.enforceConsumerDeletion">enforce_consumer_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#id KinesisStream#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#kms_key_id KinesisStream#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#retention_period KinesisStream#retention_period}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_count KinesisStream#shard_count}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.shardLevelMetrics">shard_level_metrics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_level_metrics KinesisStream#shard_level_metrics}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.streamModeDetails">stream_mode_details</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | stream_mode_details block. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags KinesisStream#tags}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags_all KinesisStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#name KinesisStream#name}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#arn KinesisStream#arn}.

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.encryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#encryption_type KinesisStream#encryption_type}.

---

##### `enforce_consumer_deletion`<sup>Optional</sup> <a name="enforce_consumer_deletion" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.enforceConsumerDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#id KinesisStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#kms_key_id KinesisStream#kms_key_id}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.retentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#retention_period KinesisStream#retention_period}.

---

##### `shard_count`<sup>Optional</sup> <a name="shard_count" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.shardCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_count KinesisStream#shard_count}.

---

##### `shard_level_metrics`<sup>Optional</sup> <a name="shard_level_metrics" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.shardLevelMetrics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_level_metrics KinesisStream#shard_level_metrics}.

---

##### `stream_mode_details`<sup>Optional</sup> <a name="stream_mode_details" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.streamModeDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

stream_mode_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#stream_mode_details KinesisStream#stream_mode_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags KinesisStream#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags_all KinesisStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#timeouts KinesisStream#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.putStreamModeDetails">put_stream_mode_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetEnforceConsumerDeletion">reset_enforce_consumer_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetShardCount">reset_shard_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetShardLevelMetrics">reset_shard_level_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetStreamModeDetails">reset_stream_mode_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisStream.KinesisStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kinesisStream.KinesisStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kinesisStream.KinesisStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisStream.KinesisStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kinesisStream.KinesisStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kinesisStream.KinesisStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_stream_mode_details` <a name="put_stream_mode_details" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putStreamModeDetails"></a>

```python
def put_stream_mode_details(
  stream_mode: str
) -> None
```

###### `stream_mode`<sup>Required</sup> <a name="stream_mode" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putStreamModeDetails.parameter.streamMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#stream_mode KinesisStream#stream_mode}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#create KinesisStream#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#delete KinesisStream#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#update KinesisStream#update}.

---

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_enforce_consumer_deletion` <a name="reset_enforce_consumer_deletion" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetEnforceConsumerDeletion"></a>

```python
def reset_enforce_consumer_deletion() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```

##### `reset_shard_count` <a name="reset_shard_count" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetShardCount"></a>

```python
def reset_shard_count() -> None
```

##### `reset_shard_level_metrics` <a name="reset_shard_level_metrics" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetShardLevelMetrics"></a>

```python
def reset_shard_level_metrics() -> None
```

##### `reset_stream_mode_details` <a name="reset_stream_mode_details" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetStreamModeDetails"></a>

```python
def reset_stream_mode_details() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_stream

kinesisStream.KinesisStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_stream

kinesisStream.KinesisStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_stream

kinesisStream.KinesisStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.streamModeDetails">stream_mode_details</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference">KinesisStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletionInput">enforce_consumer_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.retentionPeriodInput">retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardCountInput">shard_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetricsInput">shard_level_metrics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.streamModeDetailsInput">stream_mode_details_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletion">enforce_consumer_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetrics">shard_level_metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_mode_details`<sup>Required</sup> <a name="stream_mode_details" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.streamModeDetails"></a>

```python
stream_mode_details: KinesisStreamStreamModeDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.timeouts"></a>

```python
timeouts: KinesisStreamTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference">KinesisStreamTimeoutsOutputReference</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `enforce_consumer_deletion_input`<sup>Optional</sup> <a name="enforce_consumer_deletion_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletionInput"></a>

```python
enforce_consumer_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.retentionPeriodInput"></a>

```python
retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_count_input`<sup>Optional</sup> <a name="shard_count_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardCountInput"></a>

```python
shard_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_level_metrics_input`<sup>Optional</sup> <a name="shard_level_metrics_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetricsInput"></a>

```python
shard_level_metrics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stream_mode_details_input`<sup>Optional</sup> <a name="stream_mode_details_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.streamModeDetailsInput"></a>

```python
stream_mode_details_input: KinesisStreamStreamModeDetails
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[KinesisStreamTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>, cdktf.IResolvable]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `enforce_consumer_deletion`<sup>Required</sup> <a name="enforce_consumer_deletion" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletion"></a>

```python
enforce_consumer_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_level_metrics`<sup>Required</sup> <a name="shard_level_metrics" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetrics"></a>

```python
shard_level_metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisStreamConfig <a name="KinesisStreamConfig" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_stream

kinesisStream.KinesisStreamConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  arn: str = None,
  encryption_type: str = None,
  enforce_consumer_deletion: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  retention_period: typing.Union[int, float] = None,
  shard_count: typing.Union[int, float] = None,
  shard_level_metrics: typing.List[str] = None,
  stream_mode_details: KinesisStreamStreamModeDetails = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: KinesisStreamTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#name KinesisStream#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#arn KinesisStream#arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#encryption_type KinesisStream#encryption_type}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.enforceConsumerDeletion">enforce_consumer_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#id KinesisStream#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#kms_key_id KinesisStream#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#retention_period KinesisStream#retention_period}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_count KinesisStream#shard_count}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.shardLevelMetrics">shard_level_metrics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_level_metrics KinesisStream#shard_level_metrics}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.streamModeDetails">stream_mode_details</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | stream_mode_details block. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags KinesisStream#tags}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags_all KinesisStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#name KinesisStream#name}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#arn KinesisStream#arn}.

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#encryption_type KinesisStream#encryption_type}.

---

##### `enforce_consumer_deletion`<sup>Optional</sup> <a name="enforce_consumer_deletion" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.enforceConsumerDeletion"></a>

```python
enforce_consumer_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#id KinesisStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#kms_key_id KinesisStream#kms_key_id}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#retention_period KinesisStream#retention_period}.

---

##### `shard_count`<sup>Optional</sup> <a name="shard_count" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_count KinesisStream#shard_count}.

---

##### `shard_level_metrics`<sup>Optional</sup> <a name="shard_level_metrics" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.shardLevelMetrics"></a>

```python
shard_level_metrics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_level_metrics KinesisStream#shard_level_metrics}.

---

##### `stream_mode_details`<sup>Optional</sup> <a name="stream_mode_details" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.streamModeDetails"></a>

```python
stream_mode_details: KinesisStreamStreamModeDetails
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

stream_mode_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#stream_mode_details KinesisStream#stream_mode_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags KinesisStream#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags_all KinesisStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.timeouts"></a>

```python
timeouts: KinesisStreamTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#timeouts KinesisStream#timeouts}

---

### KinesisStreamStreamModeDetails <a name="KinesisStreamStreamModeDetails" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_stream

kinesisStream.KinesisStreamStreamModeDetails(
  stream_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode">stream_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#stream_mode KinesisStream#stream_mode}. |

---

##### `stream_mode`<sup>Required</sup> <a name="stream_mode" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode"></a>

```python
stream_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#stream_mode KinesisStream#stream_mode}.

---

### KinesisStreamTimeouts <a name="KinesisStreamTimeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_stream

kinesisStream.KinesisStreamTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#create KinesisStream#create}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#delete KinesisStream#delete}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#update KinesisStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#create KinesisStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#delete KinesisStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#update KinesisStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisStreamStreamModeDetailsOutputReference <a name="KinesisStreamStreamModeDetailsOutputReference" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_stream

kinesisStream.KinesisStreamStreamModeDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput">stream_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode">stream_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_mode_input`<sup>Optional</sup> <a name="stream_mode_input" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput"></a>

```python
stream_mode_input: str
```

- *Type:* str

---

##### `stream_mode`<sup>Required</sup> <a name="stream_mode" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode"></a>

```python
stream_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue"></a>

```python
internal_value: KinesisStreamStreamModeDetails
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---


### KinesisStreamTimeoutsOutputReference <a name="KinesisStreamTimeoutsOutputReference" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_stream

kinesisStream.KinesisStreamTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KinesisStreamTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>, cdktf.IResolvable]

---



