# `datasyncTask` Submodule <a name="`datasyncTask` Submodule" id="@cdktf/provider-aws.datasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncTask <a name="DatasyncTask" id="@cdktf/provider-aws.datasyncTask.DatasyncTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task aws_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTask(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_location_arn: str,
  source_location_arn: str,
  cloudwatch_log_group_arn: str = None,
  excludes: DatasyncTaskExcludes = None,
  id: str = None,
  includes: DatasyncTaskIncludes = None,
  name: str = None,
  options: DatasyncTaskOptions = None,
  schedule: DatasyncTaskSchedule = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DatasyncTaskTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.destinationLocationArn">destination_location_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.sourceLocationArn">source_location_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | includes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_location_arn`<sup>Required</sup> <a name="destination_location_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.destinationLocationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}.

---

##### `source_location_arn`<sup>Required</sup> <a name="source_location_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.sourceLocationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}.

---

##### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.cloudwatchLogGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}.

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.excludes"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#excludes DatasyncTask#excludes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.includes"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#includes DatasyncTask#includes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#timeouts DatasyncTask#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes">put_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes">put_includes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn">reset_cloudwatch_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetIncludes">reset_includes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_excludes` <a name="put_excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes"></a>

```python
def put_excludes(
  filter_type: str = None,
  value: str = None
) -> None
```

###### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes.parameter.filterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

##### `put_includes` <a name="put_includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes"></a>

```python
def put_includes(
  filter_type: str = None,
  value: str = None
) -> None
```

###### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes.parameter.filterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

##### `put_options` <a name="put_options" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions"></a>

```python
def put_options(
  atime: str = None,
  bytes_per_second: typing.Union[int, float] = None,
  gid: str = None,
  log_level: str = None,
  mtime: str = None,
  overwrite_mode: str = None,
  posix_permissions: str = None,
  preserve_deleted_files: str = None,
  preserve_devices: str = None,
  security_descriptor_copy_flags: str = None,
  task_queueing: str = None,
  transfer_mode: str = None,
  uid: str = None,
  verify_mode: str = None
) -> None
```

###### `atime`<sup>Optional</sup> <a name="atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.atime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#atime DatasyncTask#atime}.

---

###### `bytes_per_second`<sup>Optional</sup> <a name="bytes_per_second" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.bytesPerSecond"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}.

---

###### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.gid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#gid DatasyncTask#gid}.

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.logLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#log_level DatasyncTask#log_level}.

---

###### `mtime`<sup>Optional</sup> <a name="mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.mtime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#mtime DatasyncTask#mtime}.

---

###### `overwrite_mode`<sup>Optional</sup> <a name="overwrite_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.overwriteMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}.

---

###### `posix_permissions`<sup>Optional</sup> <a name="posix_permissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.posixPermissions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#posix_permissions DatasyncTask#posix_permissions}.

---

###### `preserve_deleted_files`<sup>Optional</sup> <a name="preserve_deleted_files" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.preserveDeletedFiles"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}.

---

###### `preserve_devices`<sup>Optional</sup> <a name="preserve_devices" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.preserveDevices"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_devices DatasyncTask#preserve_devices}.

---

###### `security_descriptor_copy_flags`<sup>Optional</sup> <a name="security_descriptor_copy_flags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.securityDescriptorCopyFlags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}.

---

###### `task_queueing`<sup>Optional</sup> <a name="task_queueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.taskQueueing"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#task_queueing DatasyncTask#task_queueing}.

---

###### `transfer_mode`<sup>Optional</sup> <a name="transfer_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.transferMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#transfer_mode DatasyncTask#transfer_mode}.

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.uid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#uid DatasyncTask#uid}.

---

###### `verify_mode`<sup>Optional</sup> <a name="verify_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.verifyMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#verify_mode DatasyncTask#verify_mode}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule"></a>

```python
def put_schedule(
  schedule_expression: str
) -> None
```

###### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule_expression DatasyncTask#schedule_expression}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#create DatasyncTask#create}.

---

##### `reset_cloudwatch_log_group_arn` <a name="reset_cloudwatch_log_group_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn"></a>

```python
def reset_cloudwatch_log_group_arn() -> None
```

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_includes` <a name="reset_includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetIncludes"></a>

```python
def reset_includes() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference">DatasyncTaskIncludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput">cloudwatch_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArnInput">destination_location_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludesInput">excludes_input</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includesInput">includes_input</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArnInput">source_location_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArn">destination_location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArn">source_location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludes"></a>

