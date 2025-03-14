# `shieldProactiveEngagement` Submodule <a name="`shieldProactiveEngagement` Submodule" id="@cdktf/provider-aws.shieldProactiveEngagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProactiveEngagement <a name="ShieldProactiveEngagement" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement aws_shield_proactive_engagement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  emergency_contact: typing.Union[IResolvable, typing.List[ShieldProactiveEngagementEmergencyContact]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.emergencyContact">emergency_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]]</code> | emergency_contact block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}.

---

##### `emergency_contact`<sup>Optional</sup> <a name="emergency_contact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.emergencyContact"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]]

emergency_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#emergency_contact ShieldProactiveEngagement#emergency_contact}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact">put_emergency_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetEmergencyContact">reset_emergency_contact</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_emergency_contact` <a name="put_emergency_contact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact"></a>

```python
def put_emergency_contact(
  value: typing.Union[IResolvable, typing.List[ShieldProactiveEngagementEmergencyContact]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]]

---

##### `reset_emergency_contact` <a name="reset_emergency_contact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetEmergencyContact"></a>

```python
def reset_emergency_contact() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ShieldProactiveEngagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ShieldProactiveEngagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ShieldProactiveEngagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ShieldProactiveEngagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ShieldProactiveEngagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContact">emergency_contact</a></code> | <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList">ShieldProactiveEngagementEmergencyContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactInput">emergency_contact_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `emergency_contact`<sup>Required</sup> <a name="emergency_contact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContact"></a>

```python
emergency_contact: ShieldProactiveEngagementEmergencyContactList
```

- *Type:* <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList">ShieldProactiveEngagementEmergencyContactList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `emergency_contact_input`<sup>Optional</sup> <a name="emergency_contact_input" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactInput"></a>

```python
emergency_contact_input: typing.Union[IResolvable, typing.List[ShieldProactiveEngagementEmergencyContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProactiveEngagementConfig <a name="ShieldProactiveEngagementConfig" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  emergency_contact: typing.Union[IResolvable, typing.List[ShieldProactiveEngagementEmergencyContact]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContact">emergency_contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]]</code> | emergency_contact block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}.

---

##### `emergency_contact`<sup>Optional</sup> <a name="emergency_contact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContact"></a>

```python
emergency_contact: typing.Union[IResolvable, typing.List[ShieldProactiveEngagementEmergencyContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]]

emergency_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#emergency_contact ShieldProactiveEngagement#emergency_contact}

---

### ShieldProactiveEngagementEmergencyContact <a name="ShieldProactiveEngagementEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact(
  email_address: str,
  contact_notes: str = None,
  phone_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.contactNotes">contact_notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}. |

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}.

---

##### `contact_notes`<sup>Optional</sup> <a name="contact_notes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.contactNotes"></a>

```python
contact_notes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProactiveEngagementEmergencyContactList <a name="ShieldProactiveEngagementEmergencyContactList" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ShieldProactiveEngagementEmergencyContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ShieldProactiveEngagementEmergencyContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]]

---


### ShieldProactiveEngagementEmergencyContactOutputReference <a name="ShieldProactiveEngagementEmergencyContactOutputReference" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetContactNotes">reset_contact_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contact_notes` <a name="reset_contact_notes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetContactNotes"></a>

```python
def reset_contact_notes() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotesInput">contact_notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotes">contact_notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_notes_input`<sup>Optional</sup> <a name="contact_notes_input" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotesInput"></a>

```python
contact_notes_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `contact_notes`<sup>Required</sup> <a name="contact_notes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotes"></a>

```python
contact_notes: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ShieldProactiveEngagementEmergencyContact]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact">ShieldProactiveEngagementEmergencyContact</a>]

---



