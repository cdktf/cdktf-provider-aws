# `aws_cloudwatch_composite_alarm`

Refer to the Terraform Registory for docs: [`aws_cloudwatch_composite_alarm`](https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm).

# `cloudwatchCompositeAlarm` Submodule <a name="`cloudwatchCompositeAlarm` Submodule" id="@cdktf/provider-aws.cloudwatchCompositeAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchCompositeAlarm <a name="CloudwatchCompositeAlarm" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm aws_cloudwatch_composite_alarm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_name: str,
  alarm_rule: str,
  actions_enabled: typing.Union[bool, IResolvable] = None,
  actions_suppressor: CloudwatchCompositeAlarmActionsSuppressor = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  id: str = None,
  insufficient_data_actions: typing.List[str] = None,
  ok_actions: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmName">alarm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmRule">alarm_rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsEnabled">actions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressor">actions_suppressor</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor">CloudwatchCompositeAlarmActionsSuppressor</a></code> | actions_suppressor block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmDescription">alarm_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#id CloudwatchCompositeAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#tags_all CloudwatchCompositeAlarm#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}.

---

##### `alarm_rule`<sup>Required</sup> <a name="alarm_rule" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmRule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}.

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}.

---

##### `actions_suppressor`<sup>Optional</sup> <a name="actions_suppressor" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressor"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor">CloudwatchCompositeAlarmActionsSuppressor</a>

actions_suppressor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CloudwatchCompositeAlarm#actions_suppressor}

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}.

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#id CloudwatchCompositeAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.insufficientDataActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}.

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.okActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#tags_all CloudwatchCompositeAlarm#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putActionsSuppressor">put_actions_suppressor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled">reset_actions_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressor">reset_actions_suppressor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions">reset_alarm_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription">reset_alarm_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions">reset_insufficient_data_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions">reset_ok_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_actions_suppressor` <a name="put_actions_suppressor" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putActionsSuppressor"></a>

```python
def put_actions_suppressor(
  alarm: str,
  extension_period: typing.Union[int, float],
  wait_period: typing.Union[int, float]
) -> None
```

###### `alarm`<sup>Required</sup> <a name="alarm" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putActionsSuppressor.parameter.alarm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm CloudwatchCompositeAlarm#alarm}.

---

###### `extension_period`<sup>Required</sup> <a name="extension_period" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putActionsSuppressor.parameter.extensionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#extension_period CloudwatchCompositeAlarm#extension_period}.

---

###### `wait_period`<sup>Required</sup> <a name="wait_period" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putActionsSuppressor.parameter.waitPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#wait_period CloudwatchCompositeAlarm#wait_period}.

---

##### `reset_actions_enabled` <a name="reset_actions_enabled" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled"></a>

```python
def reset_actions_enabled() -> None
```

##### `reset_actions_suppressor` <a name="reset_actions_suppressor" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressor"></a>

```python
def reset_actions_suppressor() -> None
```

##### `reset_alarm_actions` <a name="reset_alarm_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions"></a>

```python
def reset_alarm_actions() -> None
```

##### `reset_alarm_description` <a name="reset_alarm_description" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription"></a>

```python
def reset_alarm_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insufficient_data_actions` <a name="reset_insufficient_data_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions"></a>

```python
def reset_insufficient_data_actions() -> None
```

##### `reset_ok_actions` <a name="reset_ok_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions"></a>

```python
def reset_ok_actions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudwatchCompositeAlarm resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudwatchCompositeAlarm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchCompositeAlarm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchCompositeAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchCompositeAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressor">actions_suppressor</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference">CloudwatchCompositeAlarmActionsSuppressorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput">actions_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorInput">actions_suppressor_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor">CloudwatchCompositeAlarmActionsSuppressor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput">alarm_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput">alarm_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput">alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput">alarm_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput">insufficient_data_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput">ok_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled">actions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription">alarm_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule">alarm_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions_suppressor`<sup>Required</sup> <a name="actions_suppressor" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressor"></a>

```python
actions_suppressor: CloudwatchCompositeAlarmActionsSuppressorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference">CloudwatchCompositeAlarmActionsSuppressorOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `actions_enabled_input`<sup>Optional</sup> <a name="actions_enabled_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput"></a>

```python
actions_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `actions_suppressor_input`<sup>Optional</sup> <a name="actions_suppressor_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorInput"></a>

