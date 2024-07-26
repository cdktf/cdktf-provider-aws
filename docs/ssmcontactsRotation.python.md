# `ssmcontactsRotation` Submodule <a name="`ssmcontactsRotation` Submodule" id="@cdktf/provider-aws.ssmcontactsRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsRotation <a name="SsmcontactsRotation" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation aws_ssmcontacts_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_ids: typing.List[str],
  name: str,
  time_zone_id: str,
  recurrence: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrence]] = None,
  start_time: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.contactIds">contact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.timeZoneId">time_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.recurrence">recurrence</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]]</code> | recurrence block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_ids`<sup>Required</sup> <a name="contact_ids" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.contactIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}.

---

##### `time_zone_id`<sup>Required</sup> <a name="time_zone_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.timeZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.recurrence"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]]

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#recurrence SsmcontactsRotation#recurrence}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.putRecurrence">put_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetRecurrence">reset_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_recurrence` <a name="put_recurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.putRecurrence"></a>

```python
def put_recurrence(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrence]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.putRecurrence.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]]

---

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SsmcontactsRotation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SsmcontactsRotation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmcontactsRotation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmcontactsRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsmcontactsRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList">SsmcontactsRotationRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput">contact_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput">recurrence_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput">time_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIds">contact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId">time_zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrence"></a>

```python
recurrence: SsmcontactsRotationRecurrenceList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList">SsmcontactsRotationRecurrenceList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `contact_ids_input`<sup>Optional</sup> <a name="contact_ids_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput"></a>

```python
contact_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput"></a>

```python
recurrence_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `time_zone_id_input`<sup>Optional</sup> <a name="time_zone_id_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput"></a>

```python
time_zone_id_input: str
```

- *Type:* str

---

##### `contact_ids`<sup>Required</sup> <a name="contact_ids" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIds"></a>

```python
contact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `time_zone_id`<sup>Required</sup> <a name="time_zone_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId"></a>

```python
time_zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsRotationConfig <a name="SsmcontactsRotationConfig" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_ids: typing.List[str],
  name: str,
  time_zone_id: str,
  recurrence: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrence]] = None,
  start_time: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds">contact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId">time_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence">recurrence</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]]</code> | recurrence block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_ids`<sup>Required</sup> <a name="contact_ids" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds"></a>

```python
contact_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}.

---

##### `time_zone_id`<sup>Required</sup> <a name="time_zone_id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId"></a>

```python
time_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence"></a>

```python
recurrence: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]]

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#recurrence SsmcontactsRotation#recurrence}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}.

---

### SsmcontactsRotationRecurrence <a name="SsmcontactsRotationRecurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrence(
  number_of_on_calls: typing.Union[int, float],
  recurrence_multiplier: typing.Union[int, float],
  daily_settings: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceDailySettings]] = None,
  monthly_settings: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettings]] = None,
  shift_coverages: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoverages]] = None,
  weekly_settings: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls">number_of_on_calls</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier">recurrence_multiplier</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings">daily_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>]]</code> | daily_settings block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings">monthly_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>]]</code> | monthly_settings block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages">shift_coverages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>]]</code> | shift_coverages block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings">weekly_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>]]</code> | weekly_settings block. |

---

##### `number_of_on_calls`<sup>Required</sup> <a name="number_of_on_calls" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls"></a>

```python
number_of_on_calls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}.

---

##### `recurrence_multiplier`<sup>Required</sup> <a name="recurrence_multiplier" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier"></a>

```python
recurrence_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}.

---

##### `daily_settings`<sup>Optional</sup> <a name="daily_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings"></a>

```python
daily_settings: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceDailySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>]]

daily_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#daily_settings SsmcontactsRotation#daily_settings}

---

##### `monthly_settings`<sup>Optional</sup> <a name="monthly_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings"></a>

```python
monthly_settings: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>]]

monthly_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#monthly_settings SsmcontactsRotation#monthly_settings}

---

##### `shift_coverages`<sup>Optional</sup> <a name="shift_coverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages"></a>

```python
shift_coverages: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoverages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>]]

