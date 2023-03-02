# `schedulerSchedule` Submodule <a name="`schedulerSchedule` Submodule" id="@cdktf/provider-aws.schedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchedulerSchedule <a name="SchedulerSchedule" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule aws_scheduler_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  flexible_time_window: SchedulerScheduleFlexibleTimeWindow,
  schedule_expression: str,
  target: SchedulerScheduleTarget,
  description: str = None,
  end_date: str = None,
  group_name: str = None,
  id: str = None,
  kms_key_arn: str = None,
  name: str = None,
  name_prefix: str = None,
  schedule_expression_timezone: str = None,
  start_date: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.flexibleTimeWindow">flexible_time_window</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | flexible_time_window block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#description SchedulerSchedule#description}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#end_date SchedulerSchedule#end_date}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#group_name SchedulerSchedule#group_name}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#id SchedulerSchedule#id}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name SchedulerSchedule#name}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name_prefix SchedulerSchedule#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#start_date SchedulerSchedule#start_date}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#state SchedulerSchedule#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `flexible_time_window`<sup>Required</sup> <a name="flexible_time_window" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.flexibleTimeWindow"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

flexible_time_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#target SchedulerSchedule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#description SchedulerSchedule#description}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.endDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#end_date SchedulerSchedule#end_date}.

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.groupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#group_name SchedulerSchedule#group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#id SchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name SchedulerSchedule#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name_prefix SchedulerSchedule#name_prefix}.

---

##### `schedule_expression_timezone`<sup>Optional</sup> <a name="schedule_expression_timezone" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpressionTimezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}.

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.startDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#start_date SchedulerSchedule#start_date}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#state SchedulerSchedule#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow">put_flexible_time_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone">reset_schedule_expression_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_flexible_time_window` <a name="put_flexible_time_window" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow"></a>

```python
def put_flexible_time_window(
  mode: str,
  maximum_window_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#mode SchedulerSchedule#mode}.

---

###### `maximum_window_in_minutes`<sup>Optional</sup> <a name="maximum_window_in_minutes" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow.parameter.maximumWindowInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}.

---

##### `put_target` <a name="put_target" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget"></a>

```python
def put_target(
  arn: str,
  role_arn: str,
  dead_letter_config: SchedulerScheduleTargetDeadLetterConfig = None,
  ecs_parameters: SchedulerScheduleTargetEcsParameters = None,
  eventbridge_parameters: SchedulerScheduleTargetEventbridgeParameters = None,
  input: str = None,
  kinesis_parameters: SchedulerScheduleTargetKinesisParameters = None,
  retry_policy: SchedulerScheduleTargetRetryPolicy = None,
  sagemaker_pipeline_parameters: SchedulerScheduleTargetSagemakerPipelineParameters = None,
  sqs_parameters: SchedulerScheduleTargetSqsParameters = None
) -> None
```

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#arn SchedulerSchedule#arn}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#role_arn SchedulerSchedule#role_arn}.

---

###### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.deadLetterConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#dead_letter_config SchedulerSchedule#dead_letter_config}

---

###### `ecs_parameters`<sup>Optional</sup> <a name="ecs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.ecsParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

ecs_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#ecs_parameters SchedulerSchedule#ecs_parameters}

---

###### `eventbridge_parameters`<sup>Optional</sup> <a name="eventbridge_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.eventbridgeParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters">SchedulerScheduleTargetEventbridgeParameters</a>

eventbridge_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#eventbridge_parameters SchedulerSchedule#eventbridge_parameters}

---

###### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.input"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#input SchedulerSchedule#input}.

---

###### `kinesis_parameters`<sup>Optional</sup> <a name="kinesis_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.kinesisParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

kinesis_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#kinesis_parameters SchedulerSchedule#kinesis_parameters}

---

###### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#retry_policy SchedulerSchedule#retry_policy}

---

###### `sagemaker_pipeline_parameters`<sup>Optional</sup> <a name="sagemaker_pipeline_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.sagemakerPipelineParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters">SchedulerScheduleTargetSagemakerPipelineParameters</a>

sagemaker_pipeline_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#sagemaker_pipeline_parameters SchedulerSchedule#sagemaker_pipeline_parameters}

---

###### `sqs_parameters`<sup>Optional</sup> <a name="sqs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.putTarget.parameter.sqsParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

sqs_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#sqs_parameters SchedulerSchedule#sqs_parameters}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_group_name` <a name="reset_group_name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_schedule_expression_timezone` <a name="reset_schedule_expression_timezone" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone"></a>

