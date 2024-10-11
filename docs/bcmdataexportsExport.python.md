# `bcmdataexportsExport` Submodule <a name="`bcmdataexportsExport` Submodule" id="@cdktf/provider-aws.bcmdataexportsExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmdataexportsExport <a name="BcmdataexportsExport" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export aws_bcmdataexports_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export: typing.Union[IResolvable, typing.List[BcmdataexportsExportExport]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BcmdataexportsExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.export">export</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]]</code> | export block. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.export"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]]

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#timeouts BcmdataexportsExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putExport">put_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetExport">reset_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_export` <a name="put_export" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putExport"></a>

```python
def put_export(
  value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExport]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putExport.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#create BcmdataexportsExport#create}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#update BcmdataexportsExport#update}

---

##### `reset_export` <a name="reset_export" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetExport"></a>

```python
def reset_export() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BcmdataexportsExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BcmdataexportsExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BcmdataexportsExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BcmdataexportsExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BcmdataexportsExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.export">export</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList">BcmdataexportsExportExportList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference">BcmdataexportsExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.exportInput">export_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.export"></a>

```python
export: BcmdataexportsExportExportList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList">BcmdataexportsExportExportList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.timeouts"></a>

```python
timeouts: BcmdataexportsExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference">BcmdataexportsExportTimeoutsOutputReference</a>

---

##### `export_input`<sup>Optional</sup> <a name="export_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.exportInput"></a>

```python
export_input: typing.Union[IResolvable, typing.List[BcmdataexportsExportExport]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BcmdataexportsExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a>]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BcmdataexportsExportConfig <a name="BcmdataexportsExportConfig" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export: typing.Union[IResolvable, typing.List[BcmdataexportsExportExport]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BcmdataexportsExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.export">export</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]]</code> | export block. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.export"></a>

```python
export: typing.Union[IResolvable, typing.List[BcmdataexportsExportExport]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]]

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.timeouts"></a>

```python
timeouts: BcmdataexportsExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#timeouts BcmdataexportsExport#timeouts}

---

### BcmdataexportsExportExport <a name="BcmdataexportsExportExport" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExport(
  name: str,
  data_query: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDataQuery]] = None,
  description: str = None,
  destination_configurations: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurations]] = None,
  refresh_cadence: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportRefreshCadence]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.dataQuery">data_query</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>]]</code> | data_query block. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.destinationConfigurations">destination_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>]]</code> | destination_configurations block. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.refreshCadence">refresh_cadence</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>]]</code> | refresh_cadence block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}.

---

##### `data_query`<sup>Optional</sup> <a name="data_query" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.dataQuery"></a>

```python
data_query: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDataQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>]]

data_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#data_query BcmdataexportsExport#data_query}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}.

---

##### `destination_configurations`<sup>Optional</sup> <a name="destination_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.destinationConfigurations"></a>

```python
destination_configurations: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>]]

destination_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#destination_configurations BcmdataexportsExport#destination_configurations}

---

##### `refresh_cadence`<sup>Optional</sup> <a name="refresh_cadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.refreshCadence"></a>

```python
refresh_cadence: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportRefreshCadence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>]]

refresh_cadence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#refresh_cadence BcmdataexportsExport#refresh_cadence}

---

### BcmdataexportsExportExportDataQuery <a name="BcmdataexportsExportExportDataQuery" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDataQuery(
  query_statement: str,
  table_configurations: typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.queryStatement">query_statement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.tableConfigurations">table_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}. |

---

##### `query_statement`<sup>Required</sup> <a name="query_statement" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.queryStatement"></a>

```python
query_statement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}.

---

##### `table_configurations`<sup>Optional</sup> <a name="table_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.tableConfigurations"></a>

```python
table_configurations: typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}.

---

### BcmdataexportsExportExportDestinationConfigurations <a name="BcmdataexportsExportExportDestinationConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations(
  s3_destination: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3Destination]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.property.s3Destination">s3_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>]]</code> | s3_destination block. |

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.property.s3Destination"></a>

