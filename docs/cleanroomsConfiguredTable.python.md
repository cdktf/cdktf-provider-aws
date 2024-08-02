# `cleanroomsConfiguredTable` Submodule <a name="`cleanroomsConfiguredTable` Submodule" id="@cdktf/provider-aws.cleanroomsConfiguredTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsConfiguredTable <a name="CleanroomsConfiguredTable" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table aws_cleanrooms_configured_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_columns: typing.List[str],
  analysis_method: str,
  name: str,
  table_reference: CleanroomsConfiguredTableTableReference,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: CleanroomsConfiguredTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.allowedColumns">allowed_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.analysisMethod">analysis_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.tableReference">table_reference</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | table_reference block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#id CleanroomsConfiguredTable#id}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#tags CleanroomsConfiguredTable#tags}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#tags_all CleanroomsConfiguredTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_columns`<sup>Required</sup> <a name="allowed_columns" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.allowedColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}.

---

##### `analysis_method`<sup>Required</sup> <a name="analysis_method" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.analysisMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}.

---

##### `table_reference`<sup>Required</sup> <a name="table_reference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.tableReference"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

table_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#table_reference CleanroomsConfiguredTable#table_reference}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#id CleanroomsConfiguredTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#tags CleanroomsConfiguredTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#tags_all CleanroomsConfiguredTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#timeouts CleanroomsConfiguredTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference">put_table_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_table_reference` <a name="put_table_reference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference"></a>

```python
def put_table_reference(
  database_name: str,
  table_name: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}.

---

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#create CleanroomsConfiguredTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#delete CleanroomsConfiguredTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#update CleanroomsConfiguredTable#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CleanroomsConfiguredTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CleanroomsConfiguredTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsConfiguredTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsConfiguredTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CleanroomsConfiguredTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReference">table_reference</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference">CleanroomsConfiguredTableTableReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference">CleanroomsConfiguredTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumnsInput">allowed_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethodInput">analysis_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReferenceInput">table_reference_input</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumns">allowed_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethod">analysis_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `table_reference`<sup>Required</sup> <a name="table_reference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReference"></a>

```python
table_reference: CleanroomsConfiguredTableTableReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference">CleanroomsConfiguredTableTableReferenceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.timeouts"></a>

```python
timeouts: CleanroomsConfiguredTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference">CleanroomsConfiguredTableTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allowed_columns_input`<sup>Optional</sup> <a name="allowed_columns_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumnsInput"></a>

```python
allowed_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `analysis_method_input`<sup>Optional</sup> <a name="analysis_method_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethodInput"></a>

```python
analysis_method_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `table_reference_input`<sup>Optional</sup> <a name="table_reference_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReferenceInput"></a>

```python
table_reference_input: CleanroomsConfiguredTableTableReference
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CleanroomsConfiguredTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a>]

---

##### `allowed_columns`<sup>Required</sup> <a name="allowed_columns" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumns"></a>

```python
allowed_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `analysis_method`<sup>Required</sup> <a name="analysis_method" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethod"></a>

```python
analysis_method: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsConfiguredTableConfig <a name="CleanroomsConfiguredTableConfig" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_columns: typing.List[str],
  analysis_method: str,
  name: str,
  table_reference: CleanroomsConfiguredTableTableReference,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: CleanroomsConfiguredTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.allowedColumns">allowed_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisMethod">analysis_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tableReference">table_reference</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | table_reference block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#id CleanroomsConfiguredTable#id}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#tags CleanroomsConfiguredTable#tags}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#tags_all CleanroomsConfiguredTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_columns`<sup>Required</sup> <a name="allowed_columns" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.allowedColumns"></a>

```python
allowed_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}.

---

##### `analysis_method`<sup>Required</sup> <a name="analysis_method" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisMethod"></a>

```python
analysis_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}.

---

##### `table_reference`<sup>Required</sup> <a name="table_reference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tableReference"></a>

```python
table_reference: CleanroomsConfiguredTableTableReference
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

table_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#table_reference CleanroomsConfiguredTable#table_reference}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#id CleanroomsConfiguredTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#tags CleanroomsConfiguredTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#tags_all CleanroomsConfiguredTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.timeouts"></a>

```python
timeouts: CleanroomsConfiguredTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#timeouts CleanroomsConfiguredTable#timeouts}

---

### CleanroomsConfiguredTableTableReference <a name="CleanroomsConfiguredTableTableReference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference(
  database_name: str,
  table_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}.

---

### CleanroomsConfiguredTableTimeouts <a name="CleanroomsConfiguredTableTimeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#create CleanroomsConfiguredTable#create}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#delete CleanroomsConfiguredTable#delete}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#update CleanroomsConfiguredTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#create CleanroomsConfiguredTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#delete CleanroomsConfiguredTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/cleanrooms_configured_table#update CleanroomsConfiguredTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsConfiguredTableTableReferenceOutputReference <a name="CleanroomsConfiguredTableTableReferenceOutputReference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue"></a>

```python
internal_value: CleanroomsConfiguredTableTableReference
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

---


### CleanroomsConfiguredTableTimeoutsOutputReference <a name="CleanroomsConfiguredTableTimeoutsOutputReference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_configured_table

cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanroomsConfiguredTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a>]

---