```python
def reset_schedule_expression_timezone() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow">flexible_time_window</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput">flexible_time_window_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput">schedule_expression_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `flexible_time_window`<sup>Required</sup> <a name="flexible_time_window" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow"></a>

```python
flexible_time_window: SchedulerScheduleFlexibleTimeWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.target"></a>

```python
target: SchedulerScheduleTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `flexible_time_window_input`<sup>Optional</sup> <a name="flexible_time_window_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput"></a>

```python
flexible_time_window_input: SchedulerScheduleFlexibleTimeWindow
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression_timezone_input`<sup>Optional</sup> <a name="schedule_expression_timezone_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput"></a>

```python
schedule_expression_timezone_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.targetInput"></a>

```python
target_input: SchedulerScheduleTarget
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_expression_timezone`<sup>Required</sup> <a name="schedule_expression_timezone" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.schedulerSchedule.SchedulerSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulerScheduleConfig <a name="SchedulerScheduleConfig" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  flexible_time_window: SchedulerScheduleFlexibleTimeWindow,
  schedule_expression: str,
  target: SchedulerScheduleTarget,
  description: str = None,
  end_date: str = None,
  group_name: str = None,
  id: str = None,
  kms_key_arn: str = None,
  name: str = None,
  name_prefix: str = None,
  schedule_expression_timezone: str = None,
  start_date: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow">flexible_time_window</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | flexible_time_window block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#description SchedulerSchedule#description}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#end_date SchedulerSchedule#end_date}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#group_name SchedulerSchedule#group_name}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#id SchedulerSchedule#id}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name SchedulerSchedule#name}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name_prefix SchedulerSchedule#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#start_date SchedulerSchedule#start_date}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#state SchedulerSchedule#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `flexible_time_window`<sup>Required</sup> <a name="flexible_time_window" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow"></a>

```python
flexible_time_window: SchedulerScheduleFlexibleTimeWindow
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

flexible_time_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.target"></a>

```python
target: SchedulerScheduleTarget
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#target SchedulerSchedule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#description SchedulerSchedule#description}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#end_date SchedulerSchedule#end_date}.

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#group_name SchedulerSchedule#group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#id SchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name SchedulerSchedule#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name_prefix SchedulerSchedule#name_prefix}.

---

##### `schedule_expression_timezone`<sup>Optional</sup> <a name="schedule_expression_timezone" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}.

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#start_date SchedulerSchedule#start_date}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#state SchedulerSchedule#state}.

---

### SchedulerScheduleFlexibleTimeWindow <a name="SchedulerScheduleFlexibleTimeWindow" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleFlexibleTimeWindow(
  mode: str,
  maximum_window_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#mode SchedulerSchedule#mode}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes">maximum_window_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#mode SchedulerSchedule#mode}.

---

##### `maximum_window_in_minutes`<sup>Optional</sup> <a name="maximum_window_in_minutes" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes"></a>

```python
maximum_window_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}.

---

### SchedulerScheduleTarget <a name="SchedulerScheduleTarget" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTarget(
  arn: str,
  role_arn: str,
  dead_letter_config: SchedulerScheduleTargetDeadLetterConfig = None,
  ecs_parameters: SchedulerScheduleTargetEcsParameters = None,
  eventbridge_parameters: SchedulerScheduleTargetEventbridgeParameters = None,
  input: str = None,
  kinesis_parameters: SchedulerScheduleTargetKinesisParameters = None,
  retry_policy: SchedulerScheduleTargetRetryPolicy = None,
  sagemaker_pipeline_parameters: SchedulerScheduleTargetSagemakerPipelineParameters = None,
  sqs_parameters: SchedulerScheduleTargetSqsParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#arn SchedulerSchedule#arn}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#role_arn SchedulerSchedule#role_arn}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters">ecs_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | ecs_parameters block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.eventbridgeParameters">eventbridge_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters">SchedulerScheduleTargetEventbridgeParameters</a></code> | eventbridge_parameters block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#input SchedulerSchedule#input}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | kinesis_parameters block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.sagemakerPipelineParameters">sagemaker_pipeline_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters">SchedulerScheduleTargetSagemakerPipelineParameters</a></code> | sagemaker_pipeline_parameters block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | sqs_parameters block. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#arn SchedulerSchedule#arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#role_arn SchedulerSchedule#role_arn}.

---

##### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig"></a>

```python
dead_letter_config: SchedulerScheduleTargetDeadLetterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#dead_letter_config SchedulerSchedule#dead_letter_config}

