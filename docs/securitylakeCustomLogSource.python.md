# `securitylakeCustomLogSource` Submodule <a name="`securitylakeCustomLogSource` Submodule" id="@cdktf/provider-aws.securitylakeCustomLogSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeCustomLogSource <a name="SecuritylakeCustomLogSource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source aws_securitylake_custom_log_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source_name: str,
  configuration: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfiguration]] = None,
  event_classes: typing.List[str] = None,
  source_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.configuration">configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]]</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.eventClasses">event_classes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.sourceVersion">source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.sourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.configuration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#configuration SecuritylakeCustomLogSource#configuration}

---

##### `event_classes`<sup>Optional</sup> <a name="event_classes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.eventClasses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}.

---

##### `source_version`<sup>Optional</sup> <a name="source_version" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.sourceVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetEventClasses">reset_event_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetSourceVersion">reset_source_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration"></a>

```python
def put_configuration(
  value: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]]

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_event_classes` <a name="reset_event_classes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetEventClasses"></a>

```python
def reset_event_classes() -> None
```

##### `reset_source_version` <a name="reset_source_version" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetSourceVersion"></a>

```python
def reset_source_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecuritylakeCustomLogSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecuritylakeCustomLogSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeCustomLogSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList">SecuritylakeCustomLogSourceAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList">SecuritylakeCustomLogSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.providerDetails">provider_details</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList">SecuritylakeCustomLogSourceProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configurationInput">configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClassesInput">event_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersionInput">source_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClasses">event_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersion">source_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.attributes"></a>

```python
attributes: SecuritylakeCustomLogSourceAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList">SecuritylakeCustomLogSourceAttributesList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configuration"></a>

```python
configuration: SecuritylakeCustomLogSourceConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList">SecuritylakeCustomLogSourceConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provider_details`<sup>Required</sup> <a name="provider_details" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.providerDetails"></a>

```python
provider_details: SecuritylakeCustomLogSourceProviderDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList">SecuritylakeCustomLogSourceProviderDetailsList</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configurationInput"></a>

```python
configuration_input: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]]

---

##### `event_classes_input`<sup>Optional</sup> <a name="event_classes_input" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClassesInput"></a>

```python
event_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `source_version_input`<sup>Optional</sup> <a name="source_version_input" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersionInput"></a>

```python
source_version_input: str
```

- *Type:* str

---

##### `event_classes`<sup>Required</sup> <a name="event_classes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClasses"></a>

```python
event_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_version`<sup>Required</sup> <a name="source_version" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeCustomLogSourceAttributes <a name="SecuritylakeCustomLogSourceAttributes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes()
```


### SecuritylakeCustomLogSourceConfig <a name="SecuritylakeCustomLogSourceConfig" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source_name: str,
  configuration: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfiguration]] = None,
  event_classes: typing.List[str] = None,
  source_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.configuration">configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]]</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.eventClasses">event_classes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceVersion">source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.configuration"></a>

```python
configuration: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#configuration SecuritylakeCustomLogSource#configuration}

---

##### `event_classes`<sup>Optional</sup> <a name="event_classes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.eventClasses"></a>

```python
event_classes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}.

---

##### `source_version`<sup>Optional</sup> <a name="source_version" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}.

---

### SecuritylakeCustomLogSourceConfiguration <a name="SecuritylakeCustomLogSourceConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration(
  crawler_configuration: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration]] = None,
  provider_identity: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationProviderIdentity]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.crawlerConfiguration">crawler_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>]]</code> | crawler_configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.providerIdentity">provider_identity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>]]</code> | provider_identity block. |

---

##### `crawler_configuration`<sup>Optional</sup> <a name="crawler_configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.crawlerConfiguration"></a>

```python
crawler_configuration: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>]]

crawler_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#crawler_configuration SecuritylakeCustomLogSource#crawler_configuration}

---

##### `provider_identity`<sup>Optional</sup> <a name="provider_identity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.providerIdentity"></a>

```python
provider_identity: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationProviderIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>]]

provider_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#provider_identity SecuritylakeCustomLogSource#provider_identity}

---

### SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration(
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}.

---

