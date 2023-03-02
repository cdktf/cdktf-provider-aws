# `glueTrigger` Submodule <a name="`glueTrigger` Submodule" id="@cdktf/provider-aws.glueTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTrigger <a name="GlueTrigger" id="@cdktf/provider-aws.glueTrigger.GlueTrigger"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger aws_glue_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTrigger(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  actions: typing.Union[IResolvable, typing.List[GlueTriggerActions]],
  name: str,
  type: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  event_batching_condition: typing.Union[IResolvable, typing.List[GlueTriggerEventBatchingCondition]] = None,
  id: str = None,
  predicate: GlueTriggerPredicate = None,
  schedule: str = None,
  start_on_creation: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: GlueTriggerTimeouts = None,
  workflow_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]]</code> | actions block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#name GlueTrigger#name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#type GlueTrigger#type}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#description GlueTrigger#description}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#enabled GlueTrigger#enabled}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.eventBatchingCondition">event_batching_condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>]]</code> | event_batching_condition block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#id GlueTrigger#id}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#schedule GlueTrigger#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.startOnCreation">start_on_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#start_on_creation GlueTrigger#start_on_creation}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags GlueTrigger#tags}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags_all GlueTrigger#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.workflowName">workflow_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#workflow_name GlueTrigger#workflow_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.actions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#actions GlueTrigger#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#name GlueTrigger#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#type GlueTrigger#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#description GlueTrigger#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#enabled GlueTrigger#enabled}.

---

##### `event_batching_condition`<sup>Optional</sup> <a name="event_batching_condition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.eventBatchingCondition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>]]

event_batching_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#id GlueTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.predicate"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#predicate GlueTrigger#predicate}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.schedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#schedule GlueTrigger#schedule}.

---

##### `start_on_creation`<sup>Optional</sup> <a name="start_on_creation" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.startOnCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#start_on_creation GlueTrigger#start_on_creation}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags GlueTrigger#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags_all GlueTrigger#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeouts GlueTrigger#timeouts}

---

##### `workflow_name`<sup>Optional</sup> <a name="workflow_name" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.workflowName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#workflow_name GlueTrigger#workflow_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putEventBatchingCondition">put_event_batching_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEventBatchingCondition">reset_event_batching_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetPredicate">reset_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetStartOnCreation">reset_start_on_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetWorkflowName">reset_workflow_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_actions` <a name="put_actions" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putActions"></a>