---

##### `ecs_parameters`<sup>Optional</sup> <a name="ecs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters"></a>

```python
ecs_parameters: SchedulerScheduleTargetEcsParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

ecs_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#ecs_parameters SchedulerSchedule#ecs_parameters}

---

##### `eventbridge_parameters`<sup>Optional</sup> <a name="eventbridge_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.eventbridgeParameters"></a>

```python
eventbridge_parameters: SchedulerScheduleTargetEventbridgeParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters">SchedulerScheduleTargetEventbridgeParameters</a>

eventbridge_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#eventbridge_parameters SchedulerSchedule#eventbridge_parameters}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.input"></a>

```python
input: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#input SchedulerSchedule#input}.

---

##### `kinesis_parameters`<sup>Optional</sup> <a name="kinesis_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters"></a>

```python
kinesis_parameters: SchedulerScheduleTargetKinesisParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

kinesis_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#kinesis_parameters SchedulerSchedule#kinesis_parameters}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy"></a>

```python
retry_policy: SchedulerScheduleTargetRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#retry_policy SchedulerSchedule#retry_policy}

---

##### `sagemaker_pipeline_parameters`<sup>Optional</sup> <a name="sagemaker_pipeline_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.sagemakerPipelineParameters"></a>

```python
sagemaker_pipeline_parameters: SchedulerScheduleTargetSagemakerPipelineParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters">SchedulerScheduleTargetSagemakerPipelineParameters</a>

sagemaker_pipeline_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#sagemaker_pipeline_parameters SchedulerSchedule#sagemaker_pipeline_parameters}

---

##### `sqs_parameters`<sup>Optional</sup> <a name="sqs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters"></a>

```python
sqs_parameters: SchedulerScheduleTargetSqsParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

sqs_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#sqs_parameters SchedulerSchedule#sqs_parameters}

---

### SchedulerScheduleTargetDeadLetterConfig <a name="SchedulerScheduleTargetDeadLetterConfig" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#arn SchedulerSchedule#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#arn SchedulerSchedule#arn}.

---

### SchedulerScheduleTargetEcsParameters <a name="SchedulerScheduleTargetEcsParameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParameters(
  task_definition_arn: str,
  capacity_provider_strategy: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]] = None,
  enable_ecs_managed_tags: typing.Union[bool, IResolvable] = None,
  enable_execute_command: typing.Union[bool, IResolvable] = None,
  group: str = None,
  launch_type: str = None,
  network_configuration: SchedulerScheduleTargetEcsParametersNetworkConfiguration = None,
  placement_constraints: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]] = None,
  placement_strategy: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  reference_id: str = None,
  tags: typing.Mapping[str] = None,
  task_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#group SchedulerSchedule#group}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType">launch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#launch_type SchedulerSchedule#launch_type}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints">placement_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy">placement_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]]</code> | placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#platform_version SchedulerSchedule#platform_version}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags">propagate_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId">reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#reference_id SchedulerSchedule#reference_id}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#tags SchedulerSchedule#tags}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#task_count SchedulerSchedule#task_count}. |

---

##### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}.

---

##### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#capacity_provider_strategy SchedulerSchedule#capacity_provider_strategy}

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}.

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand"></a>

```python
enable_execute_command: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#group SchedulerSchedule#group}.

---

##### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#launch_type SchedulerSchedule#launch_type}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration"></a>

```python
network_configuration: SchedulerScheduleTargetEcsParametersNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#network_configuration SchedulerSchedule#network_configuration}

---

##### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints"></a>

```python
placement_constraints: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]]

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#placement_constraints SchedulerSchedule#placement_constraints}

---

##### `placement_strategy`<sup>Optional</sup> <a name="placement_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy"></a>

