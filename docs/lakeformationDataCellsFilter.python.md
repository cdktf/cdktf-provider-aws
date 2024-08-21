# `lakeformationDataCellsFilter` Submodule <a name="`lakeformationDataCellsFilter` Submodule" id="@cdktf/provider-aws.lakeformationDataCellsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataCellsFilter <a name="LakeformationDataCellsFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter aws_lakeformation_data_cells_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  table_data: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableData]] = None,
  timeouts: LakeformationDataCellsFilterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableData">table_data</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]]</code> | table_data block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `table_data`<sup>Optional</sup> <a name="table_data" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.tableData"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]]

table_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#table_data LakeformationDataCellsFilter#table_data}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#timeouts LakeformationDataCellsFilter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData">put_table_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTableData">reset_table_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_table_data` <a name="put_table_data" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData"></a>

```python
def put_table_data(
  value: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableData]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#create LakeformationDataCellsFilter#create}

---

##### `reset_table_data` <a name="reset_table_data" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTableData"></a>

```python
def reset_table_data() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakeformationDataCellsFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakeformationDataCellsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationDataCellsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableData">table_data</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList">LakeformationDataCellsFilterTableDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference">LakeformationDataCellsFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableDataInput">table_data_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `table_data`<sup>Required</sup> <a name="table_data" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableData"></a>

```python
table_data: LakeformationDataCellsFilterTableDataList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList">LakeformationDataCellsFilterTableDataList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeouts"></a>

```python
timeouts: LakeformationDataCellsFilterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference">LakeformationDataCellsFilterTimeoutsOutputReference</a>

---

##### `table_data_input`<sup>Optional</sup> <a name="table_data_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableDataInput"></a>

```python
table_data_input: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LakeformationDataCellsFilterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataCellsFilterConfig <a name="LakeformationDataCellsFilterConfig" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  table_data: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableData]] = None,
  timeouts: LakeformationDataCellsFilterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableData">table_data</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]]</code> | table_data block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `table_data`<sup>Optional</sup> <a name="table_data" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableData"></a>

```python
table_data: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]]

table_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#table_data LakeformationDataCellsFilter#table_data}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.timeouts"></a>

```python
timeouts: LakeformationDataCellsFilterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#timeouts LakeformationDataCellsFilter#timeouts}

---

### LakeformationDataCellsFilterTableData <a name="LakeformationDataCellsFilterTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData(
  database_name: str,
  name: str,
  table_catalog_id: str,
  table_name: str,
  column_names: typing.List[str] = None,
  column_wildcard: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataColumnWildcard]] = None,
  row_filter: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilter]] = None,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnWildcard">column_wildcard</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>]]</code> | column_wildcard block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.rowFilter">row_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>]]</code> | row_filter block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}.

---

##### `table_catalog_id`<sup>Required</sup> <a name="table_catalog_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableCatalogId"></a>

```python
table_catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}.

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}.

---

##### `column_wildcard`<sup>Optional</sup> <a name="column_wildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnWildcard"></a>

```python
column_wildcard: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataColumnWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>]]

column_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.rowFilter"></a>

```python
row_filter: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>]]

row_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}.

---

### LakeformationDataCellsFilterTableDataColumnWildcard <a name="LakeformationDataCellsFilterTableDataColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard(
  excluded_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}. |

---

##### `excluded_column_names`<sup>Optional</sup> <a name="excluded_column_names" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}.

---

### LakeformationDataCellsFilterTableDataRowFilter <a name="LakeformationDataCellsFilterTableDataRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter(
  all_rows_wildcard: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard]] = None,
  filter_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.allRowsWildcard">all_rows_wildcard</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>]]</code> | all_rows_wildcard block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.filterExpression">filter_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}. |

---

##### `all_rows_wildcard`<sup>Optional</sup> <a name="all_rows_wildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.allRowsWildcard"></a>

```python
all_rows_wildcard: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>]]

all_rows_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

##### `filter_expression`<sup>Optional</sup> <a name="filter_expression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.filterExpression"></a>

```python
filter_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}.

---

### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard()
```


### LakeformationDataCellsFilterTimeouts <a name="LakeformationDataCellsFilterTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/lakeformation_data_cells_filter#create LakeformationDataCellsFilter#create}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataCellsFilterTableDataColumnWildcardList <a name="LakeformationDataCellsFilterTableDataColumnWildcardList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationDataCellsFilterTableDataColumnWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataColumnWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>]]

---


### LakeformationDataCellsFilterTableDataColumnWildcardOutputReference <a name="LakeformationDataCellsFilterTableDataColumnWildcardOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resetExcludedColumnNames">reset_excluded_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_column_names` <a name="reset_excluded_column_names" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```python
def reset_excluded_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNamesInput">excluded_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_column_names_input`<sup>Optional</sup> <a name="excluded_column_names_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```python
excluded_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_column_names`<sup>Required</sup> <a name="excluded_column_names" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationDataCellsFilterTableDataColumnWildcard]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>]

---


### LakeformationDataCellsFilterTableDataList <a name="LakeformationDataCellsFilterTableDataList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationDataCellsFilterTableDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]]

---


### LakeformationDataCellsFilterTableDataOutputReference <a name="LakeformationDataCellsFilterTableDataOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard">put_column_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter">put_row_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnWildcard">reset_column_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetRowFilter">reset_row_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_wildcard` <a name="put_column_wildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard"></a>

```python
def put_column_wildcard(
  value: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataColumnWildcard]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>]]

---

##### `put_row_filter` <a name="put_row_filter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter"></a>

```python
def put_row_filter(
  value: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>]]

---

##### `reset_column_names` <a name="reset_column_names" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_column_wildcard` <a name="reset_column_wildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnWildcard"></a>

```python
def reset_column_wildcard() -> None
```

##### `reset_row_filter` <a name="reset_row_filter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetRowFilter"></a>

```python
def reset_row_filter() -> None
```

##### `reset_version_id` <a name="reset_version_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetVersionId"></a>

```python
def reset_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcard">column_wildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList">LakeformationDataCellsFilterTableDataColumnWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilter">row_filter</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList">LakeformationDataCellsFilterTableDataRowFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcardInput">column_wildcard_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilterInput">row_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogIdInput">table_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_wildcard`<sup>Required</sup> <a name="column_wildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcard"></a>

```python
column_wildcard: LakeformationDataCellsFilterTableDataColumnWildcardList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList">LakeformationDataCellsFilterTableDataColumnWildcardList</a>

---

##### `row_filter`<sup>Required</sup> <a name="row_filter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilter"></a>

```python
row_filter: LakeformationDataCellsFilterTableDataRowFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList">LakeformationDataCellsFilterTableDataRowFilterList</a>

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_wildcard_input`<sup>Optional</sup> <a name="column_wildcard_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcardInput"></a>

```python
column_wildcard_input: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataColumnWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard">LakeformationDataCellsFilterTableDataColumnWildcard</a>]]

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `row_filter_input`<sup>Optional</sup> <a name="row_filter_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilterInput"></a>

```python
row_filter_input: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>]]

---

##### `table_catalog_id_input`<sup>Optional</sup> <a name="table_catalog_id_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogIdInput"></a>

```python
table_catalog_id_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `table_catalog_id`<sup>Required</sup> <a name="table_catalog_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogId"></a>

```python
table_catalog_id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationDataCellsFilterTableData]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData">LakeformationDataCellsFilterTableData</a>]

---


### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>]]

---


### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>]

---


### LakeformationDataCellsFilterTableDataRowFilterList <a name="LakeformationDataCellsFilterTableDataRowFilterList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationDataCellsFilterTableDataRowFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>]]

---


### LakeformationDataCellsFilterTableDataRowFilterOutputReference <a name="LakeformationDataCellsFilterTableDataRowFilterOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard">put_all_rows_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetAllRowsWildcard">reset_all_rows_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetFilterExpression">reset_filter_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_all_rows_wildcard` <a name="put_all_rows_wildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard"></a>

```python
def put_all_rows_wildcard(
  value: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>]]

---

##### `reset_all_rows_wildcard` <a name="reset_all_rows_wildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetAllRowsWildcard"></a>

```python
def reset_all_rows_wildcard() -> None
```

##### `reset_filter_expression` <a name="reset_filter_expression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetFilterExpression"></a>

```python
def reset_filter_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcard">all_rows_wildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcardInput">all_rows_wildcard_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpressionInput">filter_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpression">filter_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_rows_wildcard`<sup>Required</sup> <a name="all_rows_wildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcard"></a>

```python
all_rows_wildcard: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList</a>

---

##### `all_rows_wildcard_input`<sup>Optional</sup> <a name="all_rows_wildcard_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcardInput"></a>

```python
all_rows_wildcard_input: typing.Union[IResolvable, typing.List[LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard</a>]]

---

##### `filter_expression_input`<sup>Optional</sup> <a name="filter_expression_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpressionInput"></a>

```python
filter_expression_input: str
```

- *Type:* str

---

##### `filter_expression`<sup>Required</sup> <a name="filter_expression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpression"></a>

```python
filter_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationDataCellsFilterTableDataRowFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter">LakeformationDataCellsFilterTableDataRowFilter</a>]

---


### LakeformationDataCellsFilterTimeoutsOutputReference <a name="LakeformationDataCellsFilterTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_cells_filter

lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationDataCellsFilterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>]

---



