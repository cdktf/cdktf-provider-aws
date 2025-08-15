# `dataexchangeEventAction` Submodule <a name="`dataexchangeEventAction` Submodule" id="@cdktf/provider-aws.dataexchangeEventAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataexchangeEventAction <a name="DataexchangeEventAction" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action aws_dataexchange_event_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: typing.Union[IResolvable, typing.List[DataexchangeEventActionAction]] = None,
  event: typing.Union[IResolvable, typing.List[DataexchangeEventActionEvent]] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.event">event</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]]</code> | event block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.action"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.event"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]]

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#region DataexchangeEventAction#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putEvent">put_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetEvent">reset_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putAction"></a>

```python
def put_action(
  value: typing.Union[IResolvable, typing.List[DataexchangeEventActionAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]]

---

##### `put_event` <a name="put_event" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putEvent"></a>

```python
def put_event(
  value: typing.Union[IResolvable, typing.List[DataexchangeEventActionEvent]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putEvent.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_event` <a name="reset_event" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetEvent"></a>

```python
def reset_event() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataexchangeEventAction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataexchangeEventAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataexchangeEventAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataexchangeEventAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataexchangeEventAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList">DataexchangeEventActionActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.event">event</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList">DataexchangeEventActionEventList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.eventInput">event_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.action"></a>

```python
action: DataexchangeEventActionActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList">DataexchangeEventActionActionList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.event"></a>

```python
event: DataexchangeEventActionEventList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList">DataexchangeEventActionEventList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, typing.List[DataexchangeEventActionAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]]

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.eventInput"></a>

```python
event_input: typing.Union[IResolvable, typing.List[DataexchangeEventActionEvent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataexchangeEventActionAction <a name="DataexchangeEventActionAction" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionAction(
  export_revision_to_s3: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3">export_revision_to_s3</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>]]</code> | export_revision_to_s3 block. |

---

##### `export_revision_to_s3`<sup>Optional</sup> <a name="export_revision_to_s3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3"></a>

```python
export_revision_to_s3: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>]]

export_revision_to_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#export_revision_to_s3 DataexchangeEventAction#export_revision_to_s3}

---

### DataexchangeEventActionActionExportRevisionToS3 <a name="DataexchangeEventActionActionExportRevisionToS3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3(
  encryption: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3Encryption]] = None,
  revision_destination: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3RevisionDestination]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption">encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>]]</code> | encryption block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination">revision_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>]]</code> | revision_destination block. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption"></a>

```python
encryption: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3Encryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>]]

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#encryption DataexchangeEventAction#encryption}

---

##### `revision_destination`<sup>Optional</sup> <a name="revision_destination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination"></a>

```python
revision_destination: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3RevisionDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>]]

revision_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#revision_destination DataexchangeEventAction#revision_destination}

---

### DataexchangeEventActionActionExportRevisionToS3Encryption <a name="DataexchangeEventActionActionExportRevisionToS3Encryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption(
  kms_key_arn: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}.

---

### DataexchangeEventActionActionExportRevisionToS3RevisionDestination <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination(
  bucket: str,
  key_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern">key_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}.

---

##### `key_pattern`<sup>Optional</sup> <a name="key_pattern" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern"></a>

```python
key_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}.

---

### DataexchangeEventActionConfig <a name="DataexchangeEventActionConfig" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: typing.Union[IResolvable, typing.List[DataexchangeEventActionAction]] = None,
  event: typing.Union[IResolvable, typing.List[DataexchangeEventActionEvent]] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.event">event</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]]</code> | event block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.action"></a>

```python
action: typing.Union[IResolvable, typing.List[DataexchangeEventActionAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.event"></a>

```python
event: typing.Union[IResolvable, typing.List[DataexchangeEventActionEvent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]]

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#region DataexchangeEventAction#region}

---

### DataexchangeEventActionEvent <a name="DataexchangeEventActionEvent" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEvent(
  revision_published: typing.Union[IResolvable, typing.List[DataexchangeEventActionEventRevisionPublished]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished">revision_published</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>]]</code> | revision_published block. |

---

##### `revision_published`<sup>Optional</sup> <a name="revision_published" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished"></a>

```python
revision_published: typing.Union[IResolvable, typing.List[DataexchangeEventActionEventRevisionPublished]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>]]

revision_published block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#revision_published DataexchangeEventAction#revision_published}

---

### DataexchangeEventActionEventRevisionPublished <a name="DataexchangeEventActionEventRevisionPublished" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished(
  data_set_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId">data_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}. |

---

##### `data_set_id`<sup>Required</sup> <a name="data_set_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataexchangeEventActionActionExportRevisionToS3EncryptionList <a name="DataexchangeEventActionActionExportRevisionToS3EncryptionList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3Encryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>]]

---


### DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeEventActionActionExportRevisionToS3Encryption]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>]

---


### DataexchangeEventActionActionExportRevisionToS3List <a name="DataexchangeEventActionActionExportRevisionToS3List" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeEventActionActionExportRevisionToS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>]]

---


### DataexchangeEventActionActionExportRevisionToS3OutputReference <a name="DataexchangeEventActionActionExportRevisionToS3OutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination">put_revision_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination">reset_revision_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption"></a>

```python
def put_encryption(
  value: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3Encryption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>]]

---

##### `put_revision_destination` <a name="put_revision_destination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination"></a>

```python
def put_revision_destination(
  value: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3RevisionDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>]]

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_revision_destination` <a name="reset_revision_destination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination"></a>

```python
def reset_revision_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList">DataexchangeEventActionActionExportRevisionToS3EncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination">revision_destination</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput">encryption_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput">revision_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption"></a>