```python
placement_strategy: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]]

placement_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#placement_strategy SchedulerSchedule#placement_strategy}

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#platform_version SchedulerSchedule#platform_version}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}.

---

##### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#reference_id SchedulerSchedule#reference_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#tags SchedulerSchedule#tags}.

---

##### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#task_count SchedulerSchedule#task_count}.

---

### SchedulerScheduleTargetEcsParametersCapacityProviderStrategy <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy(
  capacity_provider: str,
  base: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#capacity_provider SchedulerSchedule#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base">base</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#base SchedulerSchedule#base}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#weight SchedulerSchedule#weight}. |

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#capacity_provider SchedulerSchedule#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#base SchedulerSchedule#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#weight SchedulerSchedule#weight}.

---

### SchedulerScheduleTargetEcsParametersNetworkConfiguration <a name="SchedulerScheduleTargetEcsParametersNetworkConfiguration" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration(
  subnets: typing.List[str],
  assign_public_ip: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#subnets SchedulerSchedule#subnets}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#security_groups SchedulerSchedule#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#subnets SchedulerSchedule#subnets}.

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#security_groups SchedulerSchedule#security_groups}.

---

### SchedulerScheduleTargetEcsParametersPlacementConstraints <a name="SchedulerScheduleTargetEcsParametersPlacementConstraints" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints(
  type: str,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#type SchedulerSchedule#type}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#expression SchedulerSchedule#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#type SchedulerSchedule#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#expression SchedulerSchedule#expression}.

---

### SchedulerScheduleTargetEcsParametersPlacementStrategy <a name="SchedulerScheduleTargetEcsParametersPlacementStrategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy(
  type: str,
  field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#type SchedulerSchedule#type}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#field SchedulerSchedule#field}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#type SchedulerSchedule#type}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#field SchedulerSchedule#field}.

---

### SchedulerScheduleTargetEventbridgeParameters <a name="SchedulerScheduleTargetEventbridgeParameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters(
  detail_type: str,
  source: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters.property.detailType">detail_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#detail_type SchedulerSchedule#detail_type}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#source SchedulerSchedule#source}. |

---

##### `detail_type`<sup>Required</sup> <a name="detail_type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters.property.detailType"></a>

```python
detail_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#detail_type SchedulerSchedule#detail_type}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#source SchedulerSchedule#source}.

---

### SchedulerScheduleTargetKinesisParameters <a name="SchedulerScheduleTargetKinesisParameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetKinesisParameters(
  partition_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey">partition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#partition_key SchedulerSchedule#partition_key}. |

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#partition_key SchedulerSchedule#partition_key}.

---

### SchedulerScheduleTargetRetryPolicy <a name="SchedulerScheduleTargetRetryPolicy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetRetryPolicy(
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}. |

---

##### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}.

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}.

---

### SchedulerScheduleTargetSagemakerPipelineParameters <a name="SchedulerScheduleTargetSagemakerPipelineParameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters(
  pipeline_parameter: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters.property.pipelineParameter">pipeline_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>]]</code> | pipeline_parameter block. |

---

##### `pipeline_parameter`<sup>Optional</sup> <a name="pipeline_parameter" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters.property.pipelineParameter"></a>

```python
pipeline_parameter: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>]]

pipeline_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#pipeline_parameter SchedulerSchedule#pipeline_parameter}

---

### SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter <a name="SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name SchedulerSchedule#name}. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#value SchedulerSchedule#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name SchedulerSchedule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#value SchedulerSchedule#value}.

---

### SchedulerScheduleTargetSqsParameters <a name="SchedulerScheduleTargetSqsParameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSqsParameters(
  message_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId">message_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}. |

---

##### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SchedulerScheduleFlexibleTimeWindowOutputReference <a name="SchedulerScheduleFlexibleTimeWindowOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes">reset_maximum_window_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_window_in_minutes` <a name="reset_maximum_window_in_minutes" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes"></a>

```python
def reset_maximum_window_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput">maximum_window_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes">maximum_window_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_window_in_minutes_input`<sup>Optional</sup> <a name="maximum_window_in_minutes_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput"></a>

```python
maximum_window_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `maximum_window_in_minutes`<sup>Required</sup> <a name="maximum_window_in_minutes" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes"></a>

```python
maximum_window_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleFlexibleTimeWindow
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---


### SchedulerScheduleTargetDeadLetterConfigOutputReference <a name="SchedulerScheduleTargetDeadLetterConfigOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleTargetDeadLetterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]]

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase">reset_base</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base` <a name="reset_base" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase"></a>