```python
s3_destination: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3Destination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>]]

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#s3_destination BcmdataexportsExport#s3_destination}

---

### BcmdataexportsExportExportDestinationConfigurationsS3Destination <a name="BcmdataexportsExportExportDestinationConfigurationsS3Destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination(
  s3_bucket: str,
  s3_prefix: str,
  s3_region: str,
  s3_output_configurations: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Region">s3_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3OutputConfigurations">s3_output_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>]]</code> | s3_output_configurations block. |

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}.

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}.

---

##### `s3_region`<sup>Required</sup> <a name="s3_region" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Region"></a>

```python
s3_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}.

---

##### `s3_output_configurations`<sup>Optional</sup> <a name="s3_output_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3OutputConfigurations"></a>

```python
s3_output_configurations: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>]]

s3_output_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#s3_output_configurations BcmdataexportsExport#s3_output_configurations}

---

### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations(
  compression: str,
  format: str,
  output_type: str,
  overwrite: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.compression">compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.outputType">output_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.overwrite">overwrite</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}. |

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.compression"></a>

```python
compression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}.

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}.

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.overwrite"></a>

```python
overwrite: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}.

---

### BcmdataexportsExportExportRefreshCadence <a name="BcmdataexportsExportExportRefreshCadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence(
  frequency: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}.

---

### BcmdataexportsExportTimeouts <a name="BcmdataexportsExportTimeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#create BcmdataexportsExport#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bcmdataexports_export#update BcmdataexportsExport#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BcmdataexportsExportExportDataQueryList <a name="BcmdataexportsExportExportDataQueryList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDataQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmdataexportsExportExportDataQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDataQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>]]

---


### BcmdataexportsExportExportDataQueryOutputReference <a name="BcmdataexportsExportExportDataQueryOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resetTableConfigurations">reset_table_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_table_configurations` <a name="reset_table_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resetTableConfigurations"></a>

```python
def reset_table_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatementInput">query_statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurationsInput">table_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatement">query_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations">table_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_statement_input`<sup>Optional</sup> <a name="query_statement_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatementInput"></a>

```python
query_statement_input: str
```

- *Type:* str

---

##### `table_configurations_input`<sup>Optional</sup> <a name="table_configurations_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurationsInput"></a>

```python
table_configurations_input: typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]

---

##### `query_statement`<sup>Required</sup> <a name="query_statement" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatement"></a>

```python
query_statement: str
```

- *Type:* str

---

##### `table_configurations`<sup>Required</sup> <a name="table_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations"></a>

```python
table_configurations: typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BcmdataexportsExportExportDataQuery]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>]

---


### BcmdataexportsExportExportDestinationConfigurationsList <a name="BcmdataexportsExportExportDestinationConfigurationsList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmdataexportsExportExportDestinationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>]]

---


### BcmdataexportsExportExportDestinationConfigurationsOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination">put_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resetS3Destination">reset_s3_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_destination` <a name="put_s3_destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination"></a>

```python
def put_s3_destination(
  value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3Destination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>]]

---

##### `reset_s3_destination` <a name="reset_s3_destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resetS3Destination"></a>

```python
def reset_s3_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList">BcmdataexportsExportExportDestinationConfigurationsS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3DestinationInput">s3_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination"></a>

```python
s3_destination: BcmdataexportsExportExportDestinationConfigurationsS3DestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList">BcmdataexportsExportExportDestinationConfigurationsS3DestinationList</a>

---

##### `s3_destination_input`<sup>Optional</sup> <a name="s3_destination_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3DestinationInput"></a>

```python
s3_destination_input: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3Destination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BcmdataexportsExportExportDestinationConfigurations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>]

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationList <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3Destination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>]]

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations">put_s3_output_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resetS3OutputConfigurations">reset_s3_output_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_output_configurations` <a name="put_s3_output_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations"></a>

```python
def put_s3_output_configurations(
  value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>]]

---

##### `reset_s3_output_configurations` <a name="reset_s3_output_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resetS3OutputConfigurations"></a>

```python
def reset_s3_output_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations">s3_output_configurations</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurationsInput">s3_output_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3PrefixInput">s3_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3RegionInput">s3_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region">s3_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_output_configurations`<sup>Required</sup> <a name="s3_output_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations"></a>

```python
s3_output_configurations: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList</a>

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_output_configurations_input`<sup>Optional</sup> <a name="s3_output_configurations_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurationsInput"></a>