```python
encryption: DataexchangeEventActionActionExportRevisionToS3EncryptionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList">DataexchangeEventActionActionExportRevisionToS3EncryptionList</a>

---

##### `revision_destination`<sup>Required</sup> <a name="revision_destination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination"></a>

```python
revision_destination: DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput"></a>

```python
encryption_input: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3Encryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>]]

---

##### `revision_destination_input`<sup>Optional</sup> <a name="revision_destination_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput"></a>

```python
revision_destination_input: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3RevisionDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeEventActionActionExportRevisionToS3]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>]

---


### DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3RevisionDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>]]

---


### DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern">reset_key_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_pattern` <a name="reset_key_pattern" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern"></a>

```python
def reset_key_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput">key_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern">key_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_pattern_input`<sup>Optional</sup> <a name="key_pattern_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput"></a>

```python
key_pattern_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key_pattern`<sup>Required</sup> <a name="key_pattern" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern"></a>

```python
key_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeEventActionActionExportRevisionToS3RevisionDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>]

---


### DataexchangeEventActionActionList <a name="DataexchangeEventActionActionList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeEventActionActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeEventActionAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]]

---


### DataexchangeEventActionActionOutputReference <a name="DataexchangeEventActionActionOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3">put_export_revision_to_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3">reset_export_revision_to_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_export_revision_to_s3` <a name="put_export_revision_to_s3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3"></a>

```python
def put_export_revision_to_s3(
  value: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>]]

---

##### `reset_export_revision_to_s3` <a name="reset_export_revision_to_s3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3"></a>

```python
def reset_export_revision_to_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3">export_revision_to_s3</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List">DataexchangeEventActionActionExportRevisionToS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input">export_revision_to_s3_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_revision_to_s3`<sup>Required</sup> <a name="export_revision_to_s3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3"></a>

```python
export_revision_to_s3: DataexchangeEventActionActionExportRevisionToS3List
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List">DataexchangeEventActionActionExportRevisionToS3List</a>

---

##### `export_revision_to_s3_input`<sup>Optional</sup> <a name="export_revision_to_s3_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input"></a>

```python
export_revision_to_s3_input: typing.Union[IResolvable, typing.List[DataexchangeEventActionActionExportRevisionToS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeEventActionAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>]

---


### DataexchangeEventActionEventList <a name="DataexchangeEventActionEventList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEventList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeEventActionEventOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeEventActionEvent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]]

---


### DataexchangeEventActionEventOutputReference <a name="DataexchangeEventActionEventOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEventOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished">put_revision_published</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished">reset_revision_published</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_revision_published` <a name="put_revision_published" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished"></a>

```python
def put_revision_published(
  value: typing.Union[IResolvable, typing.List[DataexchangeEventActionEventRevisionPublished]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>]]

---

##### `reset_revision_published` <a name="reset_revision_published" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished"></a>

```python
def reset_revision_published() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished">revision_published</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList">DataexchangeEventActionEventRevisionPublishedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput">revision_published_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revision_published`<sup>Required</sup> <a name="revision_published" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished"></a>

```python
revision_published: DataexchangeEventActionEventRevisionPublishedList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList">DataexchangeEventActionEventRevisionPublishedList</a>

---

##### `revision_published_input`<sup>Optional</sup> <a name="revision_published_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput"></a>

```python
revision_published_input: typing.Union[IResolvable, typing.List[DataexchangeEventActionEventRevisionPublished]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeEventActionEvent]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>]

---


### DataexchangeEventActionEventRevisionPublishedList <a name="DataexchangeEventActionEventRevisionPublishedList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeEventActionEventRevisionPublishedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeEventActionEventRevisionPublished]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>]]

---


### DataexchangeEventActionEventRevisionPublishedOutputReference <a name="DataexchangeEventActionEventRevisionPublishedOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput">data_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId">data_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_set_id_input`<sup>Optional</sup> <a name="data_set_id_input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput"></a>

```python
data_set_id_input: str
```

- *Type:* str

---

##### `data_set_id`<sup>Required</sup> <a name="data_set_id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeEventActionEventRevisionPublished]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>]

---