```python
def reset_base() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput">base_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_input`<sup>Optional</sup> <a name="base_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput"></a>

```python
base_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider_input`<sup>Optional</sup> <a name="capacity_provider_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```python
capacity_provider_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>, cdktf.IResolvable]

---


### SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleTargetEcsParametersNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---


### SchedulerScheduleTargetEcsParametersOutputReference <a name="SchedulerScheduleTargetEcsParametersOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy">put_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints">put_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy">put_placement_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy">reset_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags">reset_enable_ecs_managed_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand">reset_enable_execute_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType">reset_launch_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints">reset_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy">reset_placement_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion">reset_platform_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId">reset_reference_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount">reset_task_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_provider_strategy` <a name="put_capacity_provider_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy"></a>

```python
def put_capacity_provider_strategy(
  value: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  subnets: typing.List[str],
  assign_public_ip: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None
) -> None
```

###### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#subnets SchedulerSchedule#subnets}.

---

###### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration.parameter.assignPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}.

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#security_groups SchedulerSchedule#security_groups}.

---

##### `put_placement_constraints` <a name="put_placement_constraints" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints"></a>

```python
def put_placement_constraints(
  value: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]]

---

##### `put_placement_strategy` <a name="put_placement_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy"></a>

```python
def put_placement_strategy(
  value: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]]

---

##### `reset_capacity_provider_strategy` <a name="reset_capacity_provider_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy"></a>

```python
def reset_capacity_provider_strategy() -> None
```

##### `reset_enable_ecs_managed_tags` <a name="reset_enable_ecs_managed_tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags"></a>

```python
def reset_enable_ecs_managed_tags() -> None
```

##### `reset_enable_execute_command` <a name="reset_enable_execute_command" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand"></a>

```python
def reset_enable_execute_command() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_launch_type` <a name="reset_launch_type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType"></a>

```python
def reset_launch_type() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_placement_constraints` <a name="reset_placement_constraints" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints"></a>

```python
def reset_placement_constraints() -> None
```

##### `reset_placement_strategy` <a name="reset_placement_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy"></a>

```python
def reset_placement_strategy() -> None
```

##### `reset_platform_version` <a name="reset_platform_version" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion"></a>

```python
def reset_platform_version() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```

##### `reset_reference_id` <a name="reset_reference_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId"></a>

```python
def reset_reference_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_task_count` <a name="reset_task_count" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount"></a>

```python
def reset_task_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints">placement_constraints</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy">placement_strategy</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput">capacity_provider_strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput">enable_ecs_managed_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput">enable_execute_command_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput">launch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput">placement_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput">placement_strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput">propagate_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput">reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput">task_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput">task_definition_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType">launch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags">propagate_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_provider_strategy`<sup>Required</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration"></a>

```python
network_configuration: SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a>

---

##### `placement_constraints`<sup>Required</sup> <a name="placement_constraints" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints"></a>

```python
placement_constraints: SchedulerScheduleTargetEcsParametersPlacementConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a>

---

##### `placement_strategy`<sup>Required</sup> <a name="placement_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy"></a>

```python
placement_strategy: SchedulerScheduleTargetEcsParametersPlacementStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a>

---

##### `capacity_provider_strategy_input`<sup>Optional</sup> <a name="capacity_provider_strategy_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput"></a>

```python
capacity_provider_strategy_input: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]]

---

##### `enable_ecs_managed_tags_input`<sup>Optional</sup> <a name="enable_ecs_managed_tags_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput"></a>

```python
enable_ecs_managed_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_execute_command_input`<sup>Optional</sup> <a name="enable_execute_command_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput"></a>

```python
enable_execute_command_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `launch_type_input`<sup>Optional</sup> <a name="launch_type_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput"></a>

```python
launch_type_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput"></a>

```python
network_configuration_input: SchedulerScheduleTargetEcsParametersNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---

##### `placement_constraints_input`<sup>Optional</sup> <a name="placement_constraints_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput"></a>

```python
placement_constraints_input: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]]

---

##### `placement_strategy_input`<sup>Optional</sup> <a name="placement_strategy_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput"></a>