```python
excludes: DatasyncTaskExcludesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includes"></a>

```python
includes: DatasyncTaskIncludesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference">DatasyncTaskIncludesOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.options"></a>

```python
options: DatasyncTaskOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.schedule"></a>

```python
schedule: DatasyncTaskScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeouts"></a>

```python
timeouts: DatasyncTaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a>

---

##### `cloudwatch_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_log_group_arn_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput"></a>

```python
cloudwatch_log_group_arn_input: str
```

- *Type:* str

---

##### `destination_location_arn_input`<sup>Optional</sup> <a name="destination_location_arn_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArnInput"></a>

```python
destination_location_arn_input: str
```

- *Type:* str

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludesInput"></a>

```python
excludes_input: DatasyncTaskExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `includes_input`<sup>Optional</sup> <a name="includes_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includesInput"></a>

```python
includes_input: DatasyncTaskIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.optionsInput"></a>

```python
options_input: DatasyncTaskOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.scheduleInput"></a>

```python
schedule_input: DatasyncTaskSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `source_location_arn_input`<sup>Optional</sup> <a name="source_location_arn_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArnInput"></a>

```python
source_location_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DatasyncTaskTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>, cdktf.IResolvable]

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `destination_location_arn`<sup>Required</sup> <a name="destination_location_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArn"></a>

```python
destination_location_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_location_arn`<sup>Required</sup> <a name="source_location_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArn"></a>

```python
source_location_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncTaskConfig <a name="DatasyncTaskConfig" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_location_arn: str,
  source_location_arn: str,
  cloudwatch_log_group_arn: str = None,
  excludes: DatasyncTaskExcludes = None,
  id: str = None,
  includes: DatasyncTaskIncludes = None,
  name: str = None,
  options: DatasyncTaskOptions = None,
  schedule: DatasyncTaskSchedule = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DatasyncTaskTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn">destination_location_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn">source_location_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | includes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_location_arn`<sup>Required</sup> <a name="destination_location_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn"></a>

```python
destination_location_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}.

---

##### `source_location_arn`<sup>Required</sup> <a name="source_location_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn"></a>

```python
source_location_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}.

---

##### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}.

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.excludes"></a>

```python
excludes: DatasyncTaskExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#excludes DatasyncTask#excludes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.includes"></a>

```python
includes: DatasyncTaskIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#includes DatasyncTask#includes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.options"></a>

```python
options: DatasyncTaskOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.schedule"></a>

```python
schedule: DatasyncTaskSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.timeouts"></a>

```python
timeouts: DatasyncTaskTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#timeouts DatasyncTask#timeouts}

---

### DatasyncTaskExcludes <a name="DatasyncTaskExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskExcludes(
  filter_type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}. |

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

### DatasyncTaskIncludes <a name="DatasyncTaskIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskIncludes(
  filter_type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}. |

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

### DatasyncTaskOptions <a name="DatasyncTaskOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskOptions(
  atime: str = None,
  bytes_per_second: typing.Union[int, float] = None,
  gid: str = None,
  log_level: str = None,
  mtime: str = None,
  overwrite_mode: str = None,
  posix_permissions: str = None,
  preserve_deleted_files: str = None,
  preserve_devices: str = None,
  security_descriptor_copy_flags: str = None,
  task_queueing: str = None,
  transfer_mode: str = None,
  uid: str = None,
  verify_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.atime">atime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#atime DatasyncTask#atime}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond">bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.gid">gid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#gid DatasyncTask#gid}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#log_level DatasyncTask#log_level}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.mtime">mtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#mtime DatasyncTask#mtime}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.overwriteMode">overwrite_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.posixPermissions">posix_permissions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#posix_permissions DatasyncTask#posix_permissions}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles">preserve_deleted_files</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDevices">preserve_devices</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_devices DatasyncTask#preserve_devices}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags">security_descriptor_copy_flags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.taskQueueing">task_queueing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#task_queueing DatasyncTask#task_queueing}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.transferMode">transfer_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#transfer_mode DatasyncTask#transfer_mode}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.uid">uid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#uid DatasyncTask#uid}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.verifyMode">verify_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#verify_mode DatasyncTask#verify_mode}. |

---

