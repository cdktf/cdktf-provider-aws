# `cloudwatchMetricStream` Submodule <a name="`cloudwatchMetricStream` Submodule" id="@cdktf/provider-aws.cloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricStream <a name="CloudwatchMetricStream" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream aws_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStream(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firehose_arn: str,
  output_format: str,
  role_arn: str,
  exclude_filter: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamExcludeFilter]] = None,
  id: str = None,
  include_filter: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamIncludeFilter]] = None,
  name: str = None,
  name_prefix: str = None,
  statistics_configuration: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfiguration]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: CloudwatchMetricStreamTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.firehoseArn">firehose_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.outputFormat">output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.excludeFilter">exclude_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>]]</code> | exclude_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.includeFilter">include_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>]]</code> | include_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.statisticsConfiguration">statistics_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>]]</code> | statistics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firehose_arn`<sup>Required</sup> <a name="firehose_arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.firehoseArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}.

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.outputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}.

---

##### `exclude_filter`<sup>Optional</sup> <a name="exclude_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.excludeFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>]]

exclude_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#exclude_filter CloudwatchMetricStream#exclude_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_filter`<sup>Optional</sup> <a name="include_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.includeFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>]]

include_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_filter CloudwatchMetricStream#include_filter}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}.

---

##### `statistics_configuration`<sup>Optional</sup> <a name="statistics_configuration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.statisticsConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>]]

statistics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#statistics_configuration CloudwatchMetricStream#statistics_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#timeouts CloudwatchMetricStream#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter">put_exclude_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter">put_include_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration">put_statistics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter">reset_exclude_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter">reset_include_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfiguration">reset_statistics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_exclude_filter` <a name="put_exclude_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter"></a>

```python
def put_exclude_filter(
  value: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamExcludeFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>]]

---

##### `put_include_filter` <a name="put_include_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter"></a>

```python
def put_include_filter(
  value: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamIncludeFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>]]

---

##### `put_statistics_configuration` <a name="put_statistics_configuration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration"></a>

```python
def put_statistics_configuration(
  value: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#create CloudwatchMetricStream#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#update CloudwatchMetricStream#update}.

---

##### `reset_exclude_filter` <a name="reset_exclude_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter"></a>

```python
def reset_exclude_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_filter` <a name="reset_include_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter"></a>

```python
def reset_include_filter() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_statistics_configuration` <a name="reset_statistics_configuration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfiguration"></a>

```python
def reset_statistics_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter">exclude_filter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter">include_filter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate">last_update_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfiguration">statistics_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList">CloudwatchMetricStreamStatisticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput">exclude_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput">firehose_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput">include_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationInput">statistics_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn">firehose_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `exclude_filter`<sup>Required</sup> <a name="exclude_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter"></a>

```python
exclude_filter: CloudwatchMetricStreamExcludeFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a>

---

##### `include_filter`<sup>Required</sup> <a name="include_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter"></a>

```python
include_filter: CloudwatchMetricStreamIncludeFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a>

---

##### `last_update_date`<sup>Required</sup> <a name="last_update_date" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate"></a>

```python
last_update_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `statistics_configuration`<sup>Required</sup> <a name="statistics_configuration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfiguration"></a>

```python
statistics_configuration: CloudwatchMetricStreamStatisticsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList">CloudwatchMetricStreamStatisticsConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts"></a>

```python
timeouts: CloudwatchMetricStreamTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a>

---

##### `exclude_filter_input`<sup>Optional</sup> <a name="exclude_filter_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput"></a>

```python
exclude_filter_input: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamExcludeFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>]]

---

##### `firehose_arn_input`<sup>Optional</sup> <a name="firehose_arn_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput"></a>

```python
firehose_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_filter_input`<sup>Optional</sup> <a name="include_filter_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput"></a>

```python
include_filter_input: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamIncludeFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `statistics_configuration_input`<sup>Optional</sup> <a name="statistics_configuration_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationInput"></a>

```python
statistics_configuration_input: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CloudwatchMetricStreamTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>, cdktf.IResolvable]

---

##### `firehose_arn`<sup>Required</sup> <a name="firehose_arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn"></a>

```python
firehose_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricStreamConfig <a name="CloudwatchMetricStreamConfig" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firehose_arn: str,
  output_format: str,
  role_arn: str,
  exclude_filter: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamExcludeFilter]] = None,
  id: str = None,
  include_filter: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamIncludeFilter]] = None,
  name: str = None,
  name_prefix: str = None,
  statistics_configuration: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfiguration]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: CloudwatchMetricStreamTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn">firehose_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat">output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter">exclude_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>]]</code> | exclude_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter">include_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>]]</code> | include_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfiguration">statistics_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>]]</code> | statistics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firehose_arn`<sup>Required</sup> <a name="firehose_arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn"></a>