```python
placement_strategy_input: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]]

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput"></a>

```python
propagate_tags_input: str
```

- *Type:* str

---

##### `reference_id_input`<sup>Optional</sup> <a name="reference_id_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput"></a>

```python
reference_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_count_input`<sup>Optional</sup> <a name="task_count_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput"></a>

```python
task_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_definition_arn_input`<sup>Optional</sup> <a name="task_definition_arn_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput"></a>

```python
task_definition_arn_input: str
```

- *Type:* str

---

##### `enable_ecs_managed_tags`<sup>Required</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_execute_command`<sup>Required</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand"></a>

```python
enable_execute_command: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `launch_type`<sup>Required</sup> <a name="launch_type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_count`<sup>Required</sup> <a name="task_count" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleTargetEcsParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsList <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsList" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]]

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SchedulerScheduleTargetEcsParametersPlacementConstraints, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>, cdktf.IResolvable]

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyList <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyList" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]]

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field` <a name="reset_field" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SchedulerScheduleTargetEcsParametersPlacementStrategy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>, cdktf.IResolvable]

---


### SchedulerScheduleTargetEventbridgeParametersOutputReference <a name="SchedulerScheduleTargetEventbridgeParametersOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.detailTypeInput">detail_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.detailType">detail_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters">SchedulerScheduleTargetEventbridgeParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detail_type_input`<sup>Optional</sup> <a name="detail_type_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.detailTypeInput"></a>

```python
detail_type_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `detail_type`<sup>Required</sup> <a name="detail_type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.detailType"></a>

```python
detail_type: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleTargetEventbridgeParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters">SchedulerScheduleTargetEventbridgeParameters</a>

---


### SchedulerScheduleTargetKinesisParametersOutputReference <a name="SchedulerScheduleTargetKinesisParametersOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput">partition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey">partition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_key_input`<sup>Optional</sup> <a name="partition_key_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput"></a>

```python
partition_key_input: str
```

- *Type:* str

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleTargetKinesisParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---


### SchedulerScheduleTargetOutputReference <a name="SchedulerScheduleTargetOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig">put_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters">put_ecs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventbridgeParameters">put_eventbridge_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters">put_kinesis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSagemakerPipelineParameters">put_sagemaker_pipeline_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters">put_sqs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig">reset_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters">reset_ecs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventbridgeParameters">reset_eventbridge_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters">reset_kinesis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSagemakerPipelineParameters">reset_sagemaker_pipeline_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters">reset_sqs_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dead_letter_config` <a name="put_dead_letter_config" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig"></a>

