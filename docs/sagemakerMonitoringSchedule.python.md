# `aws_sagemaker_monitoring_schedule`

Refer to the Terraform Registory for docs: [`aws_sagemaker_monitoring_schedule`](https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule).

# `sagemakerMonitoringSchedule` Submodule <a name="`sagemakerMonitoringSchedule` Submodule" id="@cdktf/provider-aws.sagemakerMonitoringSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMonitoringSchedule <a name="SagemakerMonitoringSchedule" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule aws_sagemaker_monitoring_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_monitoring_schedule

sagemakerMonitoringSchedule.SagemakerMonitoringSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitoring_schedule_config: SagemakerMonitoringScheduleMonitoringScheduleConfig,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.monitoringScheduleConfig">monitoring_schedule_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a></code> | monitoring_schedule_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitoring_schedule_config`<sup>Required</sup> <a name="monitoring_schedule_config" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.monitoringScheduleConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a>

monitoring_schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_config SagemakerMonitoringSchedule#monitoring_schedule_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.putMonitoringScheduleConfig">put_monitoring_schedule_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_monitoring_schedule_config` <a name="put_monitoring_schedule_config" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.putMonitoringScheduleConfig"></a>

```python
def put_monitoring_schedule_config(
  monitoring_job_definition_name: str,
  monitoring_type: str,
  schedule_config: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig = None
) -> None
```

###### `monitoring_job_definition_name`<sup>Required</sup> <a name="monitoring_job_definition_name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.putMonitoringScheduleConfig.parameter.monitoringJobDefinitionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#monitoring_job_definition_name SagemakerMonitoringSchedule#monitoring_job_definition_name}.

---

###### `monitoring_type`<sup>Required</sup> <a name="monitoring_type" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.putMonitoringScheduleConfig.parameter.monitoringType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#monitoring_type SagemakerMonitoringSchedule#monitoring_type}.

---

###### `schedule_config`<sup>Optional</sup> <a name="schedule_config" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.putMonitoringScheduleConfig.parameter.scheduleConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a>

schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#schedule_config SagemakerMonitoringSchedule#schedule_config}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_monitoring_schedule

sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_monitoring_schedule

sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_monitoring_schedule

sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.monitoringScheduleConfig">monitoring_schedule_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference">SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.monitoringScheduleConfigInput">monitoring_schedule_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `monitoring_schedule_config`<sup>Required</sup> <a name="monitoring_schedule_config" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.monitoringScheduleConfig"></a>

```python
monitoring_schedule_config: SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference">SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `monitoring_schedule_config_input`<sup>Optional</sup> <a name="monitoring_schedule_config_input" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.monitoringScheduleConfigInput"></a>

```python
monitoring_schedule_config_input: SagemakerMonitoringScheduleMonitoringScheduleConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMonitoringScheduleConfig <a name="SagemakerMonitoringScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_monitoring_schedule

sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitoring_schedule_config: SagemakerMonitoringScheduleMonitoringScheduleConfig,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.monitoringScheduleConfig">monitoring_schedule_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a></code> | monitoring_schedule_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitoring_schedule_config`<sup>Required</sup> <a name="monitoring_schedule_config" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.monitoringScheduleConfig"></a>

```python
monitoring_schedule_config: SagemakerMonitoringScheduleMonitoringScheduleConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a>

monitoring_schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_config SagemakerMonitoringSchedule#monitoring_schedule_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}.

---

### SagemakerMonitoringScheduleMonitoringScheduleConfig <a name="SagemakerMonitoringScheduleMonitoringScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_monitoring_schedule

sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig(
  monitoring_job_definition_name: str,
  monitoring_type: str,
  schedule_config: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.monitoringJobDefinitionName">monitoring_job_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#monitoring_job_definition_name SagemakerMonitoringSchedule#monitoring_job_definition_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.monitoringType">monitoring_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#monitoring_type SagemakerMonitoringSchedule#monitoring_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a></code> | schedule_config block. |

---

##### `monitoring_job_definition_name`<sup>Required</sup> <a name="monitoring_job_definition_name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.monitoringJobDefinitionName"></a>

```python
monitoring_job_definition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#monitoring_job_definition_name SagemakerMonitoringSchedule#monitoring_job_definition_name}.

---

##### `monitoring_type`<sup>Required</sup> <a name="monitoring_type" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.monitoringType"></a>

```python
monitoring_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#monitoring_type SagemakerMonitoringSchedule#monitoring_type}.

---

##### `schedule_config`<sup>Optional</sup> <a name="schedule_config" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.scheduleConfig"></a>

```python
schedule_config: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a>

schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#schedule_config SagemakerMonitoringSchedule#schedule_config}

---

### SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig <a name="SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_monitoring_schedule

sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig(
  schedule_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#schedule_expression SagemakerMonitoringSchedule#schedule_expression}. |

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#schedule_expression SagemakerMonitoringSchedule#schedule_expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference <a name="SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_monitoring_schedule

sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.putScheduleConfig">put_schedule_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resetScheduleConfig">reset_schedule_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule_config` <a name="put_schedule_config" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.putScheduleConfig"></a>

```python
def put_schedule_config(
  schedule_expression: str
) -> None
```

###### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.putScheduleConfig.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/sagemaker_monitoring_schedule#schedule_expression SagemakerMonitoringSchedule#schedule_expression}.

---

##### `reset_schedule_config` <a name="reset_schedule_config" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resetScheduleConfig"></a>

```python
def reset_schedule_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringJobDefinitionNameInput">monitoring_job_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringTypeInput">monitoring_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.scheduleConfigInput">schedule_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringJobDefinitionName">monitoring_job_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringType">monitoring_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.scheduleConfig"></a>

```python
schedule_config: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference</a>

---

##### `monitoring_job_definition_name_input`<sup>Optional</sup> <a name="monitoring_job_definition_name_input" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringJobDefinitionNameInput"></a>

```python
monitoring_job_definition_name_input: str
```

- *Type:* str

---

##### `monitoring_type_input`<sup>Optional</sup> <a name="monitoring_type_input" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringTypeInput"></a>

```python
monitoring_type_input: str
```

- *Type:* str

---

##### `schedule_config_input`<sup>Optional</sup> <a name="schedule_config_input" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.scheduleConfigInput"></a>

```python
schedule_config_input: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a>

---

##### `monitoring_job_definition_name`<sup>Required</sup> <a name="monitoring_job_definition_name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringJobDefinitionName"></a>

```python
monitoring_job_definition_name: str
```

- *Type:* str

---

##### `monitoring_type`<sup>Required</sup> <a name="monitoring_type" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringType"></a>

```python
monitoring_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerMonitoringScheduleMonitoringScheduleConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a>

---


### SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference <a name="SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_monitoring_schedule

sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a>

---