shift_coverages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#shift_coverages SsmcontactsRotation#shift_coverages}

---

##### `weekly_settings`<sup>Optional</sup> <a name="weekly_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings"></a>

```python
weekly_settings: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>]]

weekly_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#weekly_settings SsmcontactsRotation#weekly_settings}

---

### SsmcontactsRotationRecurrenceDailySettings <a name="SsmcontactsRotationRecurrenceDailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings(
  hour_of_day: typing.Union[int, float],
  minute_of_hour: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceMonthlySettings <a name="SsmcontactsRotationRecurrenceMonthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings(
  day_of_month: typing.Union[int, float],
  hand_off_time: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime">hand_off_time</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>]]</code> | hand_off_time block. |

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}.

---

##### `hand_off_time`<sup>Optional</sup> <a name="hand_off_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime"></a>

```python
hand_off_time: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>]]

hand_off_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime <a name="SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime(
  hour_of_day: typing.Union[int, float],
  minute_of_hour: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceShiftCoverages <a name="SsmcontactsRotationRecurrenceShiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages(
  map_block_key: str,
  coverage_times: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.mapBlockKey">map_block_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#map_block_key SsmcontactsRotation#map_block_key}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes">coverage_times</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>]]</code> | coverage_times block. |

---

##### `map_block_key`<sup>Required</sup> <a name="map_block_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.mapBlockKey"></a>

```python
map_block_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#map_block_key SsmcontactsRotation#map_block_key}.

---

##### `coverage_times`<sup>Optional</sup> <a name="coverage_times" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes"></a>

```python
coverage_times: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>]]

coverage_times block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#coverage_times SsmcontactsRotation#coverage_times}

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes(
  end: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd]] = None,
  start: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.end">end</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>]]</code> | end block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.start">start</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>]]</code> | start block. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.end"></a>

```python
end: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>]]

end block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#end SsmcontactsRotation#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.start"></a>

```python
start: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>]]

start block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#start SsmcontactsRotation#start}

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd(
  hour_of_day: typing.Union[int, float],
  minute_of_hour: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart(
  hour_of_day: typing.Union[int, float],
  minute_of_hour: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceWeeklySettings <a name="SsmcontactsRotationRecurrenceWeeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings(
  day_of_week: str,
  hand_off_time: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime">hand_off_time</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>]]</code> | hand_off_time block. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}.

---

##### `hand_off_time`<sup>Optional</sup> <a name="hand_off_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime"></a>

```python
hand_off_time: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>]]

hand_off_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime <a name="SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime(
  hour_of_day: typing.Union[int, float],
  minute_of_hour: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsRotationRecurrenceDailySettingsList <a name="SsmcontactsRotationRecurrenceDailySettingsList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceDailySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceDailySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>]]

---


### SsmcontactsRotationRecurrenceDailySettingsOutputReference <a name="SsmcontactsRotationRecurrenceDailySettingsOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHourInput">minute_of_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour_input`<sup>Optional</sup> <a name="minute_of_hour_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHourInput"></a>

```python
minute_of_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrenceDailySettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>]

---


### SsmcontactsRotationRecurrenceList <a name="SsmcontactsRotationRecurrenceList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]]

---


### SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList <a name="SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>]]

---


### SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference <a name="SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHourInput">minute_of_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour_input`<sup>Optional</sup> <a name="minute_of_hour_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHourInput"></a>

```python
minute_of_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>]

---


### SsmcontactsRotationRecurrenceMonthlySettingsList <a name="SsmcontactsRotationRecurrenceMonthlySettingsList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceMonthlySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>]]

---


### SsmcontactsRotationRecurrenceMonthlySettingsOutputReference <a name="SsmcontactsRotationRecurrenceMonthlySettingsOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.putHandOffTime">put_hand_off_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime">reset_hand_off_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hand_off_time` <a name="put_hand_off_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.putHandOffTime"></a>

```python
def put_hand_off_time(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.putHandOffTime.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>]]

---

##### `reset_hand_off_time` <a name="reset_hand_off_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime"></a>

```python
def reset_hand_off_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime">hand_off_time</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput">day_of_month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput">hand_off_time_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hand_off_time`<sup>Required</sup> <a name="hand_off_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime"></a>

```python
hand_off_time: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a>

---

##### `day_of_month_input`<sup>Optional</sup> <a name="day_of_month_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput"></a>

```python
day_of_month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hand_off_time_input`<sup>Optional</sup> <a name="hand_off_time_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput"></a>

```python
hand_off_time_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>]]

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrenceMonthlySettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>]