##### `atime`<sup>Optional</sup> <a name="atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.atime"></a>

```python
atime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#atime DatasyncTask#atime}.

---

##### `bytes_per_second`<sup>Optional</sup> <a name="bytes_per_second" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond"></a>

```python
bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}.

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.gid"></a>

```python
gid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#gid DatasyncTask#gid}.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#log_level DatasyncTask#log_level}.

---

##### `mtime`<sup>Optional</sup> <a name="mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.mtime"></a>

```python
mtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#mtime DatasyncTask#mtime}.

---

##### `overwrite_mode`<sup>Optional</sup> <a name="overwrite_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.overwriteMode"></a>

```python
overwrite_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}.

---

##### `posix_permissions`<sup>Optional</sup> <a name="posix_permissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.posixPermissions"></a>

```python
posix_permissions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#posix_permissions DatasyncTask#posix_permissions}.

---

##### `preserve_deleted_files`<sup>Optional</sup> <a name="preserve_deleted_files" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles"></a>

```python
preserve_deleted_files: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}.

---

##### `preserve_devices`<sup>Optional</sup> <a name="preserve_devices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDevices"></a>

```python
preserve_devices: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_devices DatasyncTask#preserve_devices}.

---

##### `security_descriptor_copy_flags`<sup>Optional</sup> <a name="security_descriptor_copy_flags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags"></a>

```python
security_descriptor_copy_flags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}.

---

##### `task_queueing`<sup>Optional</sup> <a name="task_queueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.taskQueueing"></a>

```python
task_queueing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#task_queueing DatasyncTask#task_queueing}.

---

##### `transfer_mode`<sup>Optional</sup> <a name="transfer_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.transferMode"></a>

```python
transfer_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#transfer_mode DatasyncTask#transfer_mode}.

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.uid"></a>

```python
uid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#uid DatasyncTask#uid}.

---

##### `verify_mode`<sup>Optional</sup> <a name="verify_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.verifyMode"></a>

```python
verify_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#verify_mode DatasyncTask#verify_mode}.

---

### DatasyncTaskSchedule <a name="DatasyncTaskSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskSchedule(
  schedule_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule_expression DatasyncTask#schedule_expression}. |

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule_expression DatasyncTask#schedule_expression}.

---

### DatasyncTaskTimeouts <a name="DatasyncTaskTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#create DatasyncTask#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#create DatasyncTask#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncTaskExcludesOutputReference <a name="DatasyncTaskExcludesOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskExcludesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue"></a>

```python
internal_value: DatasyncTaskExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---


### DatasyncTaskIncludesOutputReference <a name="DatasyncTaskIncludesOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskIncludesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue"></a>

```python
internal_value: DatasyncTaskIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---


### DatasyncTaskOptionsOutputReference <a name="DatasyncTaskOptionsOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime">reset_atime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond">reset_bytes_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime">reset_mtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode">reset_overwrite_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions">reset_posix_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles">reset_preserve_deleted_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices">reset_preserve_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags">reset_security_descriptor_copy_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing">reset_task_queueing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode">reset_transfer_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid">reset_uid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode">reset_verify_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_atime` <a name="reset_atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime"></a>

```python
def reset_atime() -> None
```

##### `reset_bytes_per_second` <a name="reset_bytes_per_second" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond"></a>

```python
def reset_bytes_per_second() -> None
```

##### `reset_gid` <a name="reset_gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_mtime` <a name="reset_mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime"></a>

```python
def reset_mtime() -> None
```

##### `reset_overwrite_mode` <a name="reset_overwrite_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode"></a>

```python
def reset_overwrite_mode() -> None
```

##### `reset_posix_permissions` <a name="reset_posix_permissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions"></a>

```python
def reset_posix_permissions() -> None
```

##### `reset_preserve_deleted_files` <a name="reset_preserve_deleted_files" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles"></a>

```python
def reset_preserve_deleted_files() -> None
```

##### `reset_preserve_devices` <a name="reset_preserve_devices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices"></a>

```python
def reset_preserve_devices() -> None
```

##### `reset_security_descriptor_copy_flags` <a name="reset_security_descriptor_copy_flags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags"></a>

```python
def reset_security_descriptor_copy_flags() -> None
```

##### `reset_task_queueing` <a name="reset_task_queueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing"></a>