```python
s3_output_configurations_input: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>]]

---

##### `s3_prefix_input`<sup>Optional</sup> <a name="s3_prefix_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3PrefixInput"></a>

```python
s3_prefix_input: str
```

- *Type:* str

---

##### `s3_region_input`<sup>Optional</sup> <a name="s3_region_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3RegionInput"></a>

```python
s3_region_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `s3_region`<sup>Required</sup> <a name="s3_region" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region"></a>

```python
s3_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BcmdataexportsExportExportDestinationConfigurationsS3Destination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>]

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>]]

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwriteInput">overwrite_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite">overwrite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `overwrite_input`<sup>Optional</sup> <a name="overwrite_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwriteInput"></a>

```python
overwrite_input: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite"></a>

```python
overwrite: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>]

---


### BcmdataexportsExportExportList <a name="BcmdataexportsExportExportList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmdataexportsExportExportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExport]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]]

---


### BcmdataexportsExportExportOutputReference <a name="BcmdataexportsExportExportOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery">put_data_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations">put_destination_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence">put_refresh_cadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDataQuery">reset_data_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDestinationConfigurations">reset_destination_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetRefreshCadence">reset_refresh_cadence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_query` <a name="put_data_query" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery"></a>

```python
def put_data_query(
  value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDataQuery]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>]]

---

##### `put_destination_configurations` <a name="put_destination_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations"></a>

```python
def put_destination_configurations(
  value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>]]

---

##### `put_refresh_cadence` <a name="put_refresh_cadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence"></a>

```python
def put_refresh_cadence(
  value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportRefreshCadence]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>]]

---

##### `reset_data_query` <a name="reset_data_query" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDataQuery"></a>

```python
def reset_data_query() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_configurations` <a name="reset_destination_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDestinationConfigurations"></a>

```python
def reset_destination_configurations() -> None
```

##### `reset_refresh_cadence` <a name="reset_refresh_cadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetRefreshCadence"></a>

```python
def reset_refresh_cadence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQuery">data_query</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList">BcmdataexportsExportExportDataQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurations">destination_configurations</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList">BcmdataexportsExportExportDestinationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.exportArn">export_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadence">refresh_cadence</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList">BcmdataexportsExportExportRefreshCadenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQueryInput">data_query_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurationsInput">destination_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadenceInput">refresh_cadence_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_query`<sup>Required</sup> <a name="data_query" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQuery"></a>

```python
data_query: BcmdataexportsExportExportDataQueryList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList">BcmdataexportsExportExportDataQueryList</a>

---

##### `destination_configurations`<sup>Required</sup> <a name="destination_configurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurations"></a>

```python
destination_configurations: BcmdataexportsExportExportDestinationConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList">BcmdataexportsExportExportDestinationConfigurationsList</a>

---

##### `export_arn`<sup>Required</sup> <a name="export_arn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.exportArn"></a>

```python
export_arn: str
```

- *Type:* str

---

##### `refresh_cadence`<sup>Required</sup> <a name="refresh_cadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadence"></a>

```python
refresh_cadence: BcmdataexportsExportExportRefreshCadenceList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList">BcmdataexportsExportExportRefreshCadenceList</a>

---

##### `data_query_input`<sup>Optional</sup> <a name="data_query_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQueryInput"></a>

```python
data_query_input: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDataQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_configurations_input`<sup>Optional</sup> <a name="destination_configurations_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurationsInput"></a>

```python
destination_configurations_input: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportDestinationConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `refresh_cadence_input`<sup>Optional</sup> <a name="refresh_cadence_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadenceInput"></a>

```python
refresh_cadence_input: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportRefreshCadence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BcmdataexportsExportExport]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>]

---


### BcmdataexportsExportExportRefreshCadenceList <a name="BcmdataexportsExportExportRefreshCadenceList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmdataexportsExportExportRefreshCadenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BcmdataexportsExportExportRefreshCadence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>]]

---


### BcmdataexportsExportExportRefreshCadenceOutputReference <a name="BcmdataexportsExportExportRefreshCadenceOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BcmdataexportsExportExportRefreshCadence]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>]

---


### BcmdataexportsExportTimeoutsOutputReference <a name="BcmdataexportsExportTimeoutsOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bcmdataexports_export

bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BcmdataexportsExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a>]

---



