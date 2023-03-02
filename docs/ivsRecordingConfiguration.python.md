# `ivsRecordingConfiguration` Submodule <a name="`ivsRecordingConfiguration` Submodule" id="@cdktf/provider-aws.ivsRecordingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsRecordingConfiguration <a name="IvsRecordingConfiguration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration aws_ivs_recording_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_configuration: IvsRecordingConfigurationDestinationConfiguration,
  id: str = None,
  name: str = None,
  recording_reconnect_window_seconds: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  thumbnail_configuration: IvsRecordingConfigurationThumbnailConfiguration = None,
  timeouts: IvsRecordingConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#id IvsRecordingConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#name IvsRecordingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.recordingReconnectWindowSeconds">recording_reconnect_window_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.thumbnailConfiguration">thumbnail_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | thumbnail_configuration block. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_configuration`<sup>Required</sup> <a name="destination_configuration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.destinationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

destination_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#destination_configuration IvsRecordingConfiguration#destination_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#id IvsRecordingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#name IvsRecordingConfiguration#name}.

---

##### `recording_reconnect_window_seconds`<sup>Optional</sup> <a name="recording_reconnect_window_seconds" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.recordingReconnectWindowSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}.

---

##### `thumbnail_configuration`<sup>Optional</sup> <a name="thumbnail_configuration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.thumbnailConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

thumbnail_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#thumbnail_configuration IvsRecordingConfiguration#thumbnail_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#timeouts IvsRecordingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putDestinationConfiguration">put_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration">put_thumbnail_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRecordingReconnectWindowSeconds">reset_recording_reconnect_window_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetThumbnailConfiguration">reset_thumbnail_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_destination_configuration` <a name="put_destination_configuration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putDestinationConfiguration"></a>

```python
def put_destination_configuration(
  s3: IvsRecordingConfigurationDestinationConfigurationS3
) -> None
```

###### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putDestinationConfiguration.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#s3 IvsRecordingConfiguration#s3}

---

##### `put_thumbnail_configuration` <a name="put_thumbnail_configuration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration"></a>

```python
def put_thumbnail_configuration(
  recording_mode: str = None,
  target_interval_seconds: typing.Union[int, float] = None
) -> None
```

###### `recording_mode`<sup>Optional</sup> <a name="recording_mode" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration.parameter.recordingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#recording_mode IvsRecordingConfiguration#recording_mode}.

---

###### `target_interval_seconds`<sup>Optional</sup> <a name="target_interval_seconds" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration.parameter.targetIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#target_interval_seconds IvsRecordingConfiguration#target_interval_seconds}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#create IvsRecordingConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#delete IvsRecordingConfiguration#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_recording_reconnect_window_seconds` <a name="reset_recording_reconnect_window_seconds" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRecordingReconnectWindowSeconds"></a>

```python
def reset_recording_reconnect_window_seconds() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_thumbnail_configuration` <a name="reset_thumbnail_configuration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetThumbnailConfiguration"></a>

```python
def reset_thumbnail_configuration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference">IvsRecordingConfigurationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfiguration">thumbnail_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference">IvsRecordingConfigurationThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference">IvsRecordingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfigurationInput">destination_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSecondsInput">recording_reconnect_window_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfigurationInput">thumbnail_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSeconds">recording_reconnect_window_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_configuration`<sup>Required</sup> <a name="destination_configuration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfiguration"></a>

```python
destination_configuration: IvsRecordingConfigurationDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference">IvsRecordingConfigurationDestinationConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `thumbnail_configuration`<sup>Required</sup> <a name="thumbnail_configuration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfiguration"></a>

```python
thumbnail_configuration: IvsRecordingConfigurationThumbnailConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference">IvsRecordingConfigurationThumbnailConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeouts"></a>

```python
timeouts: IvsRecordingConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference">IvsRecordingConfigurationTimeoutsOutputReference</a>

---

##### `destination_configuration_input`<sup>Optional</sup> <a name="destination_configuration_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfigurationInput"></a>

```python
destination_configuration_input: IvsRecordingConfigurationDestinationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recording_reconnect_window_seconds_input`<sup>Optional</sup> <a name="recording_reconnect_window_seconds_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSecondsInput"></a>

```python
recording_reconnect_window_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `thumbnail_configuration_input`<sup>Optional</sup> <a name="thumbnail_configuration_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfigurationInput"></a>

```python
thumbnail_configuration_input: IvsRecordingConfigurationThumbnailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IvsRecordingConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recording_reconnect_window_seconds`<sup>Required</sup> <a name="recording_reconnect_window_seconds" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSeconds"></a>

```python
recording_reconnect_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IvsRecordingConfigurationConfig <a name="IvsRecordingConfigurationConfig" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_configuration: IvsRecordingConfigurationDestinationConfiguration,
  id: str = None,
  name: str = None,
  recording_reconnect_window_seconds: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  thumbnail_configuration: IvsRecordingConfigurationThumbnailConfiguration = None,
  timeouts: IvsRecordingConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#id IvsRecordingConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#name IvsRecordingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.recordingReconnectWindowSeconds">recording_reconnect_window_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.thumbnailConfiguration">thumbnail_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | thumbnail_configuration block. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_configuration`<sup>Required</sup> <a name="destination_configuration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.destinationConfiguration"></a>