---


### SsmcontactsRotationRecurrenceOutputReference <a name="SsmcontactsRotationRecurrenceOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putDailySettings">put_daily_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings">put_monthly_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages">put_shift_coverages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings">put_weekly_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings">reset_daily_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings">reset_monthly_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages">reset_shift_coverages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings">reset_weekly_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_daily_settings` <a name="put_daily_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putDailySettings"></a>

```python
def put_daily_settings(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceDailySettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putDailySettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>]]

---

##### `put_monthly_settings` <a name="put_monthly_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings"></a>

```python
def put_monthly_settings(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>]]

---

##### `put_shift_coverages` <a name="put_shift_coverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages"></a>

```python
def put_shift_coverages(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoverages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>]]

---

##### `put_weekly_settings` <a name="put_weekly_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings"></a>

```python
def put_weekly_settings(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>]]

---

##### `reset_daily_settings` <a name="reset_daily_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings"></a>

```python
def reset_daily_settings() -> None
```

##### `reset_monthly_settings` <a name="reset_monthly_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings"></a>

```python
def reset_monthly_settings() -> None
```

##### `reset_shift_coverages` <a name="reset_shift_coverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages"></a>

```python
def reset_shift_coverages() -> None
```

##### `reset_weekly_settings` <a name="reset_weekly_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings"></a>

```python
def reset_weekly_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings">daily_settings</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList">SsmcontactsRotationRecurrenceDailySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings">monthly_settings</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages">shift_coverages</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings">weekly_settings</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput">daily_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput">monthly_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput">number_of_on_calls_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput">recurrence_multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput">shift_coverages_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput">weekly_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls">number_of_on_calls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier">recurrence_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `daily_settings`<sup>Required</sup> <a name="daily_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings"></a>

```python
daily_settings: SsmcontactsRotationRecurrenceDailySettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList">SsmcontactsRotationRecurrenceDailySettingsList</a>

---

##### `monthly_settings`<sup>Required</sup> <a name="monthly_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings"></a>

```python
monthly_settings: SsmcontactsRotationRecurrenceMonthlySettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a>

---

##### `shift_coverages`<sup>Required</sup> <a name="shift_coverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages"></a>

```python
shift_coverages: SsmcontactsRotationRecurrenceShiftCoveragesList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a>

---

##### `weekly_settings`<sup>Required</sup> <a name="weekly_settings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings"></a>

```python
weekly_settings: SsmcontactsRotationRecurrenceWeeklySettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a>

---

##### `daily_settings_input`<sup>Optional</sup> <a name="daily_settings_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput"></a>

```python
daily_settings_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceDailySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>]]

---

##### `monthly_settings_input`<sup>Optional</sup> <a name="monthly_settings_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput"></a>

```python
monthly_settings_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceMonthlySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>]]

---

##### `number_of_on_calls_input`<sup>Optional</sup> <a name="number_of_on_calls_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput"></a>

```python
number_of_on_calls_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurrence_multiplier_input`<sup>Optional</sup> <a name="recurrence_multiplier_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput"></a>

```python
recurrence_multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shift_coverages_input`<sup>Optional</sup> <a name="shift_coverages_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput"></a>

```python
shift_coverages_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoverages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>]]