```python
def reset_task_queueing() -> None
```

##### `reset_transfer_mode` <a name="reset_transfer_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode"></a>

```python
def reset_transfer_mode() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```

##### `reset_verify_mode` <a name="reset_verify_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode"></a>

```python
def reset_verify_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput">atime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput">bytes_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput">gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput">mtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput">overwrite_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput">posix_permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput">preserve_deleted_files_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput">preserve_devices_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput">security_descriptor_copy_flags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput">task_queueing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput">transfer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput">verify_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime">atime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond">bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime">mtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode">overwrite_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions">posix_permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">preserve_deleted_files</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices">preserve_devices</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">security_descriptor_copy_flags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing">task_queueing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode">transfer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode">verify_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `atime_input`<sup>Optional</sup> <a name="atime_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput"></a>

```python
atime_input: str
```

- *Type:* str

---

##### `bytes_per_second_input`<sup>Optional</sup> <a name="bytes_per_second_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput"></a>

```python
bytes_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput"></a>

```python
gid_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `mtime_input`<sup>Optional</sup> <a name="mtime_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput"></a>

```python
mtime_input: str
```

- *Type:* str

---

##### `overwrite_mode_input`<sup>Optional</sup> <a name="overwrite_mode_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput"></a>

```python
overwrite_mode_input: str
```

- *Type:* str

---

##### `posix_permissions_input`<sup>Optional</sup> <a name="posix_permissions_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput"></a>

```python
posix_permissions_input: str
```

- *Type:* str

---

##### `preserve_deleted_files_input`<sup>Optional</sup> <a name="preserve_deleted_files_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput"></a>

```python
preserve_deleted_files_input: str
```

- *Type:* str

---

##### `preserve_devices_input`<sup>Optional</sup> <a name="preserve_devices_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput"></a>

```python
preserve_devices_input: str
```

- *Type:* str

---

##### `security_descriptor_copy_flags_input`<sup>Optional</sup> <a name="security_descriptor_copy_flags_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput"></a>

```python
security_descriptor_copy_flags_input: str
```

- *Type:* str

---

##### `task_queueing_input`<sup>Optional</sup> <a name="task_queueing_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput"></a>

```python
task_queueing_input: str
```

- *Type:* str

---

##### `transfer_mode_input`<sup>Optional</sup> <a name="transfer_mode_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput"></a>

```python
transfer_mode_input: str
```

- *Type:* str

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `verify_mode_input`<sup>Optional</sup> <a name="verify_mode_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput"></a>

```python
verify_mode_input: str
```

- *Type:* str

---

##### `atime`<sup>Required</sup> <a name="atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime"></a>

```python
atime: str
```

- *Type:* str

---

##### `bytes_per_second`<sup>Required</sup> <a name="bytes_per_second" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```python
bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `mtime`<sup>Required</sup> <a name="mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime"></a>

```python
mtime: str
```

- *Type:* str

---

##### `overwrite_mode`<sup>Required</sup> <a name="overwrite_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```python
overwrite_mode: str
```

- *Type:* str

---

##### `posix_permissions`<sup>Required</sup> <a name="posix_permissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```python
posix_permissions: str
```

- *Type:* str

---

##### `preserve_deleted_files`<sup>Required</sup> <a name="preserve_deleted_files" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```python
preserve_deleted_files: str
```

- *Type:* str

---

##### `preserve_devices`<sup>Required</sup> <a name="preserve_devices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```python
preserve_devices: str
```

- *Type:* str

---

##### `security_descriptor_copy_flags`<sup>Required</sup> <a name="security_descriptor_copy_flags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```python
security_descriptor_copy_flags: str
```

- *Type:* str

---

##### `task_queueing`<sup>Required</sup> <a name="task_queueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```python
task_queueing: str
```

- *Type:* str

---

##### `transfer_mode`<sup>Required</sup> <a name="transfer_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode"></a>

```python
transfer_mode: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `verify_mode`<sup>Required</sup> <a name="verify_mode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```python
verify_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DatasyncTaskOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---


### DatasyncTaskScheduleOutputReference <a name="DatasyncTaskScheduleOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DatasyncTaskSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---


### DatasyncTaskTimeoutsOutputReference <a name="DatasyncTaskTimeoutsOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_task

datasyncTask.DatasyncTaskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DatasyncTaskTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>, cdktf.IResolvable]

---