```python
destination_configuration: IvsRecordingConfigurationDestinationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

destination_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#destination_configuration IvsRecordingConfiguration#destination_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#id IvsRecordingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#name IvsRecordingConfiguration#name}.

---

##### `recording_reconnect_window_seconds`<sup>Optional</sup> <a name="recording_reconnect_window_seconds" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.recordingReconnectWindowSeconds"></a>

```python
recording_reconnect_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}.

---

##### `thumbnail_configuration`<sup>Optional</sup> <a name="thumbnail_configuration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.thumbnailConfiguration"></a>

```python
thumbnail_configuration: IvsRecordingConfigurationThumbnailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

thumbnail_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#thumbnail_configuration IvsRecordingConfiguration#thumbnail_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.timeouts"></a>

```python
timeouts: IvsRecordingConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#timeouts IvsRecordingConfiguration#timeouts}

---

### IvsRecordingConfigurationDestinationConfiguration <a name="IvsRecordingConfigurationDestinationConfiguration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration(
  s3: IvsRecordingConfigurationDestinationConfigurationS3
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a></code> | s3 block. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration.property.s3"></a>

```python
s3: IvsRecordingConfigurationDestinationConfigurationS3
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#s3 IvsRecordingConfiguration#s3}

---

### IvsRecordingConfigurationDestinationConfigurationS3 <a name="IvsRecordingConfigurationDestinationConfigurationS3" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3(
  bucket_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#bucket_name IvsRecordingConfiguration#bucket_name}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#bucket_name IvsRecordingConfiguration#bucket_name}.

---

### IvsRecordingConfigurationThumbnailConfiguration <a name="IvsRecordingConfigurationThumbnailConfiguration" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration(
  recording_mode: str = None,
  target_interval_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.recordingMode">recording_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#recording_mode IvsRecordingConfiguration#recording_mode}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.targetIntervalSeconds">target_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#target_interval_seconds IvsRecordingConfiguration#target_interval_seconds}. |

---

##### `recording_mode`<sup>Optional</sup> <a name="recording_mode" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.recordingMode"></a>

```python
recording_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#recording_mode IvsRecordingConfiguration#recording_mode}.

---

##### `target_interval_seconds`<sup>Optional</sup> <a name="target_interval_seconds" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.targetIntervalSeconds"></a>

```python
target_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#target_interval_seconds IvsRecordingConfiguration#target_interval_seconds}.

---

### IvsRecordingConfigurationTimeouts <a name="IvsRecordingConfigurationTimeouts" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#create IvsRecordingConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#delete IvsRecordingConfiguration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#create IvsRecordingConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#delete IvsRecordingConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvsRecordingConfigurationDestinationConfigurationOutputReference <a name="IvsRecordingConfigurationDestinationConfigurationOutputReference" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.putS3">put_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.putS3"></a>

```python
def put_s3(
  bucket_name: str
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.putS3.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_recording_configuration#bucket_name IvsRecordingConfiguration#bucket_name}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference">IvsRecordingConfigurationDestinationConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3"></a>

```python
s3: IvsRecordingConfigurationDestinationConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference">IvsRecordingConfigurationDestinationConfigurationS3OutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3Input"></a>

```python
s3_input: IvsRecordingConfigurationDestinationConfigurationS3
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IvsRecordingConfigurationDestinationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

---


### IvsRecordingConfigurationDestinationConfigurationS3OutputReference <a name="IvsRecordingConfigurationDestinationConfigurationS3OutputReference" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.internalValue"></a>

```python
internal_value: IvsRecordingConfigurationDestinationConfigurationS3
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

---


### IvsRecordingConfigurationThumbnailConfigurationOutputReference <a name="IvsRecordingConfigurationThumbnailConfigurationOutputReference" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetRecordingMode">reset_recording_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetTargetIntervalSeconds">reset_target_interval_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_recording_mode` <a name="reset_recording_mode" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetRecordingMode"></a>

```python
def reset_recording_mode() -> None
```

##### `reset_target_interval_seconds` <a name="reset_target_interval_seconds" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetTargetIntervalSeconds"></a>

```python
def reset_target_interval_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingModeInput">recording_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput">target_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingMode">recording_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSeconds">target_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recording_mode_input`<sup>Optional</sup> <a name="recording_mode_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingModeInput"></a>

```python
recording_mode_input: str
```

- *Type:* str

---

##### `target_interval_seconds_input`<sup>Optional</sup> <a name="target_interval_seconds_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput"></a>

```python
target_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recording_mode`<sup>Required</sup> <a name="recording_mode" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingMode"></a>

```python
recording_mode: str
```

- *Type:* str

---

##### `target_interval_seconds`<sup>Required</sup> <a name="target_interval_seconds" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSeconds"></a>

```python
target_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IvsRecordingConfigurationThumbnailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

---


### IvsRecordingConfigurationTimeoutsOutputReference <a name="IvsRecordingConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivs_recording_configuration

ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IvsRecordingConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>, cdktf.IResolvable]

---