### SecuritylakeCustomLogSourceConfigurationProviderIdentity <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity(
  external_id: str,
  principal: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}. |

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}.

---

### SecuritylakeCustomLogSourceProviderDetails <a name="SecuritylakeCustomLogSourceProviderDetails" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeCustomLogSourceAttributesList <a name="SecuritylakeCustomLogSourceAttributesList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeCustomLogSourceAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SecuritylakeCustomLogSourceAttributesOutputReference <a name="SecuritylakeCustomLogSourceAttributesOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.crawlerArn">crawler_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.databaseArn">database_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.tableArn">table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes">SecuritylakeCustomLogSourceAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crawler_arn`<sup>Required</sup> <a name="crawler_arn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.crawlerArn"></a>

```python
crawler_arn: str
```

- *Type:* str

---

##### `database_arn`<sup>Required</sup> <a name="database_arn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.databaseArn"></a>

```python
database_arn: str
```

- *Type:* str

---

##### `table_arn`<sup>Required</sup> <a name="table_arn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.tableArn"></a>

```python
table_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.internalValue"></a>

```python
internal_value: SecuritylakeCustomLogSourceAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes">SecuritylakeCustomLogSourceAttributes</a>

---


### SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>]]

---


### SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>]

---


### SecuritylakeCustomLogSourceConfigurationList <a name="SecuritylakeCustomLogSourceConfigurationList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeCustomLogSourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]]

---


### SecuritylakeCustomLogSourceConfigurationOutputReference <a name="SecuritylakeCustomLogSourceConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration">put_crawler_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity">put_provider_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetCrawlerConfiguration">reset_crawler_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetProviderIdentity">reset_provider_identity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_crawler_configuration` <a name="put_crawler_configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration"></a>

```python
def put_crawler_configuration(
  value: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>]]

---

##### `put_provider_identity` <a name="put_provider_identity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity"></a>

```python
def put_provider_identity(
  value: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationProviderIdentity]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>]]

---

##### `reset_crawler_configuration` <a name="reset_crawler_configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetCrawlerConfiguration"></a>

```python
def reset_crawler_configuration() -> None
```

##### `reset_provider_identity` <a name="reset_provider_identity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetProviderIdentity"></a>

```python
def reset_provider_identity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfiguration">crawler_configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList">SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentity">provider_identity</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList">SecuritylakeCustomLogSourceConfigurationProviderIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfigurationInput">crawler_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentityInput">provider_identity_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crawler_configuration`<sup>Required</sup> <a name="crawler_configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfiguration"></a>

```python
crawler_configuration: SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList">SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList</a>

---

##### `provider_identity`<sup>Required</sup> <a name="provider_identity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentity"></a>

```python
provider_identity: SecuritylakeCustomLogSourceConfigurationProviderIdentityList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList">SecuritylakeCustomLogSourceConfigurationProviderIdentityList</a>

---

##### `crawler_configuration_input`<sup>Optional</sup> <a name="crawler_configuration_input" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfigurationInput"></a>

```python
crawler_configuration_input: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration">SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration</a>]]

---

##### `provider_identity_input`<sup>Optional</sup> <a name="provider_identity_input" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentityInput"></a>

```python
provider_identity_input: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationProviderIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecuritylakeCustomLogSourceConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration">SecuritylakeCustomLogSourceConfiguration</a>]

---


### SecuritylakeCustomLogSourceConfigurationProviderIdentityList <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentityList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecuritylakeCustomLogSourceConfigurationProviderIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>]]

---


### SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecuritylakeCustomLogSourceConfigurationProviderIdentity]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity">SecuritylakeCustomLogSourceConfigurationProviderIdentity</a>]

---


### SecuritylakeCustomLogSourceProviderDetailsList <a name="SecuritylakeCustomLogSourceProviderDetailsList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeCustomLogSourceProviderDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SecuritylakeCustomLogSourceProviderDetailsOutputReference <a name="SecuritylakeCustomLogSourceProviderDetailsOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_custom_log_source

securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails">SecuritylakeCustomLogSourceProviderDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.internalValue"></a>

```python
internal_value: SecuritylakeCustomLogSourceProviderDetails
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails">SecuritylakeCustomLogSourceProviderDetails</a>

---