```python
def put_actions(
  value: typing.Union[IResolvable, typing.List[GlueTriggerActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]]

---

##### `put_event_batching_condition` <a name="put_event_batching_condition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putEventBatchingCondition"></a>

```python
def put_event_batching_condition(
  value: typing.Union[IResolvable, typing.List[GlueTriggerEventBatchingCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putEventBatchingCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>]]

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate"></a>

```python
def put_predicate(
  conditions: typing.Union[IResolvable, typing.List[GlueTriggerPredicateConditions]],
  logical: str = None
) -> None
```

###### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate.parameter.conditions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#conditions GlueTrigger#conditions}

---

###### `logical`<sup>Optional</sup> <a name="logical" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate.parameter.logical"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical GlueTrigger#logical}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#create GlueTrigger#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#delete GlueTrigger#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_batching_condition` <a name="reset_event_batching_condition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEventBatchingCondition"></a>

```python
def reset_event_batching_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_predicate` <a name="reset_predicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetPredicate"></a>

```python
def reset_predicate() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_start_on_creation` <a name="reset_start_on_creation" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetStartOnCreation"></a>

```python
def reset_start_on_creation() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workflow_name` <a name="reset_workflow_name" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetWorkflowName"></a>

```python
def reset_workflow_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTrigger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingCondition">event_batching_condition</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList">GlueTriggerEventBatchingConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference">GlueTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actionsInput">actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingConditionInput">event_batching_condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicateInput">predicate_input</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreationInput">start_on_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowNameInput">workflow_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreation">start_on_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowName">workflow_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actions"></a>

```python
actions: GlueTriggerActionsList
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `event_batching_condition`<sup>Required</sup> <a name="event_batching_condition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingCondition"></a>

```python
event_batching_condition: GlueTriggerEventBatchingConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList">GlueTriggerEventBatchingConditionList</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicate"></a>

```python
predicate: GlueTriggerPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeouts"></a>

```python
timeouts: GlueTriggerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference">GlueTriggerTimeoutsOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actionsInput"></a>

```python
actions_input: typing.Union[IResolvable, typing.List[GlueTriggerActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_batching_condition_input`<sup>Optional</sup> <a name="event_batching_condition_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingConditionInput"></a>

```python
event_batching_condition_input: typing.Union[IResolvable, typing.List[GlueTriggerEventBatchingCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicateInput"></a>

```python
predicate_input: GlueTriggerPredicate
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `start_on_creation_input`<sup>Optional</sup> <a name="start_on_creation_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreationInput"></a>

```python
start_on_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GlueTriggerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `workflow_name_input`<sup>Optional</sup> <a name="workflow_name_input" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowNameInput"></a>

```python
workflow_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `start_on_creation`<sup>Required</sup> <a name="start_on_creation" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreation"></a>

```python
start_on_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTriggerActions <a name="GlueTriggerActions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerActions(
  arguments: typing.Mapping[str] = None,
  crawler_name: str = None,
  job_name: str = None,
  notification_property: GlueTriggerActionsNotificationProperty = None,
  security_configuration: str = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#arguments GlueTrigger#arguments}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.crawlerName">crawler_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.notificationProperty">notification_property</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#security_configuration GlueTrigger#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeout GlueTrigger#timeout}. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#arguments GlueTrigger#arguments}.

---

##### `crawler_name`<sup>Optional</sup> <a name="crawler_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.crawlerName"></a>

```python
crawler_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}.

---

##### `job_name`<sup>Optional</sup> <a name="job_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}.

---

##### `notification_property`<sup>Optional</sup> <a name="notification_property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.notificationProperty"></a>

```python
notification_property: GlueTriggerActionsNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notification_property GlueTrigger#notification_property}

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#security_configuration GlueTrigger#security_configuration}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeout GlueTrigger#timeout}.

---

### GlueTriggerActionsNotificationProperty <a name="GlueTriggerActionsNotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerActionsNotificationProperty(
  notify_delay_after: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter">notify_delay_after</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}. |

---

##### `notify_delay_after`<sup>Optional</sup> <a name="notify_delay_after" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter"></a>

```python
notify_delay_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}.

---

### GlueTriggerConfig <a name="GlueTriggerConfig" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  actions: typing.Union[IResolvable, typing.List[GlueTriggerActions]],
  name: str,
  type: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  event_batching_condition: typing.Union[IResolvable, typing.List[GlueTriggerEventBatchingCondition]] = None,
  id: str = None,
  predicate: GlueTriggerPredicate = None,
  schedule: str = None,
  start_on_creation: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: GlueTriggerTimeouts = None,
  workflow_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]]</code> | actions block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#name GlueTrigger#name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#type GlueTrigger#type}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#description GlueTrigger#description}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#enabled GlueTrigger#enabled}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition">event_batching_condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>]]</code> | event_batching_condition block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#id GlueTrigger#id}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#schedule GlueTrigger#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.startOnCreation">start_on_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#start_on_creation GlueTrigger#start_on_creation}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags GlueTrigger#tags}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags_all GlueTrigger#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.workflowName">workflow_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#workflow_name GlueTrigger#workflow_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.actions"></a>

```python
actions: typing.Union[IResolvable, typing.List[GlueTriggerActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#actions GlueTrigger#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#name GlueTrigger#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#type GlueTrigger#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#description GlueTrigger#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#enabled GlueTrigger#enabled}.

---

##### `event_batching_condition`<sup>Optional</sup> <a name="event_batching_condition" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition"></a>

```python
event_batching_condition: typing.Union[IResolvable, typing.List[GlueTriggerEventBatchingCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>]]

event_batching_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#id GlueTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.predicate"></a>

```python
predicate: GlueTriggerPredicate
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#predicate GlueTrigger#predicate}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#schedule GlueTrigger#schedule}.

---

##### `start_on_creation`<sup>Optional</sup> <a name="start_on_creation" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.startOnCreation"></a>

```python
start_on_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#start_on_creation GlueTrigger#start_on_creation}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags GlueTrigger#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags_all GlueTrigger#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.timeouts"></a>

```python
timeouts: GlueTriggerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeouts GlueTrigger#timeouts}

---

##### `workflow_name`<sup>Optional</sup> <a name="workflow_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#workflow_name GlueTrigger#workflow_name}.

---

### GlueTriggerEventBatchingCondition <a name="GlueTriggerEventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerEventBatchingCondition(
  batch_size: typing.Union[int, float],
  batch_window: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_size GlueTrigger#batch_size}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow">batch_window</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_window GlueTrigger#batch_window}. |

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_size GlueTrigger#batch_size}.

---

##### `batch_window`<sup>Optional</sup> <a name="batch_window" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow"></a>

```python
batch_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_window GlueTrigger#batch_window}.

---

### GlueTriggerPredicate <a name="GlueTriggerPredicate" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerPredicate(
  conditions: typing.Union[IResolvable, typing.List[GlueTriggerPredicateConditions]],
  logical: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.logical">logical</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical GlueTrigger#logical}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[GlueTriggerPredicateConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#conditions GlueTrigger#conditions}

---

##### `logical`<sup>Optional</sup> <a name="logical" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.logical"></a>

```python
logical: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical GlueTrigger#logical}.

---

### GlueTriggerPredicateConditions <a name="GlueTriggerPredicateConditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerPredicateConditions(
  crawler_name: str = None,
  crawl_state: str = None,
  job_name: str = None,
  logical_operator: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName">crawler_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlState">crawl_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawl_state GlueTrigger#crawl_state}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator">logical_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical_operator GlueTrigger#logical_operator}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#state GlueTrigger#state}. |

---

##### `crawler_name`<sup>Optional</sup> <a name="crawler_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName"></a>

```python
crawler_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}.

---

##### `crawl_state`<sup>Optional</sup> <a name="crawl_state" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlState"></a>

```python
crawl_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawl_state GlueTrigger#crawl_state}.

---

##### `job_name`<sup>Optional</sup> <a name="job_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}.

---

##### `logical_operator`<sup>Optional</sup> <a name="logical_operator" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical_operator GlueTrigger#logical_operator}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#state GlueTrigger#state}.

---

### GlueTriggerTimeouts <a name="GlueTriggerTimeouts" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#create GlueTrigger#create}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#delete GlueTrigger#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#create GlueTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#delete GlueTrigger#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTriggerActionsList <a name="GlueTriggerActionsList" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTriggerActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueTriggerActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]]

---


### GlueTriggerActionsNotificationPropertyOutputReference <a name="GlueTriggerActionsNotificationPropertyOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter">reset_notify_delay_after</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notify_delay_after` <a name="reset_notify_delay_after" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```python
def reset_notify_delay_after() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput">notify_delay_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter">notify_delay_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notify_delay_after_input`<sup>Optional</sup> <a name="notify_delay_after_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```python
notify_delay_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notify_delay_after`<sup>Required</sup> <a name="notify_delay_after" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```python
notify_delay_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue"></a>

```python
internal_value: GlueTriggerActionsNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---


### GlueTriggerActionsOutputReference <a name="GlueTriggerActionsOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty">put_notification_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName">reset_crawler_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetJobName">reset_job_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty">reset_notification_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration">reset_security_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notification_property` <a name="put_notification_property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty"></a>

```python
def put_notification_property(
  notify_delay_after: typing.Union[int, float] = None
) -> None
```

###### `notify_delay_after`<sup>Optional</sup> <a name="notify_delay_after" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty.parameter.notifyDelayAfter"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}.

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_crawler_name` <a name="reset_crawler_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName"></a>

```python
def reset_crawler_name() -> None
```

##### `reset_job_name` <a name="reset_job_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetJobName"></a>

```python
def reset_job_name() -> None
```

##### `reset_notification_property` <a name="reset_notification_property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty"></a>

```python
def reset_notification_property() -> None
```

##### `reset_security_configuration` <a name="reset_security_configuration" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration"></a>

```python
def reset_security_configuration() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty">notification_property</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput">arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput">crawler_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput">notification_property_input</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput">security_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName">crawler_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_property`<sup>Required</sup> <a name="notification_property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty"></a>

```python
notification_property: GlueTriggerActionsNotificationPropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput"></a>

```python
arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crawler_name_input`<sup>Optional</sup> <a name="crawler_name_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput"></a>

```python
crawler_name_input: str
```

- *Type:* str

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `notification_property_input`<sup>Optional</sup> <a name="notification_property_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput"></a>

```python
notification_property_input: GlueTriggerActionsNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `security_configuration_input`<sup>Optional</sup> <a name="security_configuration_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput"></a>

```python
security_configuration_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crawler_name`<sup>Required</sup> <a name="crawler_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName"></a>

```python
crawler_name: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `security_configuration`<sup>Required</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueTriggerActions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>, cdktf.IResolvable]

---


### GlueTriggerEventBatchingConditionList <a name="GlueTriggerEventBatchingConditionList" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerEventBatchingConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTriggerEventBatchingConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueTriggerEventBatchingCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>]]

---


### GlueTriggerEventBatchingConditionOutputReference <a name="GlueTriggerEventBatchingConditionOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerEventBatchingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow">reset_batch_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_window` <a name="reset_batch_window" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow"></a>

```python
def reset_batch_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput">batch_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow">batch_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_window_input`<sup>Optional</sup> <a name="batch_window_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput"></a>

```python
batch_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_window`<sup>Required</sup> <a name="batch_window" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow"></a>

```python
batch_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueTriggerEventBatchingCondition, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>, cdktf.IResolvable]

---


### GlueTriggerPredicateConditionsList <a name="GlueTriggerPredicateConditionsList" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerPredicateConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTriggerPredicateConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueTriggerPredicateConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]]

---


### GlueTriggerPredicateConditionsOutputReference <a name="GlueTriggerPredicateConditionsOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerPredicateConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName">reset_crawler_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState">reset_crawl_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName">reset_job_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator">reset_logical_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_crawler_name` <a name="reset_crawler_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName"></a>

```python
def reset_crawler_name() -> None
```

##### `reset_crawl_state` <a name="reset_crawl_state" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState"></a>

```python
def reset_crawl_state() -> None
```

##### `reset_job_name` <a name="reset_job_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName"></a>

```python
def reset_job_name() -> None
```

##### `reset_logical_operator` <a name="reset_logical_operator" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator"></a>

```python
def reset_logical_operator() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput">crawler_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput">crawl_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput">logical_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName">crawler_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState">crawl_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator">logical_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crawler_name_input`<sup>Optional</sup> <a name="crawler_name_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput"></a>

```python
crawler_name_input: str
```

- *Type:* str

---

##### `crawl_state_input`<sup>Optional</sup> <a name="crawl_state_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput"></a>

```python
crawl_state_input: str
```

- *Type:* str

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `logical_operator_input`<sup>Optional</sup> <a name="logical_operator_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput"></a>

```python
logical_operator_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `crawler_name`<sup>Required</sup> <a name="crawler_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName"></a>

```python
crawler_name: str
```

- *Type:* str

---

##### `crawl_state`<sup>Required</sup> <a name="crawl_state" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState"></a>

```python
crawl_state: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `logical_operator`<sup>Required</sup> <a name="logical_operator" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueTriggerPredicateConditions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>, cdktf.IResolvable]

---


### GlueTriggerPredicateOutputReference <a name="GlueTriggerPredicateOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical">reset_logical</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[GlueTriggerPredicateConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]]

---

##### `reset_logical` <a name="reset_logical" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical"></a>

```python
def reset_logical() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput">logical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logical">logical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions"></a>

```python
conditions: GlueTriggerPredicateConditionsList
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[GlueTriggerPredicateConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]]

---

##### `logical_input`<sup>Optional</sup> <a name="logical_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput"></a>

```python
logical_input: str
```

- *Type:* str

---

##### `logical`<sup>Required</sup> <a name="logical" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logical"></a>

```python
logical: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue"></a>

```python
internal_value: GlueTriggerPredicate
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---


### GlueTriggerTimeoutsOutputReference <a name="GlueTriggerTimeoutsOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_trigger

glueTrigger.GlueTriggerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueTriggerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>, cdktf.IResolvable]

---



