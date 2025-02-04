# `lakeformationResourceLfTag` Submodule <a name="`lakeformationResourceLfTag` Submodule" id="@cdktf/provider-aws.lakeformationResourceLfTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationResourceLfTag <a name="LakeformationResourceLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag aws_lakeformation_resource_lf_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTag(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str = None,
  database: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagDatabase]] = None,
  lf_tag: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagLfTag]] = None,
  table: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTable]] = None,
  table_with_columns: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumns]] = None,
  timeouts: LakeformationResourceLfTagTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.database">database</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]]</code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.lfTag">lf_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]]</code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.table">table</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]]</code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.tableWithColumns">table_with_columns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]]</code> | table_with_columns block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.database"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#database LakeformationResourceLfTag#database}

---

##### `lf_tag`<sup>Optional</sup> <a name="lf_tag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.lfTag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]]

lf_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#lf_tag LakeformationResourceLfTag#lf_tag}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.table"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]]

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#table LakeformationResourceLfTag#table}

---

##### `table_with_columns`<sup>Optional</sup> <a name="table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.tableWithColumns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]]

table_with_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#table_with_columns LakeformationResourceLfTag#table_with_columns}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#timeouts LakeformationResourceLfTag#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putLfTag">put_lf_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTableWithColumns">put_table_with_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetLfTag">reset_lf_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTableWithColumns">reset_table_with_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_database` <a name="put_database" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putDatabase"></a>

```python
def put_database(
  value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagDatabase]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putDatabase.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]]

---

##### `put_lf_tag` <a name="put_lf_tag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putLfTag"></a>

```python
def put_lf_tag(
  value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagLfTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putLfTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]]

---

##### `put_table` <a name="put_table" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTable"></a>

```python
def put_table(
  value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]]

---

##### `put_table_with_columns` <a name="put_table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTableWithColumns"></a>

```python
def put_table_with_columns(
  value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTableWithColumns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#create LakeformationResourceLfTag#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#delete LakeformationResourceLfTag#delete}

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_lf_tag` <a name="reset_lf_tag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetLfTag"></a>

```python
def reset_lf_tag() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_table_with_columns` <a name="reset_table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTableWithColumns"></a>

```python
def reset_table_with_columns() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LakeformationResourceLfTag resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTag.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTag.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LakeformationResourceLfTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakeformationResourceLfTag to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakeformationResourceLfTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationResourceLfTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList">LakeformationResourceLfTagDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lfTag">lf_tag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList">LakeformationResourceLfTagLfTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList">LakeformationResourceLfTagTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList">LakeformationResourceLfTagTableWithColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference">LakeformationResourceLfTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.databaseInput">database_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lfTagInput">lf_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableInput">table_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableWithColumnsInput">table_with_columns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.database"></a>

```python
database: LakeformationResourceLfTagDatabaseList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList">LakeformationResourceLfTagDatabaseList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lf_tag`<sup>Required</sup> <a name="lf_tag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lfTag"></a>

```python
lf_tag: LakeformationResourceLfTagLfTagList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList">LakeformationResourceLfTagLfTagList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.table"></a>

```python
table: LakeformationResourceLfTagTableList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList">LakeformationResourceLfTagTableList</a>

---

##### `table_with_columns`<sup>Required</sup> <a name="table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableWithColumns"></a>

```python
table_with_columns: LakeformationResourceLfTagTableWithColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList">LakeformationResourceLfTagTableWithColumnsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.timeouts"></a>

```python
timeouts: LakeformationResourceLfTagTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference">LakeformationResourceLfTagTimeoutsOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.databaseInput"></a>

```python
database_input: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]]

---

##### `lf_tag_input`<sup>Optional</sup> <a name="lf_tag_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.lfTagInput"></a>

```python
lf_tag_input: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagLfTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableInput"></a>

```python
table_input: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]]

---

##### `table_with_columns_input`<sup>Optional</sup> <a name="table_with_columns_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tableWithColumnsInput"></a>

```python
table_with_columns_input: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LakeformationResourceLfTagTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationResourceLfTagConfig <a name="LakeformationResourceLfTagConfig" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str = None,
  database: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagDatabase]] = None,
  lf_tag: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagLfTag]] = None,
  table: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTable]] = None,
  table_with_columns: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumns]] = None,
  timeouts: LakeformationResourceLfTagTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.database">database</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]]</code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.lfTag">lf_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]]</code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.table">table</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]]</code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.tableWithColumns">table_with_columns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]]</code> | table_with_columns block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.database"></a>

```python
database: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#database LakeformationResourceLfTag#database}

---

##### `lf_tag`<sup>Optional</sup> <a name="lf_tag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.lfTag"></a>

```python
lf_tag: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagLfTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]]

lf_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#lf_tag LakeformationResourceLfTag#lf_tag}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.table"></a>

```python
table: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]]

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#table LakeformationResourceLfTag#table}

---

##### `table_with_columns`<sup>Optional</sup> <a name="table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.tableWithColumns"></a>

```python
table_with_columns: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]]

table_with_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#table_with_columns LakeformationResourceLfTag#table_with_columns}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagConfig.property.timeouts"></a>