```python
def put_dead_letter_config(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#arn SchedulerSchedule#arn}.

---

##### `put_ecs_parameters` <a name="put_ecs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters"></a>

```python
def put_ecs_parameters(
  task_definition_arn: str,
  capacity_provider_strategy: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]] = None,
  enable_ecs_managed_tags: typing.Union[bool, IResolvable] = None,
  enable_execute_command: typing.Union[bool, IResolvable] = None,
  group: str = None,
  launch_type: str = None,
  network_configuration: SchedulerScheduleTargetEcsParametersNetworkConfiguration = None,
  placement_constraints: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]] = None,
  placement_strategy: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  reference_id: str = None,
  tags: typing.Mapping[str] = None,
  task_count: typing.Union[int, float] = None
) -> None
```

###### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.taskDefinitionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}.

---

###### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.capacityProviderStrategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#capacity_provider_strategy SchedulerSchedule#capacity_provider_strategy}

---

###### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.enableEcsManagedTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}.

---

###### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.enableExecuteCommand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}.

---

###### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#group SchedulerSchedule#group}.

---

###### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.launchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#launch_type SchedulerSchedule#launch_type}.

---

###### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#network_configuration SchedulerSchedule#network_configuration}

---

###### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.placementConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]]

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#placement_constraints SchedulerSchedule#placement_constraints}

---

###### `placement_strategy`<sup>Optional</sup> <a name="placement_strategy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.placementStrategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]]

placement_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#placement_strategy SchedulerSchedule#placement_strategy}

---

###### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.platformVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#platform_version SchedulerSchedule#platform_version}.

---

###### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.propagateTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}.

---

###### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.referenceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#reference_id SchedulerSchedule#reference_id}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#tags SchedulerSchedule#tags}.

---

###### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.taskCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#task_count SchedulerSchedule#task_count}.

---

##### `put_eventbridge_parameters` <a name="put_eventbridge_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventbridgeParameters"></a>

```python
def put_eventbridge_parameters(
  detail_type: str,
  source: str
) -> None
```

###### `detail_type`<sup>Required</sup> <a name="detail_type" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventbridgeParameters.parameter.detailType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#detail_type SchedulerSchedule#detail_type}.

---

###### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventbridgeParameters.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#source SchedulerSchedule#source}.

---

##### `put_kinesis_parameters` <a name="put_kinesis_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters"></a>

```python
def put_kinesis_parameters(
  partition_key: str
) -> None
```

###### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters.parameter.partitionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#partition_key SchedulerSchedule#partition_key}.

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy"></a>

```python
def put_retry_policy(
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
) -> None
```

###### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy.parameter.maximumEventAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}.

---

###### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy.parameter.maximumRetryAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}.

---

##### `put_sagemaker_pipeline_parameters` <a name="put_sagemaker_pipeline_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSagemakerPipelineParameters"></a>

```python
def put_sagemaker_pipeline_parameters(
  pipeline_parameter: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter]] = None
) -> None
```

###### `pipeline_parameter`<sup>Optional</sup> <a name="pipeline_parameter" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSagemakerPipelineParameters.parameter.pipelineParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>]]

pipeline_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#pipeline_parameter SchedulerSchedule#pipeline_parameter}

---

##### `put_sqs_parameters` <a name="put_sqs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters"></a>

```python
def put_sqs_parameters(
  message_group_id: str = None
) -> None
```

###### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters.parameter.messageGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}.

---

##### `reset_dead_letter_config` <a name="reset_dead_letter_config" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig"></a>

```python
def reset_dead_letter_config() -> None
```

##### `reset_ecs_parameters` <a name="reset_ecs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters"></a>

```python
def reset_ecs_parameters() -> None
```

##### `reset_eventbridge_parameters` <a name="reset_eventbridge_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventbridgeParameters"></a>

```python
def reset_eventbridge_parameters() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_kinesis_parameters` <a name="reset_kinesis_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters"></a>

```python
def reset_kinesis_parameters() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_sagemaker_pipeline_parameters` <a name="reset_sagemaker_pipeline_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSagemakerPipelineParameters"></a>

```python
def reset_sagemaker_pipeline_parameters() -> None
```

##### `reset_sqs_parameters` <a name="reset_sqs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters"></a>

```python
def reset_sqs_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters">ecs_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventbridgeParameters">eventbridge_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference">SchedulerScheduleTargetEventbridgeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sagemakerPipelineParameters">sagemaker_pipeline_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference">SchedulerScheduleTargetSagemakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput">dead_letter_config_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput">ecs_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventbridgeParametersInput">eventbridge_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters">SchedulerScheduleTargetEventbridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput">kinesis_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sagemakerPipelineParametersInput">sagemaker_pipeline_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters">SchedulerScheduleTargetSagemakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput">sqs_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_config`<sup>Required</sup> <a name="dead_letter_config" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig"></a>

```python
dead_letter_config: SchedulerScheduleTargetDeadLetterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a>

---

##### `ecs_parameters`<sup>Required</sup> <a name="ecs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters"></a>

```python
ecs_parameters: SchedulerScheduleTargetEcsParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a>

---

##### `eventbridge_parameters`<sup>Required</sup> <a name="eventbridge_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventbridgeParameters"></a>

```python
eventbridge_parameters: SchedulerScheduleTargetEventbridgeParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParametersOutputReference">SchedulerScheduleTargetEventbridgeParametersOutputReference</a>

---

##### `kinesis_parameters`<sup>Required</sup> <a name="kinesis_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters"></a>

```python
kinesis_parameters: SchedulerScheduleTargetKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy"></a>

```python
retry_policy: SchedulerScheduleTargetRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a>

---

##### `sagemaker_pipeline_parameters`<sup>Required</sup> <a name="sagemaker_pipeline_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sagemakerPipelineParameters"></a>

```python
sagemaker_pipeline_parameters: SchedulerScheduleTargetSagemakerPipelineParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference">SchedulerScheduleTargetSagemakerPipelineParametersOutputReference</a>

---

##### `sqs_parameters`<sup>Required</sup> <a name="sqs_parameters" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters"></a>

