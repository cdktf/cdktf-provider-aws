# `autoscalingSchedule` Submodule <a name="`autoscalingSchedule` Submodule" id="@cdktf/provider-aws.autoscalingSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingSchedule <a name="AutoscalingSchedule" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule aws_autoscaling_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_schedule

autoscalingSchedule.AutoscalingSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_group_name: str,
  scheduled_action_name: str,
  desired_capacity: typing.Union[int, float] = None,
  end_time: str = None,
  id: str = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  recurrence: str = None,
  start_time: str = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scheduledActionName">scheduled_action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#end_time AutoscalingSchedule#end_time}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#id AutoscalingSchedule#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#max_size AutoscalingSchedule#max_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#min_size AutoscalingSchedule#min_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.recurrence">recurrence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#start_time AutoscalingSchedule#start_time}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.autoscalingGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}.

---

##### `scheduled_action_name`<sup>Required</sup> <a name="scheduled_action_name" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scheduledActionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}.

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.desiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#end_time AutoscalingSchedule#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#id AutoscalingSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#max_size AutoscalingSchedule#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#min_size AutoscalingSchedule#min_size}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.recurrence"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#start_time AutoscalingSchedule#start_time}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetDesiredCapacity">reset_desired_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetRecurrence">reset_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_desired_capacity` <a name="reset_desired_capacity" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetDesiredCapacity"></a>

```python
def reset_desired_capacity() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_schedule

autoscalingSchedule.AutoscalingSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_schedule

autoscalingSchedule.AutoscalingSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_schedule

autoscalingSchedule.AutoscalingSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupNameInput">autoscaling_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrenceInput">recurrence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionNameInput">scheduled_action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrence">recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionName">scheduled_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `autoscaling_group_name_input`<sup>Optional</sup> <a name="autoscaling_group_name_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupNameInput"></a>

```python
autoscaling_group_name_input: str
```

- *Type:* str

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacityInput"></a>

```python
desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrenceInput"></a>

```python
recurrence_input: str
```

- *Type:* str

---

##### `scheduled_action_name_input`<sup>Optional</sup> <a name="scheduled_action_name_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionNameInput"></a>

```python
scheduled_action_name_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupName"></a>

```python
autoscaling_group_name: str
```

- *Type:* str

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrence"></a>

```python
recurrence: str
```

- *Type:* str

---

##### `scheduled_action_name`<sup>Required</sup> <a name="scheduled_action_name" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionName"></a>

```python
scheduled_action_name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingScheduleConfig <a name="AutoscalingScheduleConfig" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_schedule

autoscalingSchedule.AutoscalingScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_group_name: str,
  scheduled_action_name: str,
  desired_capacity: typing.Union[int, float] = None,
  end_time: str = None,
  id: str = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  recurrence: str = None,
  start_time: str = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.scheduledActionName">scheduled_action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#end_time AutoscalingSchedule#end_time}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#id AutoscalingSchedule#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#max_size AutoscalingSchedule#max_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#min_size AutoscalingSchedule#min_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.recurrence">recurrence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#start_time AutoscalingSchedule#start_time}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.autoscalingGroupName"></a>

```python
autoscaling_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}.

---

##### `scheduled_action_name`<sup>Required</sup> <a name="scheduled_action_name" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.scheduledActionName"></a>

```python
scheduled_action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}.

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#end_time AutoscalingSchedule#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#id AutoscalingSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#max_size AutoscalingSchedule#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#min_size AutoscalingSchedule#min_size}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.recurrence"></a>

```python
recurrence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#start_time AutoscalingSchedule#start_time}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}.

---