```python
timeouts: LakeformationResourceLfTagTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#timeouts LakeformationResourceLfTag#timeouts}

---

### LakeformationResourceLfTagDatabase <a name="LakeformationResourceLfTagDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagDatabase(
  name: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

### LakeformationResourceLfTagLfTag <a name="LakeformationResourceLfTagLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagLfTag(
  key: str,
  value: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#key LakeformationResourceLfTag#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#value LakeformationResourceLfTag#value}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#key LakeformationResourceLfTag#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#value LakeformationResourceLfTag#value}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

### LakeformationResourceLfTagTable <a name="LakeformationResourceLfTagTable" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTable(
  database_name: str,
  catalog_id: str = None,
  name: str = None,
  wildcard: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.wildcard">wildcard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#wildcard LakeformationResourceLfTag#wildcard}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable.property.wildcard"></a>

```python
wildcard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#wildcard LakeformationResourceLfTag#wildcard}.

---

### LakeformationResourceLfTagTableWithColumns <a name="LakeformationResourceLfTagTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns(
  database_name: str,
  name: str,
  catalog_id: str = None,
  column_names: typing.List[str] = None,
  column_wildcard: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumnsColumnWildcard]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#column_names LakeformationResourceLfTag#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.columnWildcard">column_wildcard</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>]]</code> | column_wildcard block. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}.

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#column_names LakeformationResourceLfTag#column_names}.

---

##### `column_wildcard`<sup>Optional</sup> <a name="column_wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns.property.columnWildcard"></a>

```python
column_wildcard: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumnsColumnWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>]]

column_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#column_wildcard LakeformationResourceLfTag#column_wildcard}

---

### LakeformationResourceLfTagTableWithColumnsColumnWildcard <a name="LakeformationResourceLfTagTableWithColumnsColumnWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard(
  excluded_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#excluded_column_names LakeformationResourceLfTag#excluded_column_names}. |

---

##### `excluded_column_names`<sup>Optional</sup> <a name="excluded_column_names" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#excluded_column_names LakeformationResourceLfTag#excluded_column_names}.

---

### LakeformationResourceLfTagTimeouts <a name="LakeformationResourceLfTagTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#create LakeformationResourceLfTag#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lakeformation_resource_lf_tag#delete LakeformationResourceLfTag#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationResourceLfTagDatabaseList <a name="LakeformationResourceLfTagDatabaseList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationResourceLfTagDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]]

---


### LakeformationResourceLfTagDatabaseOutputReference <a name="LakeformationResourceLfTagDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationResourceLfTagDatabase]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagDatabase">LakeformationResourceLfTagDatabase</a>]

---


### LakeformationResourceLfTagLfTagList <a name="LakeformationResourceLfTagLfTagList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationResourceLfTagLfTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagLfTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]]

---


### LakeformationResourceLfTagLfTagOutputReference <a name="LakeformationResourceLfTagLfTagOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationResourceLfTagLfTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagLfTag">LakeformationResourceLfTagLfTag</a>]

---


### LakeformationResourceLfTagTableList <a name="LakeformationResourceLfTagTableList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationResourceLfTagTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]]

---


### LakeformationResourceLfTagTableOutputReference <a name="LakeformationResourceLfTagTableOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetWildcard">reset_wildcard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_wildcard` <a name="reset_wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.resetWildcard"></a>

```python
def reset_wildcard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.wildcardInput">wildcard_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.wildcard">wildcard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `wildcard_input`<sup>Optional</sup> <a name="wildcard_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.wildcardInput"></a>

```python
wildcard_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.wildcard"></a>

```python
wildcard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationResourceLfTagTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTable">LakeformationResourceLfTagTable</a>]

---


### LakeformationResourceLfTagTableWithColumnsColumnWildcardList <a name="LakeformationResourceLfTagTableWithColumnsColumnWildcardList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumnsColumnWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>]]

---


### LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference <a name="LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames">reset_excluded_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_column_names` <a name="reset_excluded_column_names" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```python
def reset_excluded_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput">excluded_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_column_names_input`<sup>Optional</sup> <a name="excluded_column_names_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```python
excluded_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_column_names`<sup>Required</sup> <a name="excluded_column_names" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationResourceLfTagTableWithColumnsColumnWildcard]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>]

---


### LakeformationResourceLfTagTableWithColumnsList <a name="LakeformationResourceLfTagTableWithColumnsList" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationResourceLfTagTableWithColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]]

---


### LakeformationResourceLfTagTableWithColumnsOutputReference <a name="LakeformationResourceLfTagTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.putColumnWildcard">put_column_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetColumnWildcard">reset_column_wildcard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_wildcard` <a name="put_column_wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.putColumnWildcard"></a>

```python
def put_column_wildcard(
  value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumnsColumnWildcard]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>]]

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_column_names` <a name="reset_column_names" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_column_wildcard` <a name="reset_column_wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.resetColumnWildcard"></a>

```python
def reset_column_wildcard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnWildcard">column_wildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList">LakeformationResourceLfTagTableWithColumnsColumnWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnWildcardInput">column_wildcard_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_wildcard`<sup>Required</sup> <a name="column_wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnWildcard"></a>

```python
column_wildcard: LakeformationResourceLfTagTableWithColumnsColumnWildcardList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcardList">LakeformationResourceLfTagTableWithColumnsColumnWildcardList</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_wildcard_input`<sup>Optional</sup> <a name="column_wildcard_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnWildcardInput"></a>

```python
column_wildcard_input: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagTableWithColumnsColumnWildcard]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsColumnWildcard">LakeformationResourceLfTagTableWithColumnsColumnWildcard</a>]]

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationResourceLfTagTableWithColumns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTableWithColumns">LakeformationResourceLfTagTableWithColumns</a>]

---


### LakeformationResourceLfTagTimeoutsOutputReference <a name="LakeformationResourceLfTagTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tag

lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationResourceLfTagTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationResourceLfTag.LakeformationResourceLfTagTimeouts">LakeformationResourceLfTagTimeouts</a>]

---