```python
sqs_parameters: SchedulerScheduleTargetSqsParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `dead_letter_config_input`<sup>Optional</sup> <a name="dead_letter_config_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput"></a>

```python
dead_letter_config_input: SchedulerScheduleTargetDeadLetterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---

##### `ecs_parameters_input`<sup>Optional</sup> <a name="ecs_parameters_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput"></a>

```python
ecs_parameters_input: SchedulerScheduleTargetEcsParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---

##### `eventbridge_parameters_input`<sup>Optional</sup> <a name="eventbridge_parameters_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventbridgeParametersInput"></a>

```python
eventbridge_parameters_input: SchedulerScheduleTargetEventbridgeParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetEventbridgeParameters">SchedulerScheduleTargetEventbridgeParameters</a>

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `kinesis_parameters_input`<sup>Optional</sup> <a name="kinesis_parameters_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput"></a>

```python
kinesis_parameters_input: SchedulerScheduleTargetKinesisParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: SchedulerScheduleTargetRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `sagemaker_pipeline_parameters_input`<sup>Optional</sup> <a name="sagemaker_pipeline_parameters_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sagemakerPipelineParametersInput"></a>

```python
sagemaker_pipeline_parameters_input: SchedulerScheduleTargetSagemakerPipelineParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters">SchedulerScheduleTargetSagemakerPipelineParameters</a>

---

##### `sqs_parameters_input`<sup>Optional</sup> <a name="sqs_parameters_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput"></a>

```python
sqs_parameters_input: SchedulerScheduleTargetSqsParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleTarget
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---


### SchedulerScheduleTargetRetryPolicyOutputReference <a name="SchedulerScheduleTargetRetryPolicyOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">reset_maximum_event_age_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts">reset_maximum_retry_attempts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_event_age_in_seconds` <a name="reset_maximum_event_age_in_seconds" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```python
def reset_maximum_event_age_in_seconds() -> None
```

##### `reset_maximum_retry_attempts` <a name="reset_maximum_retry_attempts" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```python
def reset_maximum_retry_attempts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">maximum_event_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput">maximum_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds_input`<sup>Optional</sup> <a name="maximum_event_age_in_seconds_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```python
maximum_event_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts_input`<sup>Optional</sup> <a name="maximum_retry_attempts_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```python
maximum_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_event_age_in_seconds`<sup>Required</sup> <a name="maximum_event_age_in_seconds" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleTargetRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---


### SchedulerScheduleTargetSagemakerPipelineParametersOutputReference <a name="SchedulerScheduleTargetSagemakerPipelineParametersOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.putPipelineParameter">put_pipeline_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.resetPipelineParameter">reset_pipeline_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pipeline_parameter` <a name="put_pipeline_parameter" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.putPipelineParameter"></a>

```python
def put_pipeline_parameter(
  value: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.putPipelineParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>]]

---

##### `reset_pipeline_parameter` <a name="reset_pipeline_parameter" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.resetPipelineParameter"></a>

```python
def reset_pipeline_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.pipelineParameter">pipeline_parameter</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.pipelineParameterInput">pipeline_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters">SchedulerScheduleTargetSagemakerPipelineParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_parameter`<sup>Required</sup> <a name="pipeline_parameter" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.pipelineParameter"></a>

```python
pipeline_parameter: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList</a>

---

##### `pipeline_parameter_input`<sup>Optional</sup> <a name="pipeline_parameter_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.pipelineParameterInput"></a>

```python
pipeline_parameter_input: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleTargetSagemakerPipelineParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParameters">SchedulerScheduleTargetSagemakerPipelineParameters</a>

---


### SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList <a name="SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>]]

---


### SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference <a name="SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter">SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter</a>, cdktf.IResolvable]

---


### SchedulerScheduleTargetSqsParametersOutputReference <a name="SchedulerScheduleTargetSqsParametersOutputReference" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId">reset_message_group_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message_group_id` <a name="reset_message_group_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId"></a>

```python
def reset_message_group_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput">message_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId">message_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_group_id_input`<sup>Optional</sup> <a name="message_group_id_input" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput"></a>

```python
message_group_id_input: str
```

- *Type:* str

---

##### `message_group_id`<sup>Required</sup> <a name="message_group_id" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue"></a>

```python
internal_value: SchedulerScheduleTargetSqsParameters
```

- *Type:* <a href="#@cdktf/provider-aws.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---