```python
actions_suppressor_input: CloudwatchCompositeAlarmActionsSuppressor
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor">CloudwatchCompositeAlarmActionsSuppressor</a>

---

##### `alarm_actions_input`<sup>Optional</sup> <a name="alarm_actions_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput"></a>

```python
alarm_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description_input`<sup>Optional</sup> <a name="alarm_description_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput"></a>

```python
alarm_description_input: str
```

- *Type:* str

---

##### `alarm_name_input`<sup>Optional</sup> <a name="alarm_name_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput"></a>

```python
alarm_name_input: str
```

- *Type:* str

---

##### `alarm_rule_input`<sup>Optional</sup> <a name="alarm_rule_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput"></a>

```python
alarm_rule_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insufficient_data_actions_input`<sup>Optional</sup> <a name="insufficient_data_actions_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput"></a>

```python
insufficient_data_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ok_actions_input`<sup>Optional</sup> <a name="ok_actions_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput"></a>

```python
ok_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `actions_enabled`<sup>Required</sup> <a name="actions_enabled" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled"></a>

```python
actions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alarm_actions`<sup>Required</sup> <a name="alarm_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description`<sup>Required</sup> <a name="alarm_description" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `alarm_rule`<sup>Required</sup> <a name="alarm_rule" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule"></a>

```python
alarm_rule: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insufficient_data_actions`<sup>Required</sup> <a name="insufficient_data_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ok_actions`<sup>Required</sup> <a name="ok_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchCompositeAlarmActionsSuppressor <a name="CloudwatchCompositeAlarmActionsSuppressor" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor(
  alarm: str,
  extension_period: typing.Union[int, float],
  wait_period: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor.property.alarm">alarm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm CloudwatchCompositeAlarm#alarm}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor.property.extensionPeriod">extension_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#extension_period CloudwatchCompositeAlarm#extension_period}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor.property.waitPeriod">wait_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#wait_period CloudwatchCompositeAlarm#wait_period}. |

---

##### `alarm`<sup>Required</sup> <a name="alarm" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor.property.alarm"></a>

```python
alarm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm CloudwatchCompositeAlarm#alarm}.

---

##### `extension_period`<sup>Required</sup> <a name="extension_period" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor.property.extensionPeriod"></a>

```python
extension_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#extension_period CloudwatchCompositeAlarm#extension_period}.

---

##### `wait_period`<sup>Required</sup> <a name="wait_period" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor.property.waitPeriod"></a>

```python
wait_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#wait_period CloudwatchCompositeAlarm#wait_period}.

---

### CloudwatchCompositeAlarmConfig <a name="CloudwatchCompositeAlarmConfig" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_name: str,
  alarm_rule: str,
  actions_enabled: typing.Union[bool, IResolvable] = None,
  actions_suppressor: CloudwatchCompositeAlarmActionsSuppressor = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  id: str = None,
  insufficient_data_actions: typing.List[str] = None,
  ok_actions: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName">alarm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule">alarm_rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled">actions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressor">actions_suppressor</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor">CloudwatchCompositeAlarmActionsSuppressor</a></code> | actions_suppressor block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription">alarm_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#id CloudwatchCompositeAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#tags_all CloudwatchCompositeAlarm#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}.

---

##### `alarm_rule`<sup>Required</sup> <a name="alarm_rule" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule"></a>

```python
alarm_rule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}.

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled"></a>

```python
actions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}.

---

##### `actions_suppressor`<sup>Optional</sup> <a name="actions_suppressor" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressor"></a>

```python
actions_suppressor: CloudwatchCompositeAlarmActionsSuppressor
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor">CloudwatchCompositeAlarmActionsSuppressor</a>

actions_suppressor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CloudwatchCompositeAlarm#actions_suppressor}

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}.

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#id CloudwatchCompositeAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}.

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.0/docs/resources/cloudwatch_composite_alarm#tags_all CloudwatchCompositeAlarm#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchCompositeAlarmActionsSuppressorOutputReference <a name="CloudwatchCompositeAlarmActionsSuppressorOutputReference" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.alarmInput">alarm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.extensionPeriodInput">extension_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.waitPeriodInput">wait_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.alarm">alarm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.extensionPeriod">extension_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.waitPeriod">wait_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor">CloudwatchCompositeAlarmActionsSuppressor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_input`<sup>Optional</sup> <a name="alarm_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.alarmInput"></a>

```python
alarm_input: str
```

- *Type:* str

---

##### `extension_period_input`<sup>Optional</sup> <a name="extension_period_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.extensionPeriodInput"></a>

```python
extension_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_period_input`<sup>Optional</sup> <a name="wait_period_input" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.waitPeriodInput"></a>

```python
wait_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarm`<sup>Required</sup> <a name="alarm" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.alarm"></a>

```python
alarm: str
```

- *Type:* str

---

##### `extension_period`<sup>Required</sup> <a name="extension_period" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.extensionPeriod"></a>

```python
extension_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_period`<sup>Required</sup> <a name="wait_period" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.waitPeriod"></a>

```python
wait_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressorOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchCompositeAlarmActionsSuppressor
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmActionsSuppressor">CloudwatchCompositeAlarmActionsSuppressor</a>

---



