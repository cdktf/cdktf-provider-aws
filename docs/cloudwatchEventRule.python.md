# `cloudwatchEventRule` Submodule <a name="`cloudwatchEventRule` Submodule" id="@cdktf/provider-aws.cloudwatchEventRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventRule <a name="CloudwatchEventRule" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule aws_cloudwatch_event_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_rule

cloudwatchEventRule.CloudwatchEventRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  event_bus_name: str = None,
  event_pattern: str = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  name: str = None,
  name_prefix: str = None,
  role_arn: str = None,
  schedule_expression: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#description CloudwatchEventRule#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.eventBusName">event_bus_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#event_bus_name CloudwatchEventRule#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.eventPattern">event_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#event_pattern CloudwatchEventRule#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#id CloudwatchEventRule#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#is_enabled CloudwatchEventRule#is_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#name CloudwatchEventRule#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#name_prefix CloudwatchEventRule#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#role_arn CloudwatchEventRule#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#schedule_expression CloudwatchEventRule#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#tags CloudwatchEventRule#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#tags_all CloudwatchEventRule#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#description CloudwatchEventRule#description}.

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.eventBusName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#event_bus_name CloudwatchEventRule#event_bus_name}.

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.eventPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#event_pattern CloudwatchEventRule#event_pattern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#id CloudwatchEventRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#is_enabled CloudwatchEventRule#is_enabled}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#name CloudwatchEventRule#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#name_prefix CloudwatchEventRule#name_prefix}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#role_arn CloudwatchEventRule#role_arn}.

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#schedule_expression CloudwatchEventRule#schedule_expression}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#tags CloudwatchEventRule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#tags_all CloudwatchEventRule#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetEventBusName">reset_event_bus_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetEventPattern">reset_event_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_bus_name` <a name="reset_event_bus_name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetEventBusName"></a>

```python
def reset_event_bus_name() -> None
```

##### `reset_event_pattern` <a name="reset_event_pattern" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetEventPattern"></a>

```python
def reset_event_pattern() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_rule

cloudwatchEventRule.CloudwatchEventRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_rule

cloudwatchEventRule.CloudwatchEventRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_rule

cloudwatchEventRule.CloudwatchEventRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventBusNameInput">event_bus_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventPatternInput">event_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventBusName">event_bus_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_bus_name_input`<sup>Optional</sup> <a name="event_bus_name_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventBusNameInput"></a>

```python
event_bus_name_input: str
```

- *Type:* str

---

##### `event_pattern_input`<sup>Optional</sup> <a name="event_pattern_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventPatternInput"></a>

```python
event_pattern_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `event_bus_name`<sup>Required</sup> <a name="event_bus_name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventRuleConfig <a name="CloudwatchEventRuleConfig" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_rule

cloudwatchEventRule.CloudwatchEventRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  event_bus_name: str = None,
  event_pattern: str = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  name: str = None,
  name_prefix: str = None,
  role_arn: str = None,
  schedule_expression: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#description CloudwatchEventRule#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.eventBusName">event_bus_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#event_bus_name CloudwatchEventRule#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.eventPattern">event_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#event_pattern CloudwatchEventRule#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#id CloudwatchEventRule#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#is_enabled CloudwatchEventRule#is_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#name CloudwatchEventRule#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#name_prefix CloudwatchEventRule#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#role_arn CloudwatchEventRule#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#schedule_expression CloudwatchEventRule#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#tags CloudwatchEventRule#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#tags_all CloudwatchEventRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#description CloudwatchEventRule#description}.

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#event_bus_name CloudwatchEventRule#event_bus_name}.

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#event_pattern CloudwatchEventRule#event_pattern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#id CloudwatchEventRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#is_enabled CloudwatchEventRule#is_enabled}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#name CloudwatchEventRule#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#name_prefix CloudwatchEventRule#name_prefix}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#role_arn CloudwatchEventRule#role_arn}.

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#schedule_expression CloudwatchEventRule#schedule_expression}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#tags CloudwatchEventRule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchEventRule.CloudwatchEventRuleConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule#tags_all CloudwatchEventRule#tags_all}.

---



