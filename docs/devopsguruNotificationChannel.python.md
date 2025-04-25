# `devopsguruNotificationChannel` Submodule <a name="`devopsguruNotificationChannel` Submodule" id="@cdktf/provider-aws.devopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruNotificationChannel <a name="DevopsguruNotificationChannel" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel aws_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filters: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelFilters]] = None,
  sns: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelSns]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.filters">filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]]</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.sns">sns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]]</code> | sns block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.filters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.sns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]]

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putSns">put_sns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetSns">reset_sns</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putFilters"></a>

```python
def put_filters(
  value: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]]

---

##### `put_sns` <a name="put_sns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putSns"></a>

```python
def put_sns(
  value: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelSns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putSns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]]

---

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_sns` <a name="reset_sns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetSns"></a>

```python
def reset_sns() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsguruNotificationChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList">DevopsguruNotificationChannelFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.sns">sns</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList">DevopsguruNotificationChannelSnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filtersInput">filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.snsInput">sns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filters"></a>

```python
filters: DevopsguruNotificationChannelFiltersList
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList">DevopsguruNotificationChannelFiltersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.sns"></a>

```python
sns: DevopsguruNotificationChannelSnsList
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList">DevopsguruNotificationChannelSnsList</a>

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filtersInput"></a>

```python
filters_input: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]]

---

##### `sns_input`<sup>Optional</sup> <a name="sns_input" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.snsInput"></a>

```python
sns_input: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelSns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruNotificationChannelConfig <a name="DevopsguruNotificationChannelConfig" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filters: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelFilters]] = None,
  sns: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelSns]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.filters">filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]]</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.sns">sns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]]</code> | sns block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.filters"></a>

```python
filters: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.sns"></a>

```python
sns: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelSns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]]

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}

---

### DevopsguruNotificationChannelFilters <a name="DevopsguruNotificationChannelFilters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelFilters(
  message_types: typing.List[str] = None,
  severities: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.messageTypes">message_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.severities">severities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}. |

---

##### `message_types`<sup>Optional</sup> <a name="message_types" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.messageTypes"></a>

```python
message_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}.

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}.

---

### DevopsguruNotificationChannelSns <a name="DevopsguruNotificationChannelSns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelSns(
  topic_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}. |

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruNotificationChannelFiltersList <a name="DevopsguruNotificationChannelFiltersList" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsguruNotificationChannelFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]]

---


### DevopsguruNotificationChannelFiltersOutputReference <a name="DevopsguruNotificationChannelFiltersOutputReference" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetMessageTypes">reset_message_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetSeverities">reset_severities</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message_types` <a name="reset_message_types" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetMessageTypes"></a>

```python
def reset_message_types() -> None
```

##### `reset_severities` <a name="reset_severities" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetSeverities"></a>

```python
def reset_severities() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypesInput">message_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severitiesInput">severities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypes">message_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severities">severities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_types_input`<sup>Optional</sup> <a name="message_types_input" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypesInput"></a>

```python
message_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities_input`<sup>Optional</sup> <a name="severities_input" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severitiesInput"></a>

```python
severities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `message_types`<sup>Required</sup> <a name="message_types" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypes"></a>

```python
message_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsguruNotificationChannelFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>]

---


### DevopsguruNotificationChannelSnsList <a name="DevopsguruNotificationChannelSnsList" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsguruNotificationChannelSnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsguruNotificationChannelSns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]]

---


### DevopsguruNotificationChannelSnsOutputReference <a name="DevopsguruNotificationChannelSnsOutputReference" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsguruNotificationChannelSns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>]

---