```python
firehose_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}.

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}.

---

##### `exclude_filter`<sup>Optional</sup> <a name="exclude_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter"></a>

```python
exclude_filter: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamExcludeFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>]]

exclude_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#exclude_filter CloudwatchMetricStream#exclude_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_filter`<sup>Optional</sup> <a name="include_filter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter"></a>

```python
include_filter: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamIncludeFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>]]

include_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_filter CloudwatchMetricStream#include_filter}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}.

---

##### `statistics_configuration`<sup>Optional</sup> <a name="statistics_configuration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfiguration"></a>

```python
statistics_configuration: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>]]

statistics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#statistics_configuration CloudwatchMetricStream#statistics_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts"></a>

```python
timeouts: CloudwatchMetricStreamTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#timeouts CloudwatchMetricStream#timeouts}

---

### CloudwatchMetricStreamExcludeFilter <a name="CloudwatchMetricStreamExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter(
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamIncludeFilter <a name="CloudwatchMetricStreamIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter(
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamStatisticsConfiguration <a name="CloudwatchMetricStreamStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration(
  additional_statistics: typing.List[str],
  include_metric: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfigurationIncludeMetric]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.additionalStatistics">additional_statistics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.includeMetric">include_metric</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>]]</code> | include_metric block. |

---

##### `additional_statistics`<sup>Required</sup> <a name="additional_statistics" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.additionalStatistics"></a>

```python
additional_statistics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}.

---

##### `include_metric`<sup>Required</sup> <a name="include_metric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.includeMetric"></a>

```python
include_metric: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfigurationIncludeMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>]]

include_metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_metric CloudwatchMetricStream#include_metric}

---

### CloudwatchMetricStreamStatisticsConfigurationIncludeMetric <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric(
  metric_name: str,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamTimeouts <a name="CloudwatchMetricStreamTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#create CloudwatchMetricStream#create}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#update CloudwatchMetricStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#create CloudwatchMetricStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#update CloudwatchMetricStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricStreamExcludeFilterList <a name="CloudwatchMetricStreamExcludeFilterList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricStreamExcludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamExcludeFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>]]

---


### CloudwatchMetricStreamExcludeFilterOutputReference <a name="CloudwatchMetricStreamExcludeFilterOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchMetricStreamExcludeFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>, cdktf.IResolvable]

---


### CloudwatchMetricStreamIncludeFilterList <a name="CloudwatchMetricStreamIncludeFilterList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricStreamIncludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamIncludeFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>]]

---


### CloudwatchMetricStreamIncludeFilterOutputReference <a name="CloudwatchMetricStreamIncludeFilterOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchMetricStreamIncludeFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>, cdktf.IResolvable]

---


### CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfigurationIncludeMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>]]

---


### CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchMetricStreamStatisticsConfigurationIncludeMetric, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>, cdktf.IResolvable]

---


### CloudwatchMetricStreamStatisticsConfigurationList <a name="CloudwatchMetricStreamStatisticsConfigurationList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricStreamStatisticsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>]]

---


### CloudwatchMetricStreamStatisticsConfigurationOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric">put_include_metric</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_include_metric` <a name="put_include_metric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric"></a>

```python
def put_include_metric(
  value: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfigurationIncludeMetric]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetric">include_metric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList">CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatisticsInput">additional_statistics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetricInput">include_metric_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatistics">additional_statistics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_metric`<sup>Required</sup> <a name="include_metric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetric"></a>

```python
include_metric: CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList">CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList</a>

---

##### `additional_statistics_input`<sup>Optional</sup> <a name="additional_statistics_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatisticsInput"></a>

```python
additional_statistics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_metric_input`<sup>Optional</sup> <a name="include_metric_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetricInput"></a>

```python
include_metric_input: typing.Union[IResolvable, typing.List[CloudwatchMetricStreamStatisticsConfigurationIncludeMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric">CloudwatchMetricStreamStatisticsConfigurationIncludeMetric</a>]]

---

##### `additional_statistics`<sup>Required</sup> <a name="additional_statistics" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatistics"></a>

```python
additional_statistics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchMetricStreamStatisticsConfiguration, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration">CloudwatchMetricStreamStatisticsConfiguration</a>, cdktf.IResolvable]

---


### CloudwatchMetricStreamTimeoutsOutputReference <a name="CloudwatchMetricStreamTimeoutsOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchMetricStreamTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>, cdktf.IResolvable]

---