---

##### `weekly_settings_input`<sup>Optional</sup> <a name="weekly_settings_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput"></a>

```python
weekly_settings_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>]]

---

##### `number_of_on_calls`<sup>Required</sup> <a name="number_of_on_calls" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls"></a>

```python
number_of_on_calls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurrence_multiplier`<sup>Required</sup> <a name="recurrence_multiplier" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier"></a>

```python
recurrence_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrence]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>]]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHourInput">minute_of_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour_input`<sup>Optional</sup> <a name="minute_of_hour_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHourInput"></a>

```python
minute_of_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>]]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putEnd">put_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putStart">put_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStart">reset_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end` <a name="put_end" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putEnd"></a>

```python
def put_end(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putEnd.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>]]

---

##### `put_start` <a name="put_start" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putStart"></a>

```python
def put_start(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putStart.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>]]

---

##### `reset_end` <a name="reset_end" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStart"></a>

```python
def reset_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end">end</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start">start</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endInput">end_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startInput">start_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end"></a>

```python
end: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a>

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start"></a>

```python
start: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a>

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endInput"></a>

```python
end_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>]]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startInput"></a>

```python
start_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>]]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHourInput">minute_of_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour_input`<sup>Optional</sup> <a name="minute_of_hour_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHourInput"></a>

```python
minute_of_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>]

---


### SsmcontactsRotationRecurrenceShiftCoveragesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceShiftCoveragesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoverages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>]]

---


### SsmcontactsRotationRecurrenceShiftCoveragesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes">put_coverage_times</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes">reset_coverage_times</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_coverage_times` <a name="put_coverage_times" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes"></a>

```python
def put_coverage_times(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>]]

---

##### `reset_coverage_times` <a name="reset_coverage_times" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes"></a>

```python
def reset_coverage_times() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes">coverage_times</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput">coverage_times_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKeyInput">map_block_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey">map_block_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coverage_times`<sup>Required</sup> <a name="coverage_times" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes"></a>

```python
coverage_times: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a>

---

##### `coverage_times_input`<sup>Optional</sup> <a name="coverage_times_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput"></a>

```python
coverage_times_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>]]

---

##### `map_block_key_input`<sup>Optional</sup> <a name="map_block_key_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKeyInput"></a>

```python
map_block_key_input: str
```

- *Type:* str

---

##### `map_block_key`<sup>Required</sup> <a name="map_block_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey"></a>

```python
map_block_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrenceShiftCoverages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>]

---


### SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList <a name="SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>]]

---


### SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference <a name="SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHourInput">minute_of_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour">minute_of_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour_input`<sup>Optional</sup> <a name="minute_of_hour_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHourInput"></a>

```python
minute_of_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_of_hour`<sup>Required</sup> <a name="minute_of_hour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```python
minute_of_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>]

---


### SsmcontactsRotationRecurrenceWeeklySettingsList <a name="SsmcontactsRotationRecurrenceWeeklySettingsList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsRotationRecurrenceWeeklySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>]]

---


### SsmcontactsRotationRecurrenceWeeklySettingsOutputReference <a name="SsmcontactsRotationRecurrenceWeeklySettingsOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_rotation

ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.putHandOffTime">put_hand_off_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime">reset_hand_off_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hand_off_time` <a name="put_hand_off_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.putHandOffTime"></a>

```python
def put_hand_off_time(
  value: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.putHandOffTime.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>]]

---

##### `reset_hand_off_time` <a name="reset_hand_off_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime"></a>

```python
def reset_hand_off_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime">hand_off_time</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput">hand_off_time_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hand_off_time`<sup>Required</sup> <a name="hand_off_time" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime"></a>

```python
hand_off_time: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `hand_off_time_input`<sup>Optional</sup> <a name="hand_off_time_input" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput"></a>

```python
hand_off_time_input: typing.Union[IResolvable, typing.List[SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>]]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmcontactsRotationRecurrenceWeeklySettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>]

---



