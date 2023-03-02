# `ivschatLoggingConfiguration` Submodule <a name="`ivschatLoggingConfiguration` Submodule" id="@cdktf/provider-aws.ivschatLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvschatLoggingConfiguration <a name="IvschatLoggingConfiguration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration aws_ivschat_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_configuration: IvschatLoggingConfigurationDestinationConfiguration = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: IvschatLoggingConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#id IvschatLoggingConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#name IvschatLoggingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags IvschatLoggingConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags_all IvschatLoggingConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_configuration`<sup>Optional</sup> <a name="destination_configuration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.destinationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

destination_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#destination_configuration IvschatLoggingConfiguration#destination_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#id IvschatLoggingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#name IvschatLoggingConfiguration#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags IvschatLoggingConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags_all IvschatLoggingConfiguration#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#timeouts IvschatLoggingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration">put_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetDestinationConfiguration">reset_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_destination_configuration` <a name="put_destination_configuration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration"></a>

```python
def put_destination_configuration(
  cloudwatch_logs: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs = None,
  firehose: IvschatLoggingConfigurationDestinationConfigurationFirehose = None,
  s3: IvschatLoggingConfigurationDestinationConfigurationS3 = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#cloudwatch_logs IvschatLoggingConfiguration#cloudwatch_logs}

---

###### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration.parameter.firehose"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#firehose IvschatLoggingConfiguration#firehose}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#s3 IvschatLoggingConfiguration#s3}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#create IvschatLoggingConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delete IvschatLoggingConfiguration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#update IvschatLoggingConfiguration#update}.

---

##### `reset_destination_configuration` <a name="reset_destination_configuration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetDestinationConfiguration"></a>

```python
def reset_destination_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference">IvschatLoggingConfigurationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference">IvschatLoggingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfigurationInput">destination_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_configuration`<sup>Required</sup> <a name="destination_configuration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfiguration"></a>

```python
destination_configuration: IvschatLoggingConfigurationDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference">IvschatLoggingConfigurationDestinationConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.timeouts"></a>

```python
timeouts: IvschatLoggingConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference">IvschatLoggingConfigurationTimeoutsOutputReference</a>

---

##### `destination_configuration_input`<sup>Optional</sup> <a name="destination_configuration_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfigurationInput"></a>

```python
destination_configuration_input: IvschatLoggingConfigurationDestinationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IvschatLoggingConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IvschatLoggingConfigurationConfig <a name="IvschatLoggingConfigurationConfig" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_configuration: IvschatLoggingConfigurationDestinationConfiguration = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: IvschatLoggingConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#id IvschatLoggingConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#name IvschatLoggingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags IvschatLoggingConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags_all IvschatLoggingConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_configuration`<sup>Optional</sup> <a name="destination_configuration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.destinationConfiguration"></a>

```python
destination_configuration: IvschatLoggingConfigurationDestinationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

destination_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#destination_configuration IvschatLoggingConfiguration#destination_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#id IvschatLoggingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#name IvschatLoggingConfiguration#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags IvschatLoggingConfiguration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags_all IvschatLoggingConfiguration#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.timeouts"></a>

```python
timeouts: IvschatLoggingConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#timeouts IvschatLoggingConfiguration#timeouts}

---

### IvschatLoggingConfigurationDestinationConfiguration <a name="IvschatLoggingConfigurationDestinationConfiguration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration(
  cloudwatch_logs: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs = None,
  firehose: IvschatLoggingConfigurationDestinationConfigurationFirehose = None,
  s3: IvschatLoggingConfigurationDestinationConfigurationS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.firehose">firehose</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a></code> | s3 block. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#cloudwatch_logs IvschatLoggingConfiguration#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.firehose"></a>

```python
firehose: IvschatLoggingConfigurationDestinationConfigurationFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#firehose IvschatLoggingConfiguration#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.s3"></a>

```python
s3: IvschatLoggingConfigurationDestinationConfigurationS3
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#s3 IvschatLoggingConfiguration#s3}

---

### IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs <a name="IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs(
  log_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#log_group_name IvschatLoggingConfiguration#log_group_name}. |

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#log_group_name IvschatLoggingConfiguration#log_group_name}.

---

### IvschatLoggingConfigurationDestinationConfigurationFirehose <a name="IvschatLoggingConfigurationDestinationConfigurationFirehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose(
  delivery_stream_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose.property.deliveryStreamName">delivery_stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delivery_stream_name IvschatLoggingConfiguration#delivery_stream_name}. |

---

##### `delivery_stream_name`<sup>Required</sup> <a name="delivery_stream_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose.property.deliveryStreamName"></a>

```python
delivery_stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delivery_stream_name IvschatLoggingConfiguration#delivery_stream_name}.

---

### IvschatLoggingConfigurationDestinationConfigurationS3 <a name="IvschatLoggingConfigurationDestinationConfigurationS3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3(
  bucket_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#bucket_name IvschatLoggingConfiguration#bucket_name}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#bucket_name IvschatLoggingConfiguration#bucket_name}.

---

### IvschatLoggingConfigurationTimeouts <a name="IvschatLoggingConfigurationTimeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#create IvschatLoggingConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delete IvschatLoggingConfiguration#delete}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#update IvschatLoggingConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#create IvschatLoggingConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delete IvschatLoggingConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#update IvschatLoggingConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

---


### IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamNameInput">delivery_stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamName">delivery_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_name_input`<sup>Optional</sup> <a name="delivery_stream_name_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```python
delivery_stream_name_input: str
```

- *Type:* str

---

##### `delivery_stream_name`<sup>Required</sup> <a name="delivery_stream_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamName"></a>

```python
delivery_stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: IvschatLoggingConfigurationDestinationConfigurationFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

---


### IvschatLoggingConfigurationDestinationConfigurationOutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationOutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putFirehose">put_firehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetFirehose">reset_firehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  log_group_name: str
) -> None
```

###### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putCloudwatchLogs.parameter.logGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#log_group_name IvschatLoggingConfiguration#log_group_name}.

---

##### `put_firehose` <a name="put_firehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putFirehose"></a>

```python
def put_firehose(
  delivery_stream_name: str
) -> None
```

###### `delivery_stream_name`<sup>Required</sup> <a name="delivery_stream_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putFirehose.parameter.deliveryStreamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delivery_stream_name IvschatLoggingConfiguration#delivery_stream_name}.

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putS3"></a>

```python
def put_s3(
  bucket_name: str
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putS3.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#bucket_name IvschatLoggingConfiguration#bucket_name}.

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_firehose` <a name="reset_firehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetFirehose"></a>

```python
def reset_firehose() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference">IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference">IvschatLoggingConfigurationDestinationConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehoseInput">firehose_input</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehose"></a>

```python
firehose: IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference">IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3"></a>

```python
s3: IvschatLoggingConfigurationDestinationConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference">IvschatLoggingConfigurationDestinationConfigurationS3OutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

---

##### `firehose_input`<sup>Optional</sup> <a name="firehose_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehoseInput"></a>

```python
firehose_input: IvschatLoggingConfigurationDestinationConfigurationFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3Input"></a>

```python
s3_input: IvschatLoggingConfigurationDestinationConfigurationS3
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IvschatLoggingConfigurationDestinationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

---


### IvschatLoggingConfigurationDestinationConfigurationS3OutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationS3OutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.internalValue"></a>

```python
internal_value: IvschatLoggingConfigurationDestinationConfigurationS3
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

---


### IvschatLoggingConfigurationTimeoutsOutputReference <a name="IvschatLoggingConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ivschat_logging_configuration

ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IvschatLoggingConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a>, cdktf.IResolvable]

---



